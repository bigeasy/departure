[![Actions Status](https://github.com/bigeasy/departure/workflows/Node%20CI/badge.svg)](https://github.com/bigeasy/departure/actions)
[![codecov](https://codecov.io/gh/bigeasy/departure/branch/master/graph/badge.svg)](https://codecov.io/gh/bigeasy/departure)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Deep equal assertion with difference reporting.

| What          | Where                                         |
| --- | --- |
| Discussion    | https://github.com/bigeasy/departure/issues/1 |
| Documentation | https://bigeasy.github.io/departure           |
| Source        | https://github.com/bigeasy/departure          |
| Issues        | https://github.com/bigeasy/departure/issues   |
| CI            | https://travis-ci.org/bigeasy/departure       |
| Coverage:     | https://codecov.io/gh/bigeasy/departure       |
| License:      | MIT                                           |


Departure installs from NPM.

```
//{ "mode": "text" }
npm install departure
```

## Overview

Extant is an implementation of SQL's COALESCE that I've used for some time to
deal with the fact that JavaScript truthiness will treat `''` and `0` as true so
the `||` operator can't always be used to create given or default one-liner.

```javascript
//{ "mode": "code" }
(function () {
    //{ "include": "overview" }
}) ()
```

```javascript
//{ "name": "overview", "code": { "require": "'..'" }, "text": { "require": "'departure'" } }
const { compare, raise, equal } = require(%(require)s)
```

We use the name "extant" on NPM because we want the first extant argument.

## Living `README.md`

This `README.md` is also a unit test using the
[Proof](https://github.com/bigeasy/proof) unit test framework. We'll use the
Proof `okay` function to assert out statements in the readme. A Proof unit test
generally looks like this.

```javascript
//{ "code": { "tests": 1 }, "text": { "tests": 4  } }
require('proof')(%(tests)d, async okay => {
    //{ "include": "test", "mode": "code" }
    //{ "include": "proof" }
})
```

```javascript
//{ "name": "proof", "mode": "text" }
okay('always okay')
okay(true, 'okay if true')
okay(1, 1, 'okay if equal')
okay({ value: 1 }, { value: 1 }, 'okay if deep strict equal')
```

You can run this unit test yourself to see the output from the various
code sections of the readme.

```text
//{ "mode": "text" }
git clone git@github.com:bigeasy/departure.git
cd departure
npm install --no-package-lock --no-save
node test/readme.t.js
```

## Usage

The `'extant'` module exports a single `coalesce` function.

```javascript
//{ "name": "test", "code": { "require": "'..'" }, "text": { "require": "'depature'" } }
const { compare, raise, equal } = require(%(require)s)
```

Note that Extant is SQL's `COALESCE`. It returns the first non-null-like value,
that is the first value that is not `== null`, which would be `null` or
`undefined`. If there is no such argument it returns `null`.

```javascript
//{ "name": "test" }
okay('test')
```
