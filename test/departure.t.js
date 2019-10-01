require('proof')(3, prove)

function prove (okay) {
    const Departure = require('..')
    okay(Departure.compare(1, 1), null, 'equal')
    okay(Departure.compare('1', 1), "ACTUAL '1'\nEXPECTED 1\nDIFF [ { kind: 'E', lhs: '1', rhs: 1 } ]", 'strict, equal')
    Departure.raise(1, 1)
    try {
        Departure.raise('1', 1)
    } catch (error) {
        okay(/^Assertion failure.$/m.test(error.message), 'exception raised')
    }
}
