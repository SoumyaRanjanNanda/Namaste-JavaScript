#  1. Type Conversion in JavaScript

JavaScript automatically converts types when needed → called **Type Coercion**

##  Types:

* String → `"hello"`
* Number → `10`
* Boolean → `true / false`
* Null → `null`
* Undefined → `undefined`

---

#  2. Addition Operator (`+`) Behavior

The `+` operator is **special**:

* Adds numbers
* Concatenates strings

---

##  Case 1: Number + Number

```js
console.log(5 + 3); 
// Output: 8
```

---

##  Case 2: String + String

```js
console.log("Hello" + " World"); 
// Output: Hello World
```

---

##  Case 3: String + Number

```js
console.log("5" + 3); 
// Output: "53"
```

✔ Number converts to string
✔ Result = String

---

##  Case 4: Number + String

```js
console.log(5 + "3"); 
// Output: "53"
```

✔ Same → string concatenation

---

#  3. Boolean Conversion

##  true = 1, false = 0

```js
console.log(true + 1);  
// Output: 2

console.log(false + 1); 
// Output: 1
```

---

##  Boolean + String

```js
console.log(true + "1"); 
// Output: "true1"
```

✔ Boolean → string

---

#  4. Null Conversion

```js
console.log(null + 1); 
// Output: 1
```

✔ `null` → 0

---

##  null + string

```js
console.log(null + "1"); 
// Output: "null1"
```

---

#  5. Undefined Conversion

```js
console.log(undefined + 1); 
// Output: NaN
```

✔ undefined → Not a number

---

#  6. Mixed Examples (Important for Interview)

```js
console.log("5" + 2 + 3); 
// Output: "523"

console.log(5 + 2 + "3"); 
// Output: "73"
```

### Why?

 Left to right execution

* `"5" + 2` → `"52"`
* `"52" + 3` → `"523"`

---

* `5 + 2` → `7`
* `7 + "3"` → `"73"`

---

#  7. Convert Manually (Best Practice)

## ✔ String to Number

```js
let num = Number("123");
console.log(num); // 123
```

---

## ✔ Number to String

```js
let str = String(123);
console.log(str); // "123"
```

---

## ✔ Boolean Conversion

```js
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
```

---

#  8. Important Rules (Very Important)

1. `+` with string → always string output
2. `true = 1`, `false = 0`
3. `null = 0`
4. `undefined = NaN`
5. Execution is **left to right**

---

#  Final Quick Summary

```js
"5" + 1      // "51"
5 + "1"      // "51"
true + 1     // 2
false + 1    // 1
null + 1     // 1
undefined+1  // NaN
```

---
