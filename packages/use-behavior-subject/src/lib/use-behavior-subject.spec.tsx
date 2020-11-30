import { act, renderHook } from '@testing-library/react-hooks';
import { createSubject, useBehaviorSubject } from 'use-behavior-subject';

describe('useBehaviorSubject', () => {
  const behaviorSubject$ = createSubject({value: 123});
  it('should return  initial value', () => {
    const { result, rerender } = renderHook(() =>
      useBehaviorSubject({subject: behaviorSubject$})
    )
    expect(typeof result.current?.state?.value).toBe('number')
    expect( result.current.state.value).toBe(123)

  });
  it('should change new value', () => {
    const { result, rerender } = renderHook(() =>
      useBehaviorSubject({subject: behaviorSubject$})
    )

    act(()=> {
      result.current.setState({value: 333})
    })
    expect( result.current.state.value).toBe(333)
  });
  it('should return  initial value2', () => {
    const behaviorSubject$ = createSubject({value: 222});
    const { result, rerender } = renderHook(() =>
      useBehaviorSubject({subject: behaviorSubject$})
    );
    expect( result.current.state.value).toBe(222);

    act(()=> {
      behaviorSubject$.next({value: 333})
    })

    const { result: result2 } = renderHook(() =>
      useBehaviorSubject({subject: behaviorSubject$})
    )
    expect(typeof result.current?.state?.value).toBe('number')
    expect( result2.current.state.value).toBe(333);
    expect( result.current.state.value).toBe(333);

  });
  it('should return  error', () => {
    const { result, rerender } = renderHook(() =>
      useBehaviorSubject({subject: undefined})
    );
    expect(result.error).toEqual(Error("useBehaviorSubject must have the subject Prop"))

  });

})
