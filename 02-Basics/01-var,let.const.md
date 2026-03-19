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
