# JavaScript Data Types

## 1. Two Main Categories

### (A) Primitive Data Types

Stored by value (copy is created)

* Number
* String
* Boolean
* Null
* Undefined
* BigInt
* Symbol

---

### (B) Non-Primitive (Reference Types)

Stored by reference (memory address is shared)

* Object
* Array
* Function

---

# 2. Primitive Data Types (In-depth)

## Number

```js
let age = 21;
let price = 99.99;
```

* Represents integers and floating-point numbers
* Special values: `Infinity`, `-Infinity`, `NaN`

---

## String

```js
let name = "Soumya";
```

* Used for text
* Can use `" "`, `' '`, or template literals `` ` ` ``

---

## Boolean

```js
let isLoggedIn = true;
```

* Only two values: `true` or `false`
* Used in conditions and logic

---

## Null

```js
let data = null;
```

* Intentional empty value
* Assigned by developer

---

## Undefined

```js
let x;
```

* Declared but not assigned
* Automatically assigned by JavaScript

---

## BigInt

```js
let bigNumber = 12345678901234567890n;
```

* Used for very large integers
* Must end with `n`

---

## Symbol

```js
let id = Symbol("unique");
```

* Always unique
* Mostly used as object keys (advanced use case)

---

# 3. Non-Primitive (Reference Types)

## Object

```js
let user = {
  name: "Soumya",
  age: 21
};
```

---

## Array

```js
let arr = [1, 2, 3, 4];
```

---

## Function

```js
function greet() {
  console.log("Hello");
}
```

---

# 4. Key Difference (Very Important)

## Primitive (Copy behavior)

```js
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
```

## Reference (Shared memory)

```js
let obj1 = { name: "Soumya" };
let obj2 = obj1;

obj2.name = "Aapun";

console.log(obj1.name); // Aapun
```

Conclusion:

* Primitive → independent copy
* Reference → same memory

---

# 5. typeof Operator

```js
typeof 123        // "number"
typeof "hello"    // "string"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object" (known JavaScript bug)
```

---

# 6. Important Interview Points

* Difference between `null` and `undefined`
* `typeof null` returns `"object"` (bug)
* Arrays are objects:

```js
typeof [1,2,3] // "object"
```

* Functions:

```js
typeof function(){} // "function"
```

---

# 7. Memory Concept

| Type      | Memory | Behavior        |
| --------- | ------ | --------------- |
| Primitive | Stack  | Copy value      |
| Reference | Heap   | Share reference |

---

# 8. Quick Revision 

Primitive:
Number, Null, Boolean, BigInt, String, Symbol, Undefined

Reference:
Object, Array, Function

---


# JavaScript Variables: `var`, `let`, `const`

## 1. `var` (Old Way)

```js
var name = "Soumya";
```

### Key Points:

* Function scoped (not block scoped)
* Can be **re-declared**
* Can be **updated**
* Gets **hoisted** (initialized with `undefined`)

### Example:

```js
var x = 10;
var x = 20; // allowed

if (true) {
  var y = 5;
}
console.log(y); // 5 (accessible outside block)
```

### Problem:

* Causes bugs due to lack of block scope

---

## 2. `let` (Modern Way)

```js
let age = 21;
```

### Key Points:

* Block scoped
* Cannot be **re-declared** in same scope
* Can be **updated**
* Hoisted but in **temporal dead zone (TDZ)**

### Example:

```js
let x = 10;
// let x = 20; ❌ Error (cannot redeclare)

x = 20; // allowed

if (true) {
  let y = 5;
}
console.log(y); // ❌ Error (block scoped)
```

---

## 3. `const` (Constant)

```js
const PI = 3.14;
```

### Key Points:

* Block scoped
* Cannot be **re-declared**
* Cannot be **updated**
* Must be **initialized at declaration**

### Example:

```js
const x = 10;
// x = 20; ❌ Error

// const y; ❌ Error (must initialize)
```

---

## 4. Important Concept (Tricky)

### `const` with Objects

```js
const user = { name: "Soumya" };

user.name = "Aapun"; // allowed
console.log(user.name); // Aapun
```

* You **cannot change reference**
* But you **can modify inside data**

---

# 5. Hoisting Difference

```js
console.log(a); // undefined
var a = 10;
```

```js
console.log(b); // ❌ Error
let b = 10;
```

```js
console.log(c); // ❌ Error
const c = 10;
```

Reason:

* `var` → hoisted with `undefined`
* `let`, `const` → hoisted but in TDZ (cannot access before declaration)

---

# 6. Comparison Table

| Feature        | var      | let       | const     |
| -------------- | -------- | --------- | --------- |
| Scope          | Function | Block     | Block     |
| Re-declare     | Yes      | No        | No        |
| Update         | Yes      | Yes       | No        |
| Hoisting       | Yes      | Yes (TDZ) | Yes (TDZ) |
| Initialization | Optional | Optional  | Required  |

---

# 7. Best Practice (Very Important)

* Use `const` by default
* Use `let` if value needs to change
* Avoid `var`

---
