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
