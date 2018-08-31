const inputStream = require('..')

describe('xml input', () => {
  test('reads an xml file', done => {
    const rows = []

    const input = inputStream(__dirname + '/__data__/test.xml', {
      element: 'item',
    })

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
