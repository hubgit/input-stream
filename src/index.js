const fs = require('fs')
const csv = require('csv-parser')
const ndjson = require('ndjson')
const path = require('path')

module.exports = function (filename, options) {
  const parser = parserFromFilename(filename, options)

  const input = fs.createReadStream(filename)

  // input.on('finish', function () {
  //   console.log(`Finished reading from ${filename}`)
  // })

  input.pipe(parser)

  return parser
}

function parserFromFilename(filename, options) {
  switch (path.extname(filename)) {
    case '.ndjson':
      return ndjson.parse()

    case '.csv':
      return csv(options)

    case '.tsv':
      return csv({
        ...options,
        separator: '  ' // NOTE: not '\t'
      })

    default:
      throw new Error('Unsupported file type')
  }
}
