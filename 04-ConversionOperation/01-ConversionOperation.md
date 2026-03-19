## Type Conversion in JavaScript

### 1. What is Type Conversion?

Type conversion means changing one data type into another.

Example:
String → Number, Number → Boolean, etc.

---

### 2. Types of Conversion

#### (A) Explicit Conversion (Manual)

You convert data type yourself using functions.

* `Number("123")` → 123
* `String(123)` → "123"
* `Boolean(1)` → true

---

#### (B) Implicit Conversion (Automatic)

JavaScript automatically converts types when needed.

* `"5" + 2` → "52" (number becomes string)
* `"5" - 2` → 3 (string becomes number)

---

### 3. Important Conversion Methods

#### Convert to Number

* Number("123") → 123
* Number("abc") → NaN
* Number(true) → 1
* Number(false) → 0

#### Convert to String

* String(123) → "123"
* String(true) → "true"

#### Convert to Boolean

* Boolean(1) → true
* Boolean(0) → false
* Boolean("") → false
* Boolean("hello") → true

---

### 4. Special Values

* NaN → Not a Number (invalid conversion)
* Number(undefined) → NaN
* Number(null) → 0

---

### 5. Truthy and Falsy Values

Falsy values:

* false
* 0
* "" (empty string)
* null
* undefined
* NaN

All other values are truthy.

---

### 6. Important Points

* 1 + "2" → "12" (string concatenation)
* "2" * "3" → 6 (converted to number)
* true = 1, false = 0

---

### Final Note

* Use Number(), String(), Boolean() for conversion
* JavaScript automatically converts types (can cause errors)
* Always be careful with implicit conversion
