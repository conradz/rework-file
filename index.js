var fs = require('fs');
var rework = require('rework');

module.exports = reworkFile;

function reworkFile(file, opts) {
    opts = opts || {};
    if (!opts.source)
        opts.source = file;

    var src = fs.readFileSync(file, 'utf8');
    return rework(src, opts);
}
