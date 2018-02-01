const inputStream = require('..')

describe('csv input', () => {
  test('reads a csv file', done => {
    const rows = []

    const input = inputStream(__dirname + '/__data__/test.csv')

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
