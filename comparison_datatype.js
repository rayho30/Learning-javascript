// Comparison in Data Types in JavaScript

console.log("=== Loose Equality (==) ===");
console.log(5 == "5");          // true → same value after type conversion
console.log(true == 1);         // true → true becomes 1
console.log(false == 0);        // true → false becomes 0
console.log(null == undefined); // true → special rule
console.log("10" == 10);        // true → "10" converted to number

console.log("\n=== Strict Equality (===) ===");
console.log(5 === "5");         // false → number ≠ string
console.log(true === 1);        // false → boolean ≠ number
console.log(null === undefined);// false → different data types
console.log(10 === 10);         // true → same value and same type

console.log("\n=== Not Equal (!= and !==) ===");
console.log(5 != "5");          // false → same value after conversion
console.log(5 !== "5");         // true → type different

console.log("\n=== Relational Operators (>, <, >=, <=) ===");
console.log(10 > 5);            // true
console.log(2 < 5);             // true
console.log(5 >= 5);            // true
console.log(3 <= 4);            // true
console.log("20" > 15);         // true → "20" converted to number

console.log("\n=== Comparison Between Different Data Types ===");
console.log("A" > "B");         // false → compares ASCII values
console.log("apple" < "banana");// true → 'a' < 'b'
console.log(true > false);      // true → 1 > 0
