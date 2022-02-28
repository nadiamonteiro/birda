
/**
 * Asserts "expected" versus "actual",
 * 'failing' the assertion (via Error) if a difference is found.
 *
 * @param {String} message The comparison message passed by the user
 * @param {*} expected The expected item
 * @param {*} actual The actual item
 */
function assertEquals(message, expected, actual) {
    console.log("message: " + message + " || expected: " + expected + " || actual: "  + actual)
    // Check that input is valid.
    if (actual == null) {
        throw new Error(message + " Expected " +  expected + " but was not found");

    }
    // Check for type of arguments.
    console.log(typeof actual);
    console.log(typeof expected)
    if (Object.prototype.toString.call(actual) != Object.prototype.toString.call(expected)) {
        throw new Error(message + " Expected type " + (Object.prototype.toString.call(expected)) + " but found type " + (Object.prototype.toString.call(actual)));

    }
    // Check string length.
    if (expected.length != actual.length) {
        throw new Error(message + " Expected array length " + expected.length + " but found " + actual.length);
    }

    // Compare each letter of string for equality.
    for (let i = 0; i < expected.length; i++) {
        if(expected[i] != actual[i]) {
            throw new Error(message + " expected \"" + expected + "\" but found \"" + actual + "\"");
        }
    }
    // Code has reached here and no mis-match was found.
}
function runTest(message, assertionFailures, expected, actual) {
    try {
        assertEquals(message, expected, actual);
    } catch (failure) {
        assertionFailures.push(failure.message);
    }
}

function runAll() {

    var complexObject1 = {
        propA: 1,
        propB: {
            propA: [1, { propA: 'a', propB: 'b' }, 3],
            propB: 1,
            propC: 2
        }
    };
    var complexObject1Copy = {
        propA: 1,
        propB: {
            propA: [1, { propA: 'a', propB: 'b' }, 3],
            propB: 1,
            propC: 2
        }
    };
    var complexObject2 = {
        propA: 1,
        propB: {
            propB: 1,
            propA: [1, { propA: 'a', propB: 'c' }, 3],
            propC: 2
        }
    };
    var complexObject3 = {
        propA: 1,
        propB: {
            propA: [1, { propA: 'a', propB: 'b' }, 3],
            propB: 1
        }
    };

    // Run the tests
    var assertionFailures = [];
    runTest('Test 01: ', assertionFailures, 'abc', 'abc');
    runTest('Test 02: ', assertionFailures, 'abcdef', 'abc');
    runTest('Test 03: ', assertionFailures, ['a'], {0: 'a'});
    runTest('Test 04: ', assertionFailures, ['a', 'b'], ['a', 'b', 'c']);
    runTest('Test 05: ', assertionFailures, ['a', 'b', 'c'], ['a', 'b', 'c']);
    runTest('Test 06: ', assertionFailures, complexObject1, complexObject1Copy);
    runTest('Test 07: ', assertionFailures, complexObject1, complexObject2);
    runTest('Test 08: ', assertionFailures, complexObject1, complexObject3);
    runTest('Test 09: ', assertionFailures, null, {});

    console.log(assertionFailures)

    // Output the results
    var messagesEl = document.getElementById('messages');
    var newListEl;
    var i, ii;

    for (i = 0, ii = assertionFailures.length; i < ii; i++) {
        newListEl = document.createElement('li');
        newListEl.innerHTML = assertionFailures[i];
        messagesEl.appendChild(newListEl);
    }
}

runAll();
