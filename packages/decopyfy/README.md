# decopyfy

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/czaplej/decopyfy/blob/master/LICENSE.md)
[![npm latest package](https://img.shields.io/npm/v/decopyfy/latest.svg)](https://www.npmjs.com/package/decopyfy)

Remember the initial value of function

## Installation

#### npm

```bash
npm install --save  decopyfy
```

#### yarn

```bash
yarn add  decopyfy
```

## Usage

```ts
import { clone } from 'decopyfy';
const obj = {...};
const clonedObj = clone(obj);

// obj === clonedObj
```

## License

The package is Open Source Software released under the [MIT licensed](LICENSE.md).

This library was generated with [Nx](https://nx.dev).
