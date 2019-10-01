const deepEqual = require('deep-equal')
const diff = require('deep-diff')
const util = require('util')

exports.compare = function (actual, expected) {
    if (!deepEqual(actual, expected, { strict: true })) {
        const message = []
        message.push('ACTUAL ' + util.inspect(actual, null, Infinity))
        message.push('EXPECTED ' + util.inspect(expected, null, Infinity))
        message.push('DIFF ' + util.inspect(JSON.parse(JSON.stringify(diff(actual, expected)))))
        return message.join('\n')
    }
    return null
}

exports.raise = function (actual, expected) {
    const message = exports.compare(actual, expected)
    if (message) {
        throw new Error('Assertion failure.\n\n' + message)
    }
}
