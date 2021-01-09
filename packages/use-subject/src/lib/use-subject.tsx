import { useEffect, useState } from 'react';
import { BehaviorSubject, Observable } from 'rxjs';
import { useRefConstant } from '@czaplej/use-ref-constant';
import { isEqual } from 'decomparefy';

type UseSubjectProps<T extends unknown> = {
  initialState?: T;
  pipe?: (subject: BehaviorSubject<T>) => Observable<T>;
};

export const useSubject = <T extends unknown>(props: UseSubjectProps<T>) => {
  const { initialState, pipe } = props;
  const subject$ = useRefConstant(() => new BehaviorSubject<T>(initialState));
  const observable$ = useRefConstant(() => (pipe ? pipe(subject$) : subject$));
  const [state, setState] = useState<T>(initialState);
  useEffect(() => {
    const subscription = observable$.subscribe({
      next: (value) => {
        setState(value);
      },
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [observable$]);
  const service$ = {
    setInitialState: () => subject$.next(initialState),
    setState: (value: Partial<T> | T) => {
      const prevState = subject$.getValue();
      comparePrevStateAndNewValue(subject$, value, prevState);
    },
  };
  return { state, service$, setState: service$.setState };
};

function comparePrevStateAndNewValue<T extends unknown>(
  subject: BehaviorSubject<T>,
  newState: Partial<T> | T,
  prevState: T = subject.getValue(),
  compareFn = isEqual
) {
  if (typeof prevState !== 'object') {
    if (!compareFn(newState, prevState)) {
      subject.next(newState as T);
    }
  } else {
    let newStateUpdate;
    if (Array.isArray(prevState)) {
      newStateUpdate = [...prevState, ...(newState as T[])];
      if (!compareFn(newStateUpdate, prevState)) {
        subject.next(newStateUpdate as T);
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-types
      newStateUpdate = { ...(prevState as object), ...(newState as object) };
      if (!compareFn(newStateUpdate, prevState)) {
        subject.next(newStateUpdate as T);
      }
    }
  }
}
