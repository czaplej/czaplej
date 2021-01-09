import { renderHook } from '@testing-library/react-hooks';
import { useRefConstant } from './use-ref-constant';

describe('useRefConstant', () => {
  it('should invoke the function once and always returns the same result', () => {
    const { result, rerender } = renderHook(() =>
      useRefConstant(() => ({ date: Date.now() }))
    );
    const firstResult = result.current;
    const firstDate = firstResult.date;
    expect(typeof firstDate).toBe('number');
    rerender();
    expect(result.current).toBe(firstResult);
    expect(result.current.date).toBe(firstDate);
  });
});
