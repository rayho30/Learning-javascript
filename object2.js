// ------------------------------
// Object Destructuring
// ------------------------------
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Renaming during destructuring
const { courseInstructor: instructor } = course

console.log("Instructor:", instructor)


// ------------------------------
// JSON Example (looks like JSON)
// ------------------------------
const jsonExample = {
    name: "hitesh",
    coursename: "js in hindi",
    price: "free"
}

console.log("JSON Example:", jsonExample)


// ------------------------------
// Empty Object Array Placeholder
// ------------------------------
const emptyObjects = [
    {}, 
    {}, 
    {}
]

console.log("Empty Objects Array:", emptyObjects)
