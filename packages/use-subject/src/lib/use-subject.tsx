import { useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';
import { BehaviorSubject, Observable } from 'rxjs';
import { useRefConstant } from '@czaplej/use-ref-constant';

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
        console.log('SUBJECT NEXT');
        setState(value);
      },
      complete: () => {
        console.log('SUBJECT COMPLETED');
      },
    });
    return () => {
      console.log('UNSUBSCRIBE SUBJECT');
      subscription.unsubscribe();
    };
  }, [observable$]);
  const service$ = {
    setInitialState: () => subject$.next(initialState),
    setState: (value: Partial<T> | T) => {
      const prevState = subject$.getValue();
      if (typeof prevState === 'object') {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        const newState = { ...prevState, ...value };
        if (!isEqual(newState, state)) {
          subject$.next(newState);
        }
      } else {
        if (!isEqual(value, state)) {
          subject$.next(value as T);
        }
      }
    },
  };
  return { state, service$, setState: service$.setState };
};
