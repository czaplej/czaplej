/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useRef, useState } from 'react';
import isEqual from 'react-fast-compare';
import { BehaviorSubject, Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import { clone } from 'decopyfy';


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

export const useBehaviorSubjectSelector = <TState, TSelected>(
  selector: (state: TState) => TSelected,
  // equalityFn?: (left: TSelected, right: TSelected) => boolean,
  subject?: BehaviorSubject<TState>
): TSelected => {
  const selectorValue = useRef<TSelected>(selector(subject.getValue()));
  const [state, setState] = useState(1);
  useEffect(() => {
    const subs = subject?.subscribe({
      next: (value) => {
        const newValue = selector(value);
        if (!isEqual(newValue, selectorValue.current)) {
          selectorValue.current = newValue;
          setState((prevState) => ++prevState);
        }
      },
    });

    return () => {
      subs?.unsubscribe();
    };
  }, [selectorValue.current]);
  return selector(clone(subject.value));
};

type UseBehaviorSubjectSetStateAction<S> = Partial<S> | ((prevState: S) => Partial<S>);

export const useBehaviorSubjectDispatch = <T extends unknown>(subject: BehaviorSubject<T>) =>
{
  return (callback: UseBehaviorSubjectSetStateAction<T>) => {
    let value;
    if (typeof callback === 'function') {
      value = callback(clone(subject.value));
    } else {
      value = callback;
    }
    const prevState = subject.getValue();
    if (typeof prevState === 'object') {
      if (Array.isArray(prevState)) {
        // const newState = [...prevState, value]
        if (!isEqual(value, prevState)) {
          subject.next(value as T);
        }
      } else {
        // @ts-ignore
        const newState = { ...prevState, ...value };
        if (!isEqual(newState, prevState)) {
          subject.next(newState);
        }
      }
    } else {
      if (!isEqual(value, prevState)) {
        subject.next(value as T);
      }
    }
  };
}
