# ember-md5

This is the blueimp-md5 wrapper for EmberJS applications.

## Installation
```sh
ember install ember-md5
```

## Usage
```js
import md5 from 'md5';

md5('Hash something' /* key, raw */);
```

or you can use built-in helper

```hbs
{{md5 'My String' 'My key' true}}
```
- `first parameter` - `string` - string to hash
- `second parameter` - `string` -key of the hash
- `third parameter` - `boolean` - raw value

# Contributions

## Installation

* `git clone <repository-url>` this repository
* `cd ember-md5`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
