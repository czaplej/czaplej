/* eslint-disable @typescript-eslint/ban-ts-comment */
function cloneOtherType(target) {
  const constrFun = target.constructor;
  switch (toRawType(target)) {
    case "Boolean":
    case "Number":
    case "String":
    case "Error":
    case "Date":
      return new constrFun(target);
    case "RegExp":
      return cloneReg(target);
    case "Symbol":
      return cloneSymbol(target);
    case "Function":
      return target;
    default:
      return null;
  }
}

function toRawType (value): string {
  const _toString = Object.prototype.toString;
  const str = _toString.call(value)
  return str.slice(8, -1)
}

function cloneSymbol(target) {
  return Object(Symbol.prototype.valueOf.call(target));
}

function cloneReg(target) {
  const reFlags = /\w*$/;
  const result = new target.constructor(target.source, reFlags.exec(target));
  result.lastIndex = target.lastIndex;
  return result;
}

function forEach<T>(array: T[], iteratee: (val: T, index: number) => void): T[] {
  let index = -1;
  const length = array.length;
  while (++index < length) {
    iteratee(array[index], index);
  }
  return array;
}

// core function
export function clone<T extends unknown>(target: T, map = new WeakMap()):T {

  // clone primitive types
  if (typeof target !== "object" || target === null || target === undefined) {
    return target;
  }

  const type = toRawType(target);
  let cloneTarget = null;


  // @ts-ignore
  if (map.get(target)) {
    // @ts-ignore
    return map.get(target);
  }
  // @ts-ignore
  map.set(target, cloneTarget);

  if (type !== "Set" && type !== "Map" && type !== "Array" && type !== "Object") {
    return cloneOtherType(target)
  }

  // clone Set
  if (type === "Set") {
    cloneTarget = new Set();
    (target as Set<T>).forEach(value => {
      cloneTarget.add(clone(value, map));
    });
    return cloneTarget;
  }

  // clone Map
  if (type === "Map") {
    cloneTarget = new Map();
    (target as Map<T,T>).forEach((value, key) => {
      cloneTarget.set(key, clone(value, map));
    });
    return cloneTarget;
  }

  // clone Array
  if (type === "Array") {
    cloneTarget = [];
    forEach(target as T[], (value, index) => {
      cloneTarget[index] = clone(value, map);
    })
  }

  // clone normal Object
  if (type === "Object") {
    cloneTarget = {};
    forEach(Object.keys(target), (key, index) => {
      cloneTarget[key] = clone(target[key], map);
    })
  }

  return cloneTarget;
}
