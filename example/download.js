const hlsDl = require('../')

const run = async () => {
  await hlsDl.downloadToFile({
    url: 'https://url/to/m3u8'
  }, 'file.mp3')

  const blob = await hlsDl.download({
    url: 'https://dajslfsdf'
  })

  console.log(blob)
}

run()
