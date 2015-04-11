module.exports = function detect(line) {
  if(line.match(/^\*\*\*/)) return 'context';
  else if(line.match(/^[0-9a-z,]+/)) return 'normal';
  else if(line.match(/^---/)) return 'unified';
};