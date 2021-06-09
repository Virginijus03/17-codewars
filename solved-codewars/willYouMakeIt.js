const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (distanceToPump / mpg <= fuelLeft);
    // return true;
}

// if (distanceToPump / mpg >= fuelleft) {
//return true;
//}





/*
You were camping with your friends far away from home,
but when it's time to go back, 
you realize that your fuel is running out and the nearest pump is 50 miles away!
You know that on average, your car runs on about 25 miles per gallon.
There are 2 gallons left. Considering these factors,
write a function that tells you if it is possible to get to the pump or not. 
Function should return true (1 in Prolog) if it is possible and false 
(0 in Prolog) if not. The input values are always positive.
*/

//const assert = require("chai").assert;

//describe("zeroFill", function () {
test("Sample Tests", function () {
    expect(zeroFuel(50, 25, 2)).toBe(true);
    expect(zeroFuel(100, 50, 1)).toBe(false);
    expect(zeroFuel(100, 25, 4)).toBe(true);
});
//});

/*dar vienas pavyzdys
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return (mpg * fuelLeft) >= distanceToPump;
};
*/