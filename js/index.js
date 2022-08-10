// Iteration 1: Names and Input
const hacker1 = "Jonathan";
console.log(`The driver's name is ${hacker1}`);
const navigator = "Google Chrome";
console.log(`The navigator's name is ${navigator}`)
//
// Iteration 2: Conditionals
function Conditionals(driver, navigator){
    console.log(driver.length < navigator.length)
    if(driver.length > navigator.length){
        return `The driver has the longest name, it has ${driver.length} characters.`;
    }else if(driver.length < navigator.length){
        return `It seems that the navigator has the longest name, it has ${navigator.length} characters.`
    }else{
        return `Wow, you both have equally long names, ${driver.length} characters!`;
    }
}

console.log(Conditionals(hacker1,navigator))

// Iteration 3: Loops

function Loops(driver, navigator){
    const newdriver = driver.toUpperCase().split('').join(' ');
    const new_navigator = navigator.split('').reverse().join('')
    console.log(newdriver)
    console.log(new_navigator)
}

Loops(hacker1, navigator)