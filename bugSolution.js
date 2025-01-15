function foo(a, b) {
  if (a === 0 && b === 0) {
    return 0; // Correct handling for (0,0)
  }
  if (b === 0) {
    return a > 0 ? Infinity : a < 0 ? -Infinity : NaN; //Handle division by zero
  }
  if (a === 0) {
    return 0; //Handle numerator being zero
  }
  return a / b;
}

console.log(foo(1, 2)); // 0.5
console.log(foo(0, 0)); // 0
console.log(foo(0, 2)); // 0
console.log(foo(1, 0)); // Infinity
console.log(foo(-1, 0)); // -Infinity
console.log(foo(0, -1)); // 0