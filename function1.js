// 1. Basic function
function sayHi() {
  console.log("Hi!");
}

// 2. With parameters
function add(a, b) {
  return a + b;
}

// 3. Default parameter
function welcome(name = "Guest") {
  return "Welcome, " + name;
}

// 4. Function expression
const multiply = function (x, y) {
  return x * y;
};

// 5. Arrow functions
const divide = (a, b) => a / b;

// 6. Arrow function returning object
const makeUser = () => ({ id: 1, username: "Rayhan" });

// 7. Passing object
function showUser({ name, age }) {
  console.log(name, age);
}

// 8. Passing array
function showData([a, b, c]) {
  console.log(a);
}

// Calling everything:
sayHi();
console.log(add(5, 10));
console.log(welcome());
console.log(multiply(4, 5));
console.log(divide(20, 5));
console.log(makeUser());
showUser({ name: "Nayeem", age: 21 });
showData([10, 20, 30]);
