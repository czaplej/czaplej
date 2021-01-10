# decomparefy

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/czaplej/decomparefy/blob/master/LICENSE.md)
[![npm latest package](https://img.shields.io/npm/v/decomparefy/latest.svg)](https://www.npmjs.com/package/decomparefy)

Deep data compare

## Installation

#### npm

```bash
npm install --save  decomparefy
```

#### yarn

```bash
yarn add  decomparefy
```

## Usage

```ts
import { isEqual } from 'decomparefy';

isEqual(1, 1); //=> true
isEqual({}, {}); //=> true
isEqual('foo', 'foo'); //=> true
isEqual([1, 2, 3], [1, 2, 3]); //=> true
isEqual(
  () => {},
  () => {}
); //=> true
isEqual(/foo/, /foo/); //=> true
isEqual(null, null); //=> true
isEqual(NaN, NaN); //=> true
isEqual([], []); //=> true
isEqual([{ a: 1 }, [{ b: { c: [1] } }]], [{ a: 1 }, [{ b: { c: [1] } }]]); //=> true

isEqual(1, '1'); //=> false
isEqual(null, undefined); //=> false
isEqual({ a: 1, b: [2, 3] }, { a: 1, b: [2, 5] }); //=> false
isEqual(/foo/i, /bar/g); //=> false
```

## License

The package is Open Source Software released under the [MIT licensed](LICENSE.md).

This library was generated with [Nx](https://nx.dev).
