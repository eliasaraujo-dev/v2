import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const distDir = resolve('dist')
const templatePath = resolve(distDir, 'index.html')
const serverEntryPath = resolve(distDir, 'server/entry-server.js')

const template = await readFile(templatePath, 'utf-8')
const { render } = await import(pathToFileURL(serverEntryPath).href)

const appHtml = render()
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

await writeFile(templatePath, html)
