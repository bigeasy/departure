var deepEqual = require('deep-equal')
var diff = require('deep-diff')
var util = require('util')

exports.compare = function (actual, expected) {
    if (!deepEqual(actual, expected)) {
        var message = []
        message.push('ACTUAL ' + util.inspect(actual, null, Infinity))
        message.push('EXPECTED ' + util.inspect(expected, null, Infinity))
        message.push('DIFF ' + util.inspect(diff(actual, expected)))
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
