module.exports = function(mode, line) {
  if(mode === 'normal') {
    if(line[0] === '>') return 'add';
    else if(line[0] === '<') return 'delete';
    else if(line.match(/[0-9a-z,]+/)) return 'line';
    else if(line.match(/^---/)) return 'separator';
  } else if(mode === 'context') {
    if(line[0] === '!') return 'change';
    else if(line.match(/^\*\*\* /)) return 'line';
    else if(line.match(/^--- /)) return 'line';
    else if(line[0] === '+') return 'add';
    else if(line[0] === '-') return 'delete';
  } else if(mode === 'unified') {
    if(line.match(/^--- /)) return 'line';
    else if(line.match(/^\+\+\+ /)) return 'line';
    else if(line.match(/^@@ /)) return 'change';
    else if(line[0] === '+') return 'add';
    else if(line[0] === '-') return 'delete';
  }

  return null;
};
