function differenceInAges(ages) {
    let minAges = Infinity;
    let maxAges = 0;

    for (let i = 0; i < ages.length; i++) {
        const skaicius = ages[i];
        if (maxAges < skaicius) {
            maxAges = skaicius;
        }
        if (minAges > skaicius) {
            minAges = skaicius;
        }
    }
    return [minAges, maxAges, maxAges - minAges]
}






/*
At the annual family gathering,
the family likes to find the oldest living family member’s
age and the youngest family member’s age and calculate 
the difference between them.
You will be given an array of all the family members' ages,
in any order. The ages will be given in whole numbers,
so a baby of 5 months, will have an ascribed ‘age’ of 0.
Return a new array (a tuple in Python) with [youngest age,
oldest age, difference between the youngest and oldest age].
*/

test("test", () => {
    expect(differenceInAges([82, 15, 6, 38, 35])).toStrictEqual([6, 82, 76]);
    expect(differenceInAges([57, 99, 14, 32])).toStrictEqual([14, 99, 85]);
});

/*dar vienas pavyzdys
function differenceInAges(ages){
  const min = Math.min(...ages);
  const max = Math.max(...ages);

  return [min, max, max-min];
}
*/