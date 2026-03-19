let score = 33 ;

// check type of that variable
console.log(typeof score); // output => number
console.log(typeof (score)); // you can write like this also // output => nuber

let age = "20";
console.log(typeof age); // ouput => string

let valueInNumber = Number(age); // 
console.log(typeof valueInNumber); // output => number

// investication study on conversion case 1
let age = "20abc" ;
let valueInNumber = Number(age); 
console.log(typeof valueInNumber); // output => number
console.log(valueInNumber);// output => NaN


// investication study on conversion case 2
let age = null ;
let valueInNumber = Number(age); 
console.log(typeof valueInNumber); // output => number
console.log(valueInNumber);// output => 0

// investication study on conversion case 3
let age = undefined ;
let valueInNumber = Number(age); 
console.log(typeof valueInNumber); // output => number
console.log(valueInNumber);// output => NaN

// investication study on conversion case 4
let age = true ;
let valueInNumber = Number(age); 
console.log(typeof valueInNumber); // output => number
console.log(valueInNumber);// output => 1

// notes
// "33" => 33
// "33abd" => NaN
// true => 1; fale => 0

let isLoggedIn = 1; // try to storing 1 instend of true to check the rsesult
let booLeanIsLoggedIn = Bollean(isLoggedIn);
console.log(booLeanIsLoggedIn); // true

let isLoggedIn = 0; // try to storing 0 instend of false to check the result
let booLeanIsLoggedIn = Bollean(isLoggedIn);
console.log(booLeanIsLoggedIn); // false

let isLoggedIn = "" ; // try to storing null String to check the result // " " means 0
let booLeanIsLoggedIn = Bollean(isLoggedIn); 
console.log(booLeanIsLoggedIn); // false

let isLoggedIn = "Soumya"; // try to storing A stirng to check the result
let booLeanIsLoggedIn = Bollean(isLoggedIn);
console.log(booLeanIsLoggedIn); // true


// 1 => true ; 0 => false
// "" => false
// "Soumya" => true


// String conversion nuber to string
let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber); // output => 33
console.log(typeof stringNumber); // output => string
