#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PUBLIC_DIR = path.join(__dirname, '..', 'public')
const CAROUSEL_DIR = path.join(PUBLIC_DIR, 'Carousel')
const RESIDENTS_DIR = path.join(PUBLIC_DIR, 'Residents')
const CAROUSEL_MAX_WIDTH = 800
const RESIDENTS_MAX_SIZE = 256
const CAROUSEL_WEBP_QUALITY = 82
const RESIDENTS_WEBP_QUALITY = 82
const DEFAULT_WEBP_QUALITY = 80

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(full)))
    } else {
      files.push(full)
    }
  }
  return files
}

function isInCarousel(filePath) {
  const relative = path.relative(CAROUSEL_DIR, filePath)
  return !relative.startsWith('..') && !path.isAbsolute(relative)
}

function isInResidents(filePath) {
  const relative = path.relative(RESIDENTS_DIR, filePath)
  return !relative.startsWith('..') && !path.isAbsolute(relative)
}

async function convertFile(file) {
  const ext = path.extname(file).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return false
  const out = file.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  const forCarousel = isInCarousel(file)
  const forResidents = isInResidents(file)
  const shouldOptimize = forCarousel || forResidents
  try {
    if (!shouldOptimize) {
      try {
        const [sIn, sOut] = await Promise.all([fs.stat(file), fs.stat(out)])
        if (sOut.mtime >= sIn.mtime) return false
      } catch (e) {}
    }

    let pipeline = sharp(file)
    if (forCarousel) {
      pipeline = pipeline.resize({ width: CAROUSEL_MAX_WIDTH, fit: 'inside' })
    } else if (forResidents) {
      pipeline = pipeline.resize({ width: RESIDENTS_MAX_SIZE, height: RESIDENTS_MAX_SIZE, fit: 'inside' })
    }
    const quality = forCarousel ? CAROUSEL_WEBP_QUALITY : forResidents ? RESIDENTS_WEBP_QUALITY : DEFAULT_WEBP_QUALITY
    await pipeline.webp({ quality }).toFile(out)
    const label = forCarousel ? `(carousel ${CAROUSEL_MAX_WIDTH}px)` : forResidents ? `(residents ${RESIDENTS_MAX_SIZE}px)` : ''
    console.log('Converted:', path.relative(PUBLIC_DIR, file), '->', path.relative(PUBLIC_DIR, out), label)
    return true
  } catch (err) {
    console.error('Failed convert:', file, err.message)
    return false
  }
}

async function optimizeCarouselWebp() {
  let carouselFiles = []
  try {
    carouselFiles = await walk(CAROUSEL_DIR)
  } catch (e) {
    return
  }
  const webpFiles = carouselFiles.filter((p) => path.extname(p).toLowerCase() === '.webp')
  for (const file of webpFiles) {
    try {
      const meta = await sharp(file).metadata()
      const w = meta.width || 0
      if (w <= CAROUSEL_MAX_WIDTH) continue
      const tmpFile = file + '.tmp.webp'
      await sharp(file)
        .resize({ width: CAROUSEL_MAX_WIDTH, fit: 'inside' })
        .webp({ quality: CAROUSEL_WEBP_QUALITY })
        .toFile(tmpFile)
      await fs.rename(tmpFile, file)
      console.log('Optimized carousel:', path.relative(PUBLIC_DIR, file))
    } catch (err) {
      console.error('Failed optimize:', file, err.message)
    }
  }
}

async function optimizeResidentsImages() {
  let residentsFiles = []
  try {
    residentsFiles = await walk(RESIDENTS_DIR)
  } catch (e) {
    return
  }
  const webpFiles = residentsFiles.filter((p) => path.extname(p).toLowerCase() === '.webp')
  for (const file of webpFiles) {
    try {
      const meta = await sharp(file).metadata()
      const w = meta.width || 0
      const h = meta.height || 0
      if (w <= RESIDENTS_MAX_SIZE && h <= RESIDENTS_MAX_SIZE) continue
      const tmpFile = file + '.tmp.webp'
      await sharp(file)
        .resize({ width: RESIDENTS_MAX_SIZE, height: RESIDENTS_MAX_SIZE, fit: 'inside' })
        .webp({ quality: RESIDENTS_WEBP_QUALITY })
        .toFile(tmpFile)
      await fs.rename(tmpFile, file)
      console.log('Optimized residents:', path.relative(PUBLIC_DIR, file))
    } catch (err) {
      console.error('Failed optimize residents:', file, err.message)
    }
  }
}

async function main() {
  try {
    const all = await walk(PUBLIC_DIR)
    const images = all.filter(p => /\.(jpg|jpeg|png)$/i.test(p))
    console.log('Found images:', images.length)
    let converted = 0
    for (const img of images) {
      // skip hidden files
      if (path.basename(img).startsWith('.')) continue
      const ok = await convertFile(img)
      if (ok) converted++
    }
    console.log(`Done. Converted: ${converted}`)
    await optimizeCarouselWebp()
    await optimizeResidentsImages()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

main()
