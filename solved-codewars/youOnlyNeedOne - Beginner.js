function check(a, x) {
    for (let i = 0; i < a.length; i++) {
        // console.log(a[i]);
        if (a[i] === x) {
            return true;
        }
    }
    return false;


    // your code here
}

/*
You will be given an array a and a value x.
All you need to do is check whether the provided array contains
the value.
Array can contain numbers or strings. X can be either.
Return true if the array contains the value, false if not.
*/


test("Basic tests", () => {
    expect(check([66, 101], 66)).toBe(true);
    expect(check([80, 117, 115, 104, 45, 85, 112, 115], 45)).toBe(true);
    expect(check(['t', 'e', 's', 't'], 'e')).toBe(true);
    expect(check(['what', 'a', 'great', 'kata'], 'kat')).toBe(false);
})