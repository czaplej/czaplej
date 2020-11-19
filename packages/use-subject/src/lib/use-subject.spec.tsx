import { act, renderHook } from '@testing-library/react-hooks';
import { useSubject } from '@czaplej/use-subject';

describe('useSubject', () => {
  it('should return  initial value', () => {
    const { result, rerender } = renderHook(() =>
      useSubject({initialState: {value: 123}})
    )
    expect(typeof result.current?.state?.value).toBe('number')
    expect( result.current.state.value).toBe(123)

  });
  it('should change new value', () => {
    const { result, rerender } = renderHook(() =>
      useSubject({initialState: {value: 123}})
    )

    act(()=> {
      result.current.setState({value: 333})
    })
    expect( result.current.state.value).toBe(333)
  })
})
