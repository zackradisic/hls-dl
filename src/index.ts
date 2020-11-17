import { Parser } from 'm3u8-parser'

const downloadM3U8 = async (url: string) => {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }

    return response.text()
  })
}

const parseM3U8 = (m3u8: string) => {
  const parser = new Parser()
  parser.push(m3u8)
  parser.end()
  return parser.manifest
}

const downloadSegments = async (manifest: any): Promise<ArrayBuffer[]> => {
  const urls = manifest.segments.map(segment => segment.uri)
  const promises: Promise<ArrayBuffer>[] = urls.map(async url => await fetch(url).then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }

    if (response.headers.get('Content-Type').toLowerCase() === 'audio/mpeg') {
      throw Error('Got invalid Content-Type while downloading HLS segments: ' + response.headers.get('Content-Type'))
    }

    return response.arrayBuffer()
  }))
  return await Promise.all(promises)
}

interface DownloadOptions {
  url?: string,
  m3u8?: string
}

export const download = async (options: DownloadOptions) => {
  let m3u8
  if (options.url) {
    m3u8 = await downloadM3U8(options.url)
  }
  if (!options.url && !options.m3u8) {
    throw new Error('No url or m3u8 string specified')
  }
  const parsed = parseM3U8(m3u8)
  if (parsed.segments.length === 0) {
    throw new Error('Got an invalid M3U8 file, check the provided URL or m3u8 string is valid')
  }
  const segments = await downloadSegments(parsed)
  const blob = new Blob(segments)
  return blob
}

export const downloadToFile = async (options: DownloadOptions, filename: string) => {
  const blob = await download(options)
  const URL = window.URL || window.webkitURL
  const u = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = u
  a.download = filename
  document.body.appendChild(a)
  a.click()
  window.URL.revokeObjectURL(u)
}
