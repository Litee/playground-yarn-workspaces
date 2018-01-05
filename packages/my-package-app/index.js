const trim = require('my-package-lib');

const s = '   ABCD   ';
console.log(`Not trimmed = "${s}"`);
console.log(`Trimmed = "${trim(s)}"`);