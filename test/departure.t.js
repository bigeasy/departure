require('proof')(10, prove)

function prove (okay) {
    const { compare, raise, equal } = require('..')
    okay(!equal([], 1), 'array is not a number')
    okay(!equal([ 1 ], []), 'array lengths not equal')
    okay(!equal([ 1 ], [ 2 ]), 'arrays not equal')
    okay(equal([ 1 ], [ 1 ]), 'arrays equal')
    okay(!equal({}, 1), 'object is not a number')
    const foo = {}
    okay(!equal({ a: 1 }, { a: 2 }), 'objects not equal')
    okay(equal({ a: 1 }, { a: 1 }), 'objects equal')
    okay(compare(1, 1), null, 'equal')
    okay(compare('1', 1), "ACTUAL '1'\nEXPECTED 1\nDIFF [ { kind: 'E', lhs: '1', rhs: 1 } ]", 'strict, equal')
    raise(1, 1)
    try {
        raise('1', 1)
    } catch (error) {
        okay(/^Assertion failure.$/m.test(error.message), 'exception raised')
    }
}
