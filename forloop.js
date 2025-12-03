// 1. Basic loop (1 to 5)
for (let i = 1; i <= 5; i++) {
    console.log("Basic:", i);
}

// 2. Even numbers (2 to 10)
for (let i = 2; i <= 10; i += 2) {
    console.log("Even:", i);
}

// 3. Reverse loop (10 to 1)
for (let i = 10; i >= 1; i--) {
    console.log("Reverse:", i);
}

// 4. Sum of first 5 numbers
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log("Sum =", sum);

// 5. Break example (stop at 5)
for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log("Break Example:", i);
}

// 6. Continue example (skip 3)
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log("Continue Example:", i);
}
