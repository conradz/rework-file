var test = require('tap').test;
var rework = require('./');

test('read file', function(t) {
    var output = rework('fixtures/test.css')
        .toString();
    t.equal(output, '.test {\n  content: "test";\n}');
    t.end();
});

test('has .use function', function(t) {
    var called = false;
    rework('fixtures/test.css')
        .use(function() { called = true; });

    t.ok(called);
    t.end();
});

test('sets source option', function(t) {
    var called = false;
    rework('fixtures/test.css')
        .use(function(ast) {
            var rule = ast.rules[0];
            t.equal(rule.position.source, 'fixtures/test.css');

            called = true;
        });

    t.ok(called);
    t.end();
});

test('use source option when set', function(t) {
    var called = false;
    rework('fixtures/test.css', { source: 'test.css' })
        .use(function(ast) {
            var rule = ast.rules[0];
            t.equal(rule.position.source, 'test.css');

            called = true;
        });

    t.ok(called);
    t.end();
});
