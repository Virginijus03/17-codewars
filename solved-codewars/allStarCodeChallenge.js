function strCount(str, letter) {
    //let letter = 0;
    let kiekis = 0;

    for (let i = 0; i < str.length; i++) {
        const raide = str[i];

        if (raide === letter) {
            kiekis++;
        }
    }
    return kiekis;
}


/*
Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
Example (Inputs --> Output)
"Hello", 'o' => 1
"Hello", 'l' => 2
"", 'z'      => 0
*/

test("test", () => {
    expect(strCount('Hello', 'o')).toBe(1);
    expect(strCount('Hello', 'l')).toBe(2);
    expect(strCount('', 'z')).toBe(0);
});

/*dar vienas pvz
const strCount = (str, letter) => str.split(letter).length - 1;
*/
