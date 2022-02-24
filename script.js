/** FUNCTION DEFINITIONS **/
/**String verification**/
function compareString(string, callbackFunction){
    var doesEveryLetterMatch = true;

    for(var i=0; i<string.length;i++){
        doesEveryLetterMatch = callbackFunction(string[i]);
    }
    return doesEveryLetterMatch;
}
/**Array verification**/
function checkArray(data){
    if (toString.call(data) === "[object Array]")
        return true;
    return false;
}
/**Array length**/
function checkLength(array, callback){
    if (array.length === 2)
        return true;
    else return false;
}
/**
 * Asserts "expected" versus "actual",
 * 'failing' the assertion (via Error) if a difference is found.
 *
 * @param {String} message The comparison message passed by the user
 * @param {*} expected The expected item
 * @param {*} actual The actual item
 */
function assertEquals(message, expected, actual) {
    if (expected === actual){
        console.log('passed');
    }
    else
        console.log('FAILED [' + message + '] Expected "'+
            expected + '", but got "' + actual + '"');
}


/* -- Test running code:  --- */

/**
 * Runs a "assertEquals" test.
 *
 * @param {String} message The initial message to pass
 * @param {Array} assertionFailures List of messages that will be displayed on the UI for evaluation
 * @param {*} expected Expected item
 * @param {*} actual The actual item
 */

/*TEST CASES*/
/* String verification */

function abcdef(actual_02, expected_02){
    return actual_02.localeCompare(expected_02);
}

var stringTrue = "abcdef";
var actualTrue = compareString(stringTrue, abcdef);
assertEquals('Test 02: Expected "abcdef" found "abcdef"',actualTrue, true);

var stringFalse = "abc";
var actualFalse = compareString(stringFalse, abcdef);
assertEquals('Test 02: Expected "abcdef" found "abc"', actualFalse, false);

/* type Array */
var actual_03 = checkArray('testObject');
assertEqual('Test 03: Expected type Array but found Object',actual_03, false);
var expected_03 = checkArray([1,2,3]);
assertEquals('Test 03: Expected type Array and found Array',expected_03, true);

/* type array length 2 */
var arrayLength2 = [1,2];
var lengthTrue = checkLength(arrayLength2, length2);
assertEquals('Test 04: Expected array length 2 found 2', lengthTrue, true);

var arrayLength3 = [1,2,3];
var lengthFalse=(arrayLength3, length2);
assertEquals('Test 04: Expected array length 2 but found 3', lengthFalse, false);
/* type propB.propA[1].propB "b" */
/* type propB.propC */
/* type null */
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
