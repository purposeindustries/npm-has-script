const has = require('..');
const assert = require('assert');

describe('has-npm-script', () => {
  it('should report true', () => {
    assert.ok(has('foo', './test/1'));
  });
  it('should report false', () => {
    assert.ok(!has('foo', './test/2'));
    assert.ok(!has('foo', './test/3'));
  });
  it('should throw', () => {
    assert.throws(() => has('foo', './test/4'));
    assert.throws(() => has(1, './test/1'));
  });
});
