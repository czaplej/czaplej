import React, { MutableRefObject, useRef } from 'react';

export const useRefConstant = <T extends unknown>(
  initValue: () => T
): MutableRefObject<T> => {
  const firstRef = useRef(true);
  const ref = useRef<T | undefined>(undefined);
  if (firstRef.current) {
    firstRef.current = false;
    ref.current = initValue();
  }
  return ref;
};
