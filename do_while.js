// 1. Basic do-while (1 to 5)
let i = 1;
do {
    console.log("Basic:", i);
    i++;
} while (i <= 5);

// 2. Even numbers (2 to 10)
let e = 2;
do {
    console.log("Even:", e);
    e += 2;
} while (e <= 10);

// 3. Reverse loop (10 to 1)
let r = 10;
do {
    console.log("Reverse:", r);
    r--;
} while (r >= 1);

// 4. Sum of first 5 numbers
let s = 1;
let sum = 0;
do {
    sum += s;
    s++;
} while (s <= 5);
console.log("Sum =", sum);

// 5. Break example (stop at 5)
let b = 1;
do {
    if (b === 5) break;
    console.log("Break Example:", b);
    b++;
} while (b <= 10);

// 6. Continue example (skip 3)
let c = 1;
do {
    if (c === 3) {
        c++;
        continue;
    }
    console.log("Continue Example:", c);
    c++;
} while (c <= 5);
