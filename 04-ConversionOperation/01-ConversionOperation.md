## Type Conversion in JavaScript

---

### 1. What is Type Conversion?

Type conversion means changing one data type into another (like string → number).

```js
let value = "123";       // string
let num = Number(value); // converted to number

console.log(num); // 123
```

Explanation:

* `"123"` is a string
* `Number()` converts it into a number → `123`

---

### 2. Types of Conversion

#### (A) Explicit Conversion (Manual)

You convert data types yourself.

```js
let str = "100";

let num = Number(str);  
console.log(num); // 100

let text = String(num);  
console.log(text); // "100"

let bool = Boolean(str);  
console.log(bool); // true
```

Explanation:

* `Number(str)` → string to number
* `String(num)` → number to string
* `Boolean(str)` → non-empty string → true

---

#### (B) Implicit Conversion (Automatic)

JavaScript converts types automatically.

```js
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
```

Explanation:

* `"5" + 2` → number becomes string → "52" (concatenation)
* `"5" - 2` → string becomes number → 3 (math operation)

---

### 3. Important Conversion Methods

#### Convert to Number

```js
console.log(Number("123"));   // 123
console.log(Number("abc"));   // NaN
console.log(Number(true));    // 1
console.log(Number(false));   // 0
```

Explanation:

* `"123"` → valid number → 123
* `"abc"` → invalid → NaN (Not a Number)
* `true` → 1, `false` → 0

---

#### Convert to String

```js
console.log(String(123));   // "123"
console.log(String(true));  // "true"
```

Explanation:

* Converts any value into text format

---

#### Convert to Boolean

```js
console.log(Boolean(1));       // true
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean("hello")); // true
```

Explanation:

* `1` → true
* `0` → false
* empty string `""` → false
* non-empty string → true

---

### 4. Special Values

```js
console.log(Number("abc"));      // NaN
console.log(Number(undefined));  // NaN
console.log(Number(null));       // 0
```

Explanation:

* `NaN` → invalid number conversion
* `undefined` → NaN
* `null` → 0 (important concept)

---

### 5. Truthy and Falsy Values

```js
// Falsy values
console.log(Boolean(false));     
console.log(Boolean(0));         
console.log(Boolean(""));        
console.log(Boolean(null));      
console.log(Boolean(undefined)); 
console.log(Boolean(NaN));       

// Truthy example
console.log(Boolean("Soumya"));  
```

Explanation:

* Falsy values always become `false`
* Everything else → `true`

---

### 6. Important Interview Points

```js
console.log(1 + "2");   // "12"
console.log("2" * "3"); // 6
console.log(true + 1);  // 2
console.log(false + 1); // 1
```

Explanation:

* `+` → prefers string (concatenation)
* `*`, `-`, `/` → convert to number
* `true = 1`, `false = 0`

---

### Final Summary

* Use `Number()` → convert to number
* Use `String()` → convert to string
* Use `Boolean()` → convert to boolean
* Be careful with automatic conversion (can cause bugs)
