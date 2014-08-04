# rework-file

[![NPM](http://img.shields.io/npm/v/rework-file.svg)](https://www.npmjs.org/package/rework-file)
[![Build Status](http://img.shields.io/travis/conradz/rework-file.svg)](https://travis-ci.org/conradz/rework-file)

Helper to read the input file and pass it to
[rework](https://github.com/reworkcss/rework).

```sh
npm install --save rework-file
```

Call `rework-file` the same as you would call `rework`, except that you must
pass the file name instead of the file contents. It will also set the `source`
option to the file name if it is not set in the options.

```js
var rework = require('rework-file');

// rework-file(fileName, [opts])

rework('my-file.css')
    .use(myPlugin())
    .toString();
```
