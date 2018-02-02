# input-stream

## Install

`npm install --save input-stream`

or

`yarn add input-stream`

## Formats

### CSV

```js
const input = require('input-stream')('data/example.csv')

input.on('data', item => {
  console.log(item)
})
```

Options provided as a second parameter will be passed through to [csv-parser](https://www.npmjs.com/package/csv-parser).

### TSV

```js
const input = require('input-stream')('data/example.tsv')

input.on('data', item => {
  console.log(item)
})
```

Options provided as a second parameter will be passed through to [csv-parser](https://www.npmjs.com/package/csv-parser), apart from `separator`.

### NDJSON

```js
const input = require('input-stream')('data/example.ndjson')

input.on('data', item => {
  console.log(item)
})
```

## Piping to an output stream

An example of piping the input stream directly to [output-stream](https://www.npmjs.com/package/output-stream), for conversion between formats.

```js
const input = require('input-stream')('data/example.csv')
const output = require('output-stream')('data/example.ndjson')

input.pipe(output)
```
