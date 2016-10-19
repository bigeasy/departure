var deepEqual = require('deep-equal')
var diff = require('deep-diff')
var util = require('util')

exports.compare = function (actual, expected) {
    if (!deepEqual(replayed.shifted, shifted)) {
        var message = []
        message.push('EXPECTED ' + util.inspect(replayed.shifted, null, Infinity))
        message.push('GOT ' + util.inspect(replayed.shifted, null, Infinity))
        message.push('DIFF ' + diff(replayed.shifted, shifted))
        return message.join('\n')
    }
    return null
}

exports.raise = function (actual, expected) {
    var message = exports.compare(actual, expected)
    if (message) {
        throw new Error('Assertion failure.\n\n' + message)
    }
}
