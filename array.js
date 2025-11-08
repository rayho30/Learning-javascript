// ===== ARRAY BASICS =====
let fruits = ["Apple", "Banana", "Mango"];
console.log("Initial Array:", fruits);

// ===== ACCESSING ELEMENTS =====
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// ===== CHANGING ELEMENT =====
fruits[1] = "Orange";
console.log("After Change:", fruits);

// ===== ADDING ELEMENTS =====
fruits.push("Grapes");       // Add at end
fruits.unshift("Pineapple"); // Add at beginning
console.log("After Adding:", fruits);

// ===== REMOVING ELEMENTS =====
fruits.pop();   // Remove last
fruits.shift(); // Remove first
console.log("After Removing:", fruits);

// ===== LENGTH OF ARRAY =====
console.log("Total Fruits:", fruits.length);

// ===== LOOPING THROUGH ARRAY =====
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(" -", fruits[i]);
}

console.log("Using for...of loop:");
for (let fruit of fruits) {
  console.log(" ->", fruit);
}

// ===== COMMON METHODS =====
console.log("Includes Mango?", fruits.includes("Mango"));
console.log("Index of Mango:", fruits.indexOf("Mango"));

// ===== CONCAT (Join two arrays) =====
let moreFruits = ["Papaya", "Watermelon"];
let allFruits = fruits.concat(moreFruits);
console.log("After Concat:", allFruits);

// ===== SLICE (Copy part of array) =====
let someFruits = allFruits.slice(1, 4);
console.log("Sliced Fruits (1-3):", someFruits);

// ===== SPLICE (Add/Remove at specific position) =====
allFruits.splice(2, 1, "Strawberry"); // remove 1 item at index 2, add Strawberry
console.log("After Splice:", allFruits);

// ===== EXAMPLE: SUM OF NUMBERS =====
let numbers = [10, 20, 30, 40];
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log("Numbers:", numbers);
console.log("Sum of Numbers:", sum);

// ===== BONUS: SORTING & REVERSING =====
allFruits.sort();
console.log("Sorted Fruits:", allFruits);

allFruits.reverse();
console.log("Reversed Fruits:", allFruits);
