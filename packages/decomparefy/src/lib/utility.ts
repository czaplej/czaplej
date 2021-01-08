/* eslint-disable @typescript-eslint/ban-ts-comment */
const toString = Object.prototype.toString;

export function checkTypeOf(val): string {
  if (val === void 0) return 'Undefined';
  if (val === null) return 'Null';

  let type = typeof val;
  switch (type) {
    case 'boolean':
      return 'Boolean';
    case 'string':
      return 'String';
    case 'number':
      return 'Number';
    case 'symbol':
      return 'Symbol';
    case 'function':
      return 'Function';
  }

  if (!isArray(val)) {
    if (isBuffer(val)) return 'ArrayBuffer';
    if (isDate(val)) return 'Date';
    if (isError(val)) return 'Error';
    if (isRegexp(val)) return 'RegExp';
    const ctorN = ctorName(val);
    switch (ctorN) {
      case 'Symbol':
      case 'Promise':
      case 'WeakMap':
      case 'WeakSet':
      case 'Map':
      case 'Set':
      case 'Int8Array':
      case 'Uint8Array':
      case 'Uint8ClampedArray':
      case 'Int16Array':
      case 'Uint16Array':
      case 'Int32Array':
      case 'Uint32Array':
      case 'Float32Array':
      case 'Float64Array':
        return ctorN;
    }
    // if (isGeneratorObj(val)) {
    //   return 'Generator';
    // }
    type = toString.call(val);
    switch (type as string) {
      case '[object Object]':
        return 'Object';
      case '[object ArrayBuffer]':
        return 'ArrayBuffer';
      case '[object DataView]':
        return 'DataView';
      // iterators
      case '[object Map Iterator]':
        return 'MapIterator';
      case '[object Set Iterator]':
        return 'SetIterator';
      case '[object String Iterator]':
        return 'StringIterator';
      case '[object Array Iterator]':
        return 'ArrayIterator';
    }
    return type.slice(8, -1).replace(/\s/g, '');
  } else {
    return 'Array';
  }
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isArray(val) {
  // if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return (
    val instanceof Error ||
    (typeof val.message === 'string' &&
      val.constructor &&
      typeof val.constructor.stackTraceLimit === 'number')
  );
}

function isDate(val) {
  if (val instanceof Date) return true;
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
}

function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }
  return false;
}

export function toRawType(value): string {
  if (value === void 0) return 'Undefined';
  if (value === null) return 'Null';

  let type = typeof value;
  switch (type) {
    case 'boolean':
      return 'Boolean';
    case 'string':
      return 'String';
    case 'number':
      return 'Number';
    case 'symbol':
      return 'Symbol';
    case 'function':
      return 'Function';
  }

  type = Object.prototype.toString.call(value);
  switch (type as string) {
    case '[object Object]':
      return 'Object';
    case '[object Array]':
      return 'Array';
    case '[object Map]':
      return 'Map';
    case '[object Set]':
      return 'Set';
  }

  return type.slice(8, -1);
}
