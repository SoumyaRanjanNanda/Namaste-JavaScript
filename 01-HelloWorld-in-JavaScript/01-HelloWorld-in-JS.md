## 1. Using `console.log()` (Most Common)

```js
console.log("Hello World");
```

### Explanation:

* `console` → built-in object in JavaScript
* `log()` → method used to print output
* `"Hello World"` → string (text)

Output:

* Printed in **browser console** (Inspect → Console)

---

## 2. Using `alert()`

```js
alert("Hello World");
```

### Explanation:

* `alert()` → shows a popup message
* Used for simple notifications

Output:

* A popup box appears with **Hello World**

---

## 3. Using HTML + JavaScript (`innerHTML`)

HTML:

```html
<p id="demo"></p>
```

JS:

```js
document.getElementById("demo").innerHTML = "Hello World";
```

### Explanation:

* `document` → represents the webpage
* `getElementById("demo")` → selects HTML element
* `innerHTML` → inserts content inside that element

Output:

* "Hello World" appears on the webpage

---

## Simple Understanding

* JavaScript does not have a fixed “print” like other languages
* Instead, it provides **different ways to display output**

---

## Best Way for Beginners

Use this first:

```js
console.log("Hello World");
```

Because:

* Easy
* Used everywhere
* Helps in debugging

---
