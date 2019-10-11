const diff = require('deep-diff')
const assert = require('assert')
const util = require('util')

const equal = exports.equal = function (left, right) {
    if (left === right) {
        return true
    }
    if (Array.isArray(left)) {
        if (!Array.isArray(right) || left.length != right.length) {
            return false
        }
        for (let i = 0, I = left.length; i < I; i++) {
            if (!equal(left[i], right[i])) {
                return false
            }
        }
        return true
    }
    if (typeof left === 'object') {
        if (typeof right !== 'object') {
            return false
        }
        assert(left.constructor === Object.prototype.constructor && right.constructor === Object.prototype.constructor)
        for (var key in left) {
            if (!(key in right) || !equal(left[key], right[key])) {
                return false
            }
            return true
        }
    }
    return left !== left && right !== right
}

exports.compare = function (actual, expected) {
    if (!equal(actual, expected, { strict: true })) {
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
