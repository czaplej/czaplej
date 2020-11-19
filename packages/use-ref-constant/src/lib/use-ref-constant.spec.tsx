import { renderHook } from '@testing-library/react-hooks'
import { useRefConstant } from './use-ref-constant';

describe('useRefConstant', () => {
  it('should invoke the function once and always returns the same result', () => {
    const { result, rerender } = renderHook(() =>
      useRefConstant(() => ({ date: Date.now() }))
    )
    const firestResult = result.current
    const firstDate = firestResult.date
    expect(typeof firstDate).toBe('number')
    rerender()
    expect(result.current).toBe(firestResult)
    expect(result.current.date).toBe(firstDate)
  })
})
