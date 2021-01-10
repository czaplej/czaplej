# @czaplej/use-behavior-subject

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/czaplej/use-behavior-subject/blob/master/LICENSE.md)
[![npm latest package](https://img.shields.io/npm/v/@czaplej/use-behavior-subject/latest.svg)](https://www.npmjs.com/package/@czaplej/use-behavior-subject)

It's alternative react state management uses
[[rxjs](https://rxjs-dev.firebaseapp.com/guide/overview)]

## Explanation

Coming soon...


## Demo
https://codesandbox.io/s/distracted-water-e9b1p
## Usage

`App.tsx`

```tsx
import {
  useBehaviorSubjectDispatch,
  useBehaviorSubjectSelector
} from "@czaplej/use-behavior-subject";
import * as React from "react";
import "./styles.css";
import { subject$ } from "./global-store";
import { Child } from "./child";

export default function App() {
  const store = useBehaviorSubjectSelector((state) => state, subject$);
  const dispatch = useBehaviorSubjectDispatch(subject$);
  return (
    <div className="App">
      <h1>PARENT</h1>
      <h2>{JSON.stringify(store)}</h2>
      <button
        onClick={(e) => {
          dispatch({ showChild: !store.showChild });
        }}
      >
        show Child
      </button>
      {store.showChild && <Child />}
    </div>
  );
};
```

`Child.tsx`

```tsx
import React from "react";
import {
  useBehaviorSubjectDispatch,
  useBehaviorSubjectSelector
} from "@czaplej/use-behavior-subject";
import { BehaviorSubject } from "rxjs";
import { subject$ } from "./global-store";
type ChildStore = {
  firstName: string;
  lastName: string;
  phone?: number;
  showChild?: boolean;
};

const childSubject$ = new BehaviorSubject<ChildStore>({
  firstName: "Child",
  lastName: "child Data"
});
export function Child() {
  const store = useBehaviorSubjectSelector((state) => state, subject$);
  const dispatch = useBehaviorSubjectDispatch(subject$);
  const childStore = useBehaviorSubjectSelector(
    (state) => state,
    childSubject$
  );
  const dispatchChild = useBehaviorSubjectDispatch(childSubject$);
  return (
    <div className="App">
      <h1>Child</h1>
      <h2>{JSON.stringify(store)}</h2>
      <label htmlFor="firstName">
        firstName
        <input
          type="text"
          value={store.firstName}
          onChange={(e) => dispatch({ firstName: e.currentTarget.value })}
        />
      </label>
      <h3>CHILD STORE {JSON.stringify(childStore)}</h3>
      <label htmlFor="firstName">
        firstName
        <input
          type="text"
          value={childStore.firstName}
          onChange={(e) => dispatchChild({ firstName: e.currentTarget.value })}
        />
      </label>
    </div>
  );
}
```

`global-store.ts`
```tsx
import { BehaviorSubject } from "rxjs";

export type Store = {
  firstName: string;
  lastName: string;
  phone?: number;
  showChild?: boolean;
};
export const subject$ = new BehaviorSubject<Store>({
  firstName: "newbie",
  lastName: "lastName newbie"
});
```

Rest coming soon...
Please check the demo at this moment

This library was generated with [Nx](https://nx.dev).
