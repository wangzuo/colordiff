var assert = require('assert');
var detect = require('../lib/detect');
var lineColor = require('../lib/line-color');

describe('detect', function() {
  it('normal', function() {
    assert.equal(detect('0a1,6'), 'normal');
  });

  it('context', function() {
    assert.equal(detect("*** /path/to/original ''timestamp''"), 'context');
  });

  it('unified', function() {
    assert.equal(detect("--- /path/to/original ''timestamp''"), 'unified');
  });
});

describe('line-color', function() {
  it('null mode', function() {
    assert.equal(lineColor(null, '0a1,6'), null);
  });

  it('normal', function() {
    assert.equal(lineColor('normal', '0a1,6'), 'line');
    assert.equal(lineColor('normal', '> This is an important'), 'add');
    assert.equal(lineColor('normal', '< compress the size of the'), 'delete');
  });

  it('context', function() {
    assert.equal(lineColor('context', "*** /path/to/original  ''timestamp''"), 'line');
    assert.equal(lineColor('context', "--- /path/to/new ''timestamp''"), 'line');
    assert.equal(lineColor('context', "*** 1,3 ****"), 'line');
    assert.equal(lineColor('context', '--- 11,20 ----'), 'line');
    assert.equal(lineColor('context', '+ therefore be located at'), 'add');
    assert.equal(lineColor('context', '- therefore be located at'), 'delete');
    assert.equal(lineColor('context', '! compress the size of the'), 'change');
    assert.equal(lineColor('unified', '  It is important to spell'), null);
  });

  it('unified', function() {
    assert.equal(lineColor('unified', "--- /path/to/original ''timestamp''"), 'line');
    assert.equal(lineColor('unified', "+++ /path/to/new  ''timestamp''"), 'line');
    assert.equal(lineColor('unified', "@@ -5,16 +11,10 @@"), 'change');
    assert.equal(lineColor('unified', '+check this document. On'), 'add');
    assert.equal(lineColor('unified', '-compress the size of the'), 'delete');
    assert.equal(lineColor('unified', ' this paragraph needs to'), null);
  });
});