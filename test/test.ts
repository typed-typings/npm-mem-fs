import test = require('blue-tape');

import memFs = require('mem-fs');

test('shape', t => {
  const store = memFs.create();
  t.true(store, 'created store');
  t.true(store.get, 'get method');
  t.true(store.add, 'add method');
  t.true(store.each, 'each method');
  t.true(store.stream, 'stream method');
  t.end();
});
