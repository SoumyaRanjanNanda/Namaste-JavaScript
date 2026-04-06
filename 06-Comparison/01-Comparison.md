#  Comparison in Data Types (JavaScript)

## 🔹 1. Comparison Operators in JS

Used to compare two values and return **true/false**

| Operator | Meaning                  |
| -------- | ------------------------ |
| `==`     | Equal (loose comparison) |
| `===`    | Strict equal             |
| `!=`     | Not equal                |
| `!==`    | Strict not equal         |
| `>`      | Greater than             |
| `<`      | Less than                |
| `>=`     | Greater than or equal    |
| `<=`     | Less than or equal       |

---

## 🔹 2. Loose Equality (`==`)

* Compares values **after type conversion (type coercion)**

```js
5 == "5"   // true
true == 1  // true
null == undefined // true
```

 JS automatically converts data types before comparing.

---

## 🔹 3. Strict Equality (`===`)

* Compares **value + data type**
* No type conversion

```js
5 === "5"  // false
5 === 5    // true
```

 Preferred in real-world coding ✅

---

## 🔹 4. Comparison Between Different Data Types

### 🔸 Number vs String

```js
10 > "5"   // true  (string converted to number)
```

### 🔸 Boolean vs Number

```js
true == 1   // true
false == 0  // true
```

### 🔸 Null vs Undefined

```js
null == undefined   // true
null === undefined  // false
```

### 🔸 String vs String

```js
"apple" > "banana"  // false (lexicographical order)
```

---

## 🔹 5. Type Coercion Rules

JavaScript automatically converts types:

* `"5"` → number → `5`
* `true` → `1`
* `false` → `0`
* `null` → `0` (in some cases)
* `undefined` → `NaN`

---

## 🔹 6. Special Cases 

```js
NaN == NaN   // false
NaN === NaN  // false
```

 Use:

```js
isNaN(NaN) // true
```

---

```js
[] == false   // true
[] === false  // false
```

 Due to type conversion confusion

---

## 🔹 7. Best Practices 

* Always use `===` instead of `==`
* Avoid comparing different data types
* Be careful with `null` and `undefined`
* Use `Number()` or `String()` for explicit conversion

---

##  Quick Summary

| Comparison          | Result                          |
| ------------------- | ------------------------------- |
| `==`                | Checks value (after conversion) |
| `===`               | Checks value + type             |
| `null == undefined` | true                            |
| `NaN == NaN`        | false                           |

---
