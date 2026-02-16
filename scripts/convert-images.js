#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PUBLIC_DIR = path.join(__dirname, '..', 'public')

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

async function convertFile(file) {
  const ext = path.extname(file).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return false
  const out = file.replace(/\.(jpg|jpeg|png)$/i, '.webp')
  try {
    // Skip if webp already exists and is newer
    try {
      const [sIn, sOut] = await Promise.all([fs.stat(file), fs.stat(out)])
      if (sOut.mtime >= sIn.mtime) return false
    } catch (e) {
      // out doesn't exist -> proceed
    }

    await sharp(file)
      .webp({ quality: 80 })
      .toFile(out)
    console.log('Converted:', path.relative(PUBLIC_DIR, file), '->', path.relative(PUBLIC_DIR, out))
    return true
  } catch (err) {
    console.error('Failed convert:', file, err.message)
    return false
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
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

main()
