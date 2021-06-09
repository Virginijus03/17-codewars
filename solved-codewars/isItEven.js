function testEven(n) {
    if (n % 2) {
        return false;
    }
    return true;
    //Your awesome code here!
}


/*In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats are considered UNeven for this kata.
*/

test("test", () => {
    expect(testEven(0)).toBe(true, "testEven for 0");
    expect(testEven(0.5)).toBe(false, "testEven for 0.5");
    expect(testEven(1)).toBe(false, "testEven for 1");
    expect(testEven(2)).toBe(true, "testEven for 2");
    expect(testEven(-4)).toBe(true, "testEven for 2");
});

/*dar vienas pavz:
function testEven(n) {
    return (n % 2) == 0;
}
*/
