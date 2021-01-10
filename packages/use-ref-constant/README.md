# @czaplej/use-ref-constant

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/czaplej/use-ref-constant/blob/master/LICENSE.md)
[![npm latest package](https://img.shields.io/npm/v/@czaplej/use-ref-constant/latest.svg)](https://www.npmjs.com/package/@czaplej/use-ref-constant)

Remember the initial value of function

## Installation


#### npm

```bash
npm install --save  @czaplej/use-ref-constant
```

#### yarn

```bash
yarn add  @czaplej/use-ref-constant
```

## Usage

```tsx
const App = (props) => {
  // always return the initial props
  const initialValue = useRefConstant(() => props);

  return <>...</>;
};
```

This library was generated with [Nx](https://nx.dev).
