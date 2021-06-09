function arrayMadness(a, b) {
    let kvadratuSuma = 0;
    for (let i = 0; i < a.length; i++) {
        kvadratuSuma += a[i] * a[i];
    }
    let kubuSuma = 0;
    for (let i = 0; i < b.length; i++) {
        kubuSuma += b[i] * b[i] * b[i];
    }
    if (kvadratuSuma > kubuSuma) {
        return true;
    }
    return false;
}

/*
Given two integer arrays a, b, both of length >= 1,
 create a program that returns true 
 if the sum of the squares 
 of each element in a is strictly
 greater than the sum of the cubes 
 of each element in b.

*/

test("arrayMadness", () => {
    expect(arrayMadness([4, 5, 6], [1, 2, 3])).toBe(true);
    expect(arrayMadness([5, 6, 7], [4, 5, 6])).toBe(false);
    expect(arrayMadness([4, 5, 6], [3, 4, 5])).toBe(false);
    expect(arrayMadness([3, 4, 5], [2, 3, 4])).toBe(false);
    expect(arrayMadness([2, 3, 4], [1, 2, 3])).toBe(false);
    expect(arrayMadness([1, 2, 3], [0, 1, 2])).toBe(true);
    expect(arrayMadness([5, 3, 2, 4, 1], [15])).toBe(false);
    expect(arrayMadness([2, 5, 3, 4, 1], [3, 3, 3, 3, 3])).toBe(false);
    expect(arrayMadness([1, 3, 5, 2, 4], [2, 2, 2, 2, 2, 2, 2, 1])).toBe(false);
    expect(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1])).toBe(true);
    expect(arrayMadness([2, 4, 6, 8, 10, 12, 14], [1, 3, 5, 7, 9, 11, 13])).toBe(false);
});


/*
dar vienas pvz:
function arrayMadness(a, b) {
let contaA = 0;
let contaB = 0;
for(let i = 0; i < a.length; i++)contaA += a[i] ** 2;
for(let i = 0; i < b.length; i++)contaB += b[i] ** 3;
return (contaA > contaB)? true:false;
}
*/