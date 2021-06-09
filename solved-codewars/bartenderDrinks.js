function getDrinkByProfession(mazosios) {
    switch (mazosios.toLowerCase()) {
        case "jabroni":
            text = "Patron Tequila"
            break;
        case "school counselor":
            text = "Anything with Alcohol"
            break;
        case "programmer":
            text = "Hipster Craft Beer"
            break;
        case "bike gang member":
            text = "Moonshine"
            break;
        case "politician":
            text = "Your tax dollars"
            break;
        case "rapper":
            text = "Cristal"
            break;
        default:
            text = "Beer"
    }
    return text;
}



//naudoti if else, arba switch 

/*
Complete the function that receives as input a string,
and produces outputs according to the following table:
Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
Note: anything else is the default case: 
if the input to the function is not any of the values in the table, 
then the return value should be "Beer".
Make sure you cover the cases where certain 
words do not show up with correct capitalization. 
For example, the input "pOLitiCIaN" should still return "Your tax dollars".
*/

test("test", () => {
    expect(getDrinkByProfession("jabrOni")).toBe("Patron Tequila");
    expect(getDrinkByProfession("scHOOl counselor")).toBe("Anything with Alcohol");
    expect(getDrinkByProfession("prOgramMer")).toBe("Hipster Craft Beer");
    expect(getDrinkByProfession("bike ganG member")).toBe("Moonshine");
    expect(getDrinkByProfession("poLiTiCian")).toBe("Your tax dollars");
    expect(getDrinkByProfession("rapper")).toBe("Cristal");
    expect(getDrinkByProfession("pundit")).toBe("Beer");
    expect(getDrinkByProfession("Pug")).toBe("Beer");
    expect(getDrinkByProfession("Bla Bllr")).toBe("Beer");
    expect(getDrinkByProfession("")).toBe("Beer");

})

/*
dar vienas pvz
function getDrinkByProfession(param){
  const output = {
    'jabroni': 'Patron Tequila',
    'school counselor': 'Anything with Alcohol',
    'programmer': 'Hipster Craft Beer',
    'bike gang member': 'Moonshine',
    'politician': 'Your tax dollars',
    'rapper': 'Cristal'
  }
  return output[param.toLowerCase()] || 'Beer'
  */