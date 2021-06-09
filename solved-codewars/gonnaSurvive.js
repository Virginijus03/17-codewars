function hero(bullets, dragons) {
    const rembo = bullets / dragons >= 2; //boolean
    //console.log(rembo);
    return rembo;
}


/*
A hero is on his way to the castle to complete his mission.
However, he's been told that the castle is surrounded 
with a couple of powerful dragons! each dragon takes 2 bullets to be defeated,
our hero has no idea how many bullets he should carry.. 
Assuming he's gonna grab a specific given number of bullets 
and move forward to fight another specific given number of dragons, 
will he survive?
Return True if yes, False otherwise :)
*/


test("test", () => {
    expect(hero(10, 5)).toBe(true);
    expect(hero(7, 4)).toBe(false);
    expect(hero(4, 5)).toBe(false);
    expect(hero(100, 40)).toBe(true);
    expect(hero(1500, 751)).toBe(false);
    expect(hero(0, 1)).toBe(false);
});

/*dar vienas pavyzdys
const hero = (bullets, dragons) => dragons * 2 <= bullets;
*/

