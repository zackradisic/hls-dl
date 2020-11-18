# hls-dl

Lightweight library for downloading and concatenating HLS audio segments in the browser.

Via NPM:
```
npm install hls-dl
```

Or browser:
```HTML
<script src="https://cdn.jsdelivr.net/npm/@zackradisic/hls-dl@latest/dist/hls-dl.var.min.js"></script>

```

# Quick Start

```javascript

const run = async () => {
  // Downloads the .m3u8 file
  // and then the audio segments
  await hlsDl.downloadToFile({
    url: 'https://url/to/m3u8'
  }, 'file.mp3')

  const m3u8String = `#EXTM3U
  #EXT-X-VERSION:6
  #EXT-X-PLAYLIST-TYPE:VOD
  #EXT-X-TARGETDURATION:10
  #EXT-X-MEDIA-SEQUENCE:0
  #EXTINF:1.985272,
  https://sdlfjsflkjsdf
  ...
  ...
  `

  // Or if you have the .m3u8 file
  await hlsDl.downloadToFile({
    m3u8: m3u8String
  }, 'file.mp3')
}

run()
```