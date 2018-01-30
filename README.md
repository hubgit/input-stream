# Example usage

```js
const input = require('input-stream')('data/example.ndjson')

input.on('data', item => {
  console.log(item)
})
```
