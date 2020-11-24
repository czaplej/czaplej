import React from 'react';
import { isEqual } from './decomparefy';

function same(a, b) {
  expect(isEqual(a, b)).toBeTruthy();
}

function different(a, b) {
  expect(isEqual(a, b)).toBeFalsy();
}
describe('Decomparefy', () => {
  it('simple', () => {
    same(1, 1);
    different(1, 2);
    different(1, []);
    different(1, '1');
    same(Infinity, Infinity);
    different(Infinity, -Infinity);
    different(NaN, undefined);
    different(NaN, null);
    same(NaN, NaN);
    different(1, -1);
    same(0, -0);

    same(null, null);
    same(void 0, undefined);
    same(undefined, undefined);
    different(null, undefined);
    different('', null);
    different(0, null);

    same(true, true);
    same(false, false);
    different(true, false);
    different(0, false);
    different(1, true);

    same('a', 'a');
    different('a', 'b');
  });

  it('Objects', () => {
    same({}, {});
    same({ a:1, b:2 }, { a:1, b:2 });
    same({ b:2, a:1 }, { a:1, b:2 });

    different({ a:1, b:2, c:[] }, { a:1, b:2 });
    different({ a:1, b:2 }, { a:1, b:2, c:[] });
    different({ a:1, c:3 }, { a:1, b:2 });

    same({ a:[{ b:1 }] }, { a:[{ b:1 }] });
    different({ a:[{ b:2 }] }, { a:[{ b:1 }] });
    different({ a:[{ c:1 }] }, { a:[{ b:1 }] });

    different([], {});
    different({}, []);
    different({}, null);
    different({}, undefined);

    different({ a:void 0 }, {});
    different({}, { a:undefined });
    different({ a:undefined }, { b:undefined });
  });

  it('dictionary', () => {
    const foo = Object.create(null);
    const bar = Object.create(null);
    same(foo, bar);

    foo.hello = 'world';
    different(foo, bar);
  });

  it('Arrays', () => {
    same([], []);
    same([1,2,3], [1,2,3]);
    different([1,2,4], [1,2,3]);
    different([1,2], [1,2,3]);

    same([{ a:1 }, { b:2 }], [{ a:1 }, { b:2 }]);
    different([{ a:2 }, { b:2 }], [{ a:1 }, { b:2 }]);

    different({ '0':0, '1':1, length:2 }, [0, 1]);
  });

  it('Dates', () => {
    same(
      new Date('2015-05-01T22:16:18.234Z'),
      new Date('2015-05-01T22:16:18.234Z')
    );

    different(
      new Date('2015-05-01T22:16:18.234Z'),
      new Date('2017-01-01T00:00:00.000Z')
    );

    different(
      new Date('2015-05-01T22:16:18.234Z'),
      '2015-05-01T22:16:18.234Z'
    );

    different(
      new Date('2015-05-01T22:16:18.234Z'),
      1430518578234
    );

    different(
      new Date('2015-05-01T22:16:18.234Z'),
      {}
    );
  });

  it('RegExps', () => {
    same(/foo/, /foo/);
    same(/foo/i, /foo/i);

    different(/foo/, /bar/);
    different(/foo/, /foo/i);

    different(/foo/, 'foo');
    different(/foo/, {});
  });

  it('Functions', () => {
    const foo = () => {
    };
    const bar = () => {
    };

    same(foo, foo);
    same(foo, bar);
    same(foo, () => {});
  });

  it('Map flat', () => {
    const hello = new Map();
    const world = new Map();

    same(hello, world);

    world.set('hello', 'world');
    different(hello, world);

    hello.set('foo', 'bar');
    different(hello, world);

    world.set('foo', 'bar');
    hello.set('hello', 'world');
    same(hello, world);
  });

  it('Map nested', () => {
    const hello = new Map([
      ['foo', { a: 1 }],
      ['bar', [1, 2, 3]],
    ]);

    const world = new Map([
      ['foo', 'bar']
    ]);

    different(hello, world);

    // @ts-ignore
    world.set('foo', { a: 1 });
    different(hello, world);

    // @ts-ignore
    world.set('bar', [1, 2, 3]);
    same(hello, world);

    // @ts-ignore
    hello.set('baz', new Map([['hello', 'world']]));
    different(hello, world);

    // @ts-ignore
    world.set('baz', new Map([['hello', 'world']]));
    same(hello, world);
  });

  it('Map keys :: complex', () => {
    const hello = new Map([
      [{ foo:1 }, { a:1 }]
    ]);

    const world = new Map([
      [{ foo:1 }, { a:1 }]
    ]);

    same(hello, world);

    // @ts-ignore
    [...world.keys()][0].bar = 2;

    different(hello, world);
  });

  it('Map keys :: value-based', () => {
    different(
      new Map([
        [{ a: 1 }, undefined]
      ]),
      new Map([
        [{ a: 1 }, {}]
      ])
    );

    same(
      new Map([
        [{ a: 1 }, 1]
      ]),
      new Map([
        [{ a: 1 }, 1]
      ])
    );
  });

  it('Set flat', () => {
    const hello = new Set();
    const world = new Set();

    same(hello, world);

    world.add('hello');
    different(hello, world);

    hello.add('foo');
    different(hello, world);

    world.add('foo');
    hello.add('hello');
    same(hello, world);
  });

  it('Set flat :: order', () => {
    const hello = new Set(['foo', 'bar']);
    const world = new Set(['bar', 'foo']);
    same(hello, world);
  });

  it('Set complex', () => {
    const hello = new Set([
      'foo', 'bar', { a: 1 }, [1, 2, 3]
    ]);

    const world = new Set([
      'foo', { a: 1 }, 'bar'
    ]);

    different(hello, world);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    world.add([1, 2, 3]);
    same(hello, world);

    world.delete('foo');
    different(hello, world);

    world.add('foo');
    same(hello, world);
  });

  it('Buffer', () => {
    same(
      Buffer.from('hello'),
      new Buffer('hello'),
    );

    different(
      Buffer.from('hello'),
      Buffer.from('world'),
    );

    different(
      Buffer.from('hello', 'base64'),
      Buffer.from('hello', 'utf8'),
    );
  });

  it('Int16Array', () => {
    same(
      new Int16Array([42]),
      new Int16Array([42]),
    );

    different(
      new Int16Array([1, 2, 3]),
      new Int16Array([1, 2]),
    );

    different(
      new Int16Array([1, 2, 3]),
      new Int16Array([4, 5, 6]),
    );

    different(
      new Int16Array([1, 2, 3]),
      new Uint16Array([1, 2, 3]),
    );

    different(
      new Int16Array([1, 2, 3]),
      new Int8Array([1, 2, 3]),
    );
  });

  it('Int32Array', () => {
    same(
      new Int32Array(new ArrayBuffer(4)),
      new Int32Array(new ArrayBuffer(4)),
    );

    different(
      new Int32Array(8),
      new Uint32Array(8),
    );

    different(
      new Int32Array(new ArrayBuffer(8)),
      new Int32Array(Array.from({ length: 8 })),
    );
  });

  it('ArrayBuffer', () => {
    same(
      new ArrayBuffer(2),
      new ArrayBuffer(2),
    );

    different(
      new ArrayBuffer(1),
      new ArrayBuffer(2),
    );
  });

  it('DataView', () => {
    same(
      new DataView(new ArrayBuffer(4)),
      new DataView(new ArrayBuffer(4)),
    );

    const hello = new Int8Array([1, 2, 3, 4, 5]);
    const world = new Int8Array([1, 2, 3, 4, 5]);

    same(hello, world);
    same(hello.buffer, world.buffer);

    same(
      new DataView(hello.buffer),
      new DataView(world.buffer)
    );

    hello.fill(0);

    different(hello, world);
    different(hello.buffer, world.buffer);

    different(
      new DataView(hello.buffer),
      new DataView(world.buffer)
    );
  });


});
