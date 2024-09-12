function factorial(n) {
    // Base case: when n is 0, return 1
    if (n === 0) {
        return 1;
    }
    // Recursive case: n * factorial of (n - 1)
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120

// 120 return 24 * 5 = 120

//        value       return
//        of(n)        value
// 1st     5      *     24      wait for 2nd return 4 * 6 = 24
// 2nd     4      *     6       wait for 3rd return 3 * 2 = 6
// 3rd     3      *     2       wait for 4th return 2 * 1 = 2
// 4th     2      *     1       wait for 5th return 1 * 1 = 1
// 5th     1      *     1       wait for 6th return 1
// 6th     0      