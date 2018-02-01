const inputStream = require('..')

describe('ndjson input', () => {
  test('reads a ndjson file', done => {
    const rows = []

    const input = inputStream(__dirname + '/__data__/test.ndjson')

    input.on('data', data => {
      rows.push(data)
      expect(Object.keys(data).length).toEqual(3)
    })

    input.on('end', () => {
      expect(rows.length).toBe(5)
      done()
    })
  })
})
