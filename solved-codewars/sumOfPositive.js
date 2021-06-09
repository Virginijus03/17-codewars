function positiveSum(arr) {
    let pinigine = 0;
    for (let i = 0; i < arr.length; i++) {
        // console.log(a[i]);
        if (arr[i] > 0) {
            pinigine += arr[i];
        }
    }
    return pinigine;
}


/*
You get an array of numbers,
return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/




test("Basic tests", () => {
    expect(positiveSum([1, 2, 3, 4, 5])).toBe(15);
    expect(positiveSum([1, -2, 3, 4, 5])).toBe(13);
    expect(positiveSum([])).toBe(0);
    expect(positiveSum([-1, -2, -3, -4, -5])).toBe(0);
    expect(positiveSum([-1, 2, 3, 4, -5])).toBe(9);
});
