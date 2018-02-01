const inputStream = require('..')

describe('tsv input', () => {
  test('reads a tsv file', done => {
    const rows = []

    const input = inputStream(__dirname + '/__data__/test.tsv')

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
