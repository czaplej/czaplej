/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useCallback, useEffect, useRef, useState } from 'react';
import { isEqual } from 'decomparefy';
import { BehaviorSubject, Observable } from 'rxjs';
import { skip } from 'rxjs/operators';
import { clone } from 'decopyfy';

function comparePrevStateAndNewValue<T extends unknown>(subject: BehaviorSubject<T>, newState: (Partial<T> | T)) {
  const prevState = subject.getValue();
  if (typeof prevState !== 'object') {
    if (!isEqual(newState, prevState)) {
      subject.next(newState as T);
    }
  } else {
    let newStateUpdate;
    if (Array.isArray(prevState)) {
      newStateUpdate = [...prevState, ...newState as T[]];
      if (!isEqual(newStateUpdate, prevState)) {
        subject.next(newStateUpdate as T);
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-types
      newStateUpdate = { ...(prevState as object), ...(newState as object) };
      if (!isEqual(newStateUpdate, prevState)) {
        subject.next(newStateUpdate as T);
      }
    }
  }
}

type UseBehaviorSubjectProps<T extends unknown> = {
  subject: BehaviorSubject<T>;
  initialState?: T;
  pipe?: (subject: BehaviorSubject<T>) => Observable<T>;
};

export const useBehaviorSubject = <T extends unknown>(props: UseBehaviorSubjectProps<T>) => {
  const { subject, initialState, pipe } = props;
  if (!subject) {
    throw new Error('useBehaviorSubject must have the subject Prop');
  }
  const [state, setUseState] = useState<number>(1);
  const getSubject$ = pipe ? pipe(subject) : subject;
  const setInitialState = useCallback(() => subject.next(initialState), []);
  useEffect(() => {
    if (subject.observers.length === 0 && initialState) {
      subject.next(initialState);
    }
    const subscription = getSubject$.pipe(skip(1)).subscribe({
      next: (value) => {
        setUseState(prevState => ++prevState);
      },
      complete: () => {
        console.log('BEHAVIOR SUBJECT COMPLETED');
      }
    });
    return () => {
      subscription.unsubscribe();
      if (subject.observers.length === 0) {
        setInitialState();
      }
    };
  }, []);

  const setState = useCallback((value: Partial<T> | T) => {
    comparePrevStateAndNewValue(subject, value);
  }, [subject]);

  return { state: clone(subject.value), setInitialState, setState };
};

export const createSubject = <T extends unknown>(initialValue?: T): BehaviorSubject<T> => {
  console.log('CREATE SUBJECT');
  return new BehaviorSubject<T>(initialValue);
};

export const useBehaviorSubjectSelector = <TState, TSelected>(
  selector: (state: TState) => TSelected,
  // equalityFn?: (left: TSelected, right: TSelected) => boolean,
  subject?: BehaviorSubject<TState>
): TSelected => {
  if (!subject) {
    throw new Error('useBehaviorSubjectSelector must have the subject Prop');
  }
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
      }
    });

    return () => {
      subs?.unsubscribe();
    };
  }, [selectorValue.current, subject]);
  return selector(clone(subject.value));
};

type UseBehaviorSubjectSetStateAction<S> = Partial<S> | ((prevState: S) => Partial<S>);

export const useBehaviorSubjectDispatch = <T extends unknown>(subject: BehaviorSubject<T>) => {
  if (!subject) {
    throw new Error('useBehaviorSubjectDispatch must have the subject Prop');
  }
  return (callback: UseBehaviorSubjectSetStateAction<T>) => {
    let value;
    if (typeof callback === 'function') {
      value = callback(clone(subject.value));
    } else {
      value = callback;
    }
    comparePrevStateAndNewValue(subject, value);
  };
};
