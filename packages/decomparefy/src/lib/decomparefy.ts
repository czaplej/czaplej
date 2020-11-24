/* eslint-disable @typescript-eslint/ban-ts-comment */

function check(b, key) {
  for (const bKey of b.keys()) {
    if (decomparefy(key, bKey)) return bKey;
  }
  return undefined;
}

export const decomparefy = (a, b): boolean => {
  const typeA = toRawType(a);
  const typeB = toRawType(b);
  console.log(typeA, typeB, a, b);
  // isNaN
  if (a !== a && b !== b) return true;

  if (typeA !== typeB) return false;
  else if (typeA === 'Null' || typeA === 'Undefined') return true;
  else if (typeA === 'Number' || typeA === 'Boolean' || typeA === 'String') {
    return a === b;
  } else if (typeA === 'Date') return a.getTime() === b.getTime();
  else if (typeA === 'RegExp') return a.toString() === b.toString();
  else if (typeA === 'Array') {
    if (a.length !== b.length) return false;
    if (a.length === 0) return true;
    let isSame = false;
    for (const [index, aElement] of a.entries()) {
      if (!decomparefy(aElement, b[index])) return false;
      isSame = true;
    }
    return isSame;
  } else if (typeA === 'Function') {
    return a + '' === b + '';
  } else if (typeA === 'Map') {
    if (a.size !== b.size) return false;
    for (const [key, aVal] of a) {
      if (toRawType(key) === 'Object') {
        const bKey = check(b, key);
        if (!bKey) return false;
        const bVal = b.get(bKey);
        if (!decomparefy(aVal, bVal)) return false;
      } else {
        const bVal = b.get(key);
        if (!decomparefy(aVal, bVal)) return false;
      }
    }
    return true;
  } else if (typeA === 'Set') {
    if (a.size !== b.size) return false;
    for (const aVal of a) {
      console.info(aVal);
      console.info(toRawType(aVal));
      const type = toRawType(aVal);
      if (type === 'Object' || type === 'Array') {
        const bKey = check(b, aVal);
        if (!bKey) return false;
        if (!b.has(bKey)) return false;
      } else {
        if (!b.has(aVal)) return false;
      }
    }
    return true;
  } else if (typeA === 'Uint8Array' || typeA === 'Int16Array' || typeA === 'Int32Array' || typeA === 'ArrayBuffer' || typeA === 'Int8Array') {
    if (a.byteLength !== b.byteLength) return false;
    let index = a.byteLength;
    while (index--) {
      if (a[index] !== b[index]) return false;
    }

    return true;
  } else if (typeA === 'DataView') {
    if (a.byteLength !== b.byteLength) return false;
    let index = a.byteLength;
    while (index--) {
      if (a.getInt8(index) !== b.getInt8(index)) return false;
    }

    return true;
  } else if (typeA === 'Object') {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    if (keysA.length === 0) return true;

    let isSame = false;
    for (const key of keysA) {
      if (!keysB.includes(key)) return false;
      if (toRawType(a[key]) === 'Function' || toRawType(b[key]) === 'Function') {
        if (a[key] + '' !== b[key] + '') return false;
      } else {
        if (!decomparefy(a[key], b[key])) return false;
        isSame = true;
      }
    }
    return isSame;
  }
  return false;

};

export function isEqual(a, b): boolean {
  try {
    return decomparefy(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('decomparefy cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }

}


function toRawType(value): string {
  const _toString = Object.prototype.toString;
  const str = _toString.call(value);
  return str.slice(8, -1);
}

