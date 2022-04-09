const inputStream = require('..')

describe('tsv input', () => {
  test('reads a tsv file', done => {
    const rows = []

    const input = inputStream(__dirname + '/__data__/test.tsv')

    input.on('data', data => {
      rows.push(data)
      expect([3, 5]).toContain(Object.keys(data).length)
    })

    input.on('end', () => {
      expect(rows.length).toBe(5)
      done()
    })
  })
})
