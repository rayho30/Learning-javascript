// Global Scope
let globalVar = "Global";

// Function Scope
function testScope() {
  let functionVar = "Function";
  console.log(globalVar); // ✅ accessible
  console.log(functionVar); // ✅ accessible

  // Block Scope
  if (true) {
    let blockVar = "Block";
    console.log(blockVar); // ✅ accessible
  }

  // console.log(blockVar); ❌ not accessible
}

testScope();

// console.log(functionVar); ❌ not accessible
console.log(globalVar); // ✅ accessible
