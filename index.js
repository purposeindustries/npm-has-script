const fs = require('fs');
const path = require('path');

module.exports = function (script, dir = '.') {
  if (typeof script != 'string') {
    throw new TypeError('Script should be a string!');
  }
  const pkg = JSON.parse(fs.readFileSync(path.join(dir, 'package.json')));
  return (pkg.scripts || {})[script] != null;
};
