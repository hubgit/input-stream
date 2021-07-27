# input-stream

## Install

`npm install --save input-stream`

or

`yarn add input-stream`

## Formats

The input stream functions as an async iterator, so each item can be awaited in a `for` loop.

### CSV

```js
const input = require('input-stream')('data/example.csv')

for await (const item of input) {
  console.log(item)
}
```

Options provided as a second parameter will be passed through to [csv-parser](https://www.npmjs.com/package/csv-parser).

### TSV

```js
const input = require('input-stream')('data/example.tsv')

for await (const item of input) {
  console.log(item)
}
```

Options provided as a second parameter will be passed through to [csv-parser](https://www.npmjs.com/package/csv-parser), apart from `separator`.

### NDJSON

```js
const input = require('input-stream')('data/example.ndjson')

for await (const item of input) {
  console.log(item)
}
```

### XML

```js
const input = require('input-stream')('data/example.xml', {
  element: 'foo'
})

for await (const item of input) {
  console.log(item)
}
```

Options provided as a second parameter will be passed through to xml-stream, apart from `output`.


## Piping to an output stream

An example of piping the input stream directly to [output-stream](https://www.npmjs.com/package/output-stream), for conversion between formats.

```js
const input = require('input-stream')('data/example.csv')
const output = require('output-stream')('data/example.ndjson')

input.pipe(output)
```
