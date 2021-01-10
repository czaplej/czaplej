# @czaplej/use-behavior-subject

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/czaplej/use-behavior-subject/blob/master/LICENSE.md)
[![npm latest package](https://img.shields.io/npm/v/@czaplej/use-behavior-subject/latest.svg)](https://www.npmjs.com/package/@czaplej/use-behavior-subject)
 
It's alternative react state management uses
[[rxjs](https://rxjs-dev.firebaseapp.com/guide/overview)]

## Explanation
Coming soon..
## Usage

`App.tsx`
```tsx
import { BehaviorSubject } from 'rxjs';

type State = {
  firstName: string;
  lastName: string;
  phone?: number;
}
const subject$ = new BehaviorSubject<State>({firstName: "Jhon", lastName: "Newbie"});

const App = (props) => {
  const state = useBahaviorSelector(store => store, subject$)

  return <>...</>;
};
```

This library was generated with [Nx](https://nx.dev).


