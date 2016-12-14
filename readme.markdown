# npm-has-script [![Build Status][travis-icon]][travis]

> Check `package.json` for the given script.

## install

Install the [package][npm-has-script] with [npm][npm]:

```sh
$ npm install --save npm-has-script
```

## api

### `has(name: string, dir = '.'): bool`

Returns `true` if the `package.json` in the given dir has an npm script named `name`.

It throws if the `dir` does not contain a `package.json` file, or `name` is not a string.

## related

- [`npm-has-script-cli`][npm-has-script-cli] CLI for this module

## license

ISC

[npm-has-script]: https://npmjs.com/npm-has-script
[npm]: https://npmjs.com/
[npm-has-script-cli]: https://npmjs.com/npm-has-script-cli
[travis-icon]: https://travis-ci.org/purposeindustries/npm-has-script.svg
[travis]: https://travis-ci.org/purposeindustries/npm-has-script
