// 1. console.log()
// Used to print output in console (best for beginners & debugging)

console.log("Hello World");  
// console → built-in object
// log() → method to print
// Output → shown in browser console


// --------------------------------


// 2. alert()
// Used to show popup message

alert("Hello World");  
// alert() → displays popup box
// Used for simple notifications


// --------------------------------


// 3. document.write()
// Used to print directly on webpage (not recommended)

document.write("Hello World");  
// Writes content on webpage
// Problem → can overwrite entire page


// --------------------------------


// 4. innerHTML (Best for real projects)

// HTML:
// <p id="demo"></p>

document.getElementById("demo").innerHTML = "Hello World";  
// document → represents webpage
// getElementById() → selects element
// innerHTML → inserts content


// ==============================
// FINAL NOTE (IMPORTANT)
// ==============================

// Use console.log() → learning & debugging
// Use innerHTML → real websites
// Avoid document.write() → bad practice
