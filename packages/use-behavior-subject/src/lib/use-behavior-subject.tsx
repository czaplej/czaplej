import { useEffect, useState } from 'react';
import isEqual from 'react-fast-compare';
import { BehaviorSubject, Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import { useRefConstant } from '@czaplej/use-ref-constant';

type UseBehaviorSubjectProps<T extends unknown> = {
  subject: BehaviorSubject<T>;
  initialState?: T;
  pipe?: (subject: BehaviorSubject<T>) => Observable<T>;
};
export const useBehaviorSubject = <T extends unknown>(props: UseBehaviorSubjectProps<T>) => {
  const { subject, initialState, pipe } = props;
  const [state, setState] = useState<T>(subject.getValue() ?? initialState);
  const getSubject$ = pipe ? pipe(subject) : subject;
  useEffect(() => {
    if (subject.observers.length === 0 && initialState) {
      subject.next(initialState);
    }
    const subscription = getSubject$.pipe(skip(1)).subscribe({
      next: (value) => {
        setState(value);
      },
      complete: () => {
        console.log('BEHAVIOR SUBJECT COMPLETED');
      },
    });
    return () => {
      subscription.unsubscribe();
      if (subject.observers.length === 0) {
        service$.setInitialState();
      }
    };
  }, []);
  const service$ = {
    setInitialState: () => subject.next(initialState),
    setState: (value: Partial<T> | T) => {
      const prevState = subject.getValue();
      if (typeof prevState === 'object') {
        if (Array.isArray(prevState)) {
          if (!isEqual(value, state)) {
            subject.next(value as T);
          }
        } else {
          // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
          // @ts-ignore
          const newState = { ...prevState, ...value };
          if (!isEqual(newState, state)) {
            subject.next(newState);
          }
        }
      } else {
        if (!isEqual(value, state)) {
          subject.next(value as T);
        }
      }
    },
  };
  return { state, service$, setState: service$.setState };
};

export const createSubject = <T extends unknown>(initialValue?: T): BehaviorSubject<T> => {
  console.log("CREATE SUBJECT")
 return new BehaviorSubject<T>(initialValue)
}

