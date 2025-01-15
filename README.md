# Subtle Infinity Bug in JavaScript Division Function

This repository demonstrates a subtle bug in a JavaScript function that performs division. The function correctly handles the case where both inputs are 0, but its handling of cases where one input is 0 leads to unexpected results when dealing with negative numbers.  The solution shows how to improve the function's handling of these edge cases for more robust behavior.

## Bug Description
The `foo` function aims to divide two numbers (`a` and `b`). While it correctly returns 0 when both `a` and `b` are 0, it incorrectly uses `Infinity` when one of the inputs is 0. This is problematic because, while mathematically sound for positive non-zero inputs, it yields misleading results for negative ones. The function lacks proper handling of these edge cases, leading to unexpected behavior and potential errors in applications utilizing it.

## Solution
The provided solution addresses the issue by explicitly checking for the scenarios where one input is zero and the other is non-zero.  If the denominator is zero, it directly returns either `Infinity` or `-Infinity` based on the signs of the numerator and denominator, ensuring that the function provides accurate and expected results for all valid input combinations.