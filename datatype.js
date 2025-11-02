// String
let myName = "Rayhan";

// Number
let myAge = 21;
let productPrice = 99.99;

// Boolean
let isStudent = true;
let isLoggedIn = false;

// Undefined
let myVar;

// Null
let myNull = null;

// Object
let person = {
  name: "Rayhan",
  age: 21
};

// Array
let numbers = [1, 2, 3, 4, 5];

// BigInt
let bigNumber = 12345678901234567890n;

// Symbol
let mySymbol = Symbol("id");

// Display all with typeof
console.table([
  { variable: "myName",        value: myName,        type: typeof myName },
  { variable: "myAge",         value: myAge,         type: typeof myAge },
  { variable: "productPrice",  value: productPrice,  type: typeof productPrice },
  { variable: "isStudent",     value: isStudent,     type: typeof isStudent },
  { variable: "isLoggedIn",    value: isLoggedIn,    type: typeof isLoggedIn },
  { variable: "myVar",         value: myVar,         type: typeof myVar },
  { variable: "myNull",        value: myNull,        type: typeof myNull },
  { variable: "person",        value: person,        type: typeof person },
  { variable: "numbers",       value: numbers,       type: typeof numbers },
  { variable: "bigNumber",     value: bigNumber,     type: typeof bigNumber },
  { variable: "mySymbol",      value: mySymbol.toString(), type: typeof mySymbol }
]);
