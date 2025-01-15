function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct handling for (0,0)
  }
  if (a === 0 || b === 0) {
    return Infinity; // Correct handling for (0,b) and (a,0) but problematic
  }
  return a / b;
}

console.log(foo(1, 2)); // 0.5
console.log(foo(0, 0)); // 0
console.log(foo(0, 2)); // Infinity
console.log(foo(1, 0)); // Infinity
console.log(foo(-1, 0)); // -Infinity
console.log(foo(0, -1)); // Infinity