const { join } = require('path');
const { Suite } = require('benchmark');
const { klona } = require('klona');

console.log('Load times:');

console.time('assert');
const { deepStrictEqual } = require('assert');
console.timeEnd('assert');

console.time('util');
const { isDeepStrictEqual } = require('util');
console.timeEnd('util');

console.time('fast-deep-equal');
const fastdeep = require('fast-deep-equal');
console.timeEnd('fast-deep-equal');

console.time('lodash/isequal');
const lodash = require('lodash/isequal');
console.timeEnd('lodash/isequal');

console.time('nano-equal');
const nanoequal = require('nano-equal');
console.timeEnd('nano-equal');

console.time('dequal');
const { dequal } = require('dequal');
console.timeEnd('dequal');

console.time('dequal/lite');
const lite = require('dequal/lite');
console.timeEnd('dequal/lite');

console.time('decomparefy');
const { isEqual } = require('decomparefy');
console.timeEnd('decomparefy');

console.time('decomparefy-typeof');
const { isEqualCheckTypeof } = require('decomparefy');
console.timeEnd('decomparefy-typeof');

console.time('react-fast-compare');
const isReactCompare = require('react-fast-compare');
console.timeEnd('react-fast-compare');

const assert = (foo, bar, msg = '') => deepStrictEqual(foo, bar, msg);

function runner(name, contenders) {
  const file = join(__dirname, 'fixtures', name + '.js');
  const fixture = require(file);

  console.log('\n(%s) Validation: ', name);
  Object.keys(contenders).forEach((name) => {
    const func = contenders[name];
    const { foo, bar } = klona(fixture);

    function testVal(...args) {
      console.time(`${name}-${args[2]}`);
      assert(...args);
      console.timeEnd(`${name}-${args[2]}`);
    }

    try {
      // testVal(func(1, 1), true, 'equal numbers');
      // testVal(func(1, 2), false, 'not equal numbers');
      // testVal(func(1, [1]), false, 'number vs array');
      // testVal(func(0, null), false, 'number vs null');
      // testVal(func(0, undefined), false, 'number vs undefined');
      testVal(func(foo, bar), true, 'kitchen sink');
    } catch (err) {}
  });
}

runner('basic', {
  // 'assert.deepStrictEqual': naiive,
  // 'util.isDeepStrictEqual': isDeepStrictEqual,
  // 'fast-deep-equal': fastdeep,
  'lodash.isEqual': lodash,
  // 'nano-equal': nanoequal,
  // 'dequal/lite': lite.dequal,
  'decomparefy-typeof': isEqualCheckTypeof,
  decomparefy: isEqual,
  dequal: dequal,
  'react-fast-compare': isReactCompare,
});

// Only keep those that pass
runner('complex', {
  // 'assert.deepStrictEqual': naiive,
  // 'util.isDeepStrictEqual': isDeepStrictEqual,
  'lodash.isEqual': lodash,
  'decomparefy-typeof': isEqualCheckTypeof,
  decomparefy: isEqual,
  dequal: dequal,
});
