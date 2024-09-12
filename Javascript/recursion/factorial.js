function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120


// Initial Call:      | n |
// factorial(5):      | 5 | (calls factorial(4))
// factorial(4):      | 4 | (calls factorial(3))
// factorial(3):      | 3 | (calls factorial(2))
// factorial(2):      | 2 | (calls factorial(1))
// factorial(1):      | 1 | (base case, returns 1)


// return 5 * factorial(n - 1) {
//     return 4 * factorial(n - 1) {
//         return 3 * factorial(n - 1) {
//             return 2 * factorial(n - 1) {
//                 return 1 * factorial(n - 1) {
//                     return 1
//                 }
//             }
//         }
//     }
// }



// 120 return 24 * 5 = 120

//      value of(n)       return value
// 1st     5          *       24           wait for 2nd return 4 * 6 = 24
// 2nd     4          *       6            wait for 3rd return 3 * 2 = 6
// 3rd     3          *       2            wait for 4th return 2 * 1 = 2
// 4th     2          *       1            wait for 5th return 1 * 1 = 1
// 5th     1          *       1            wait for 6th return 1
// 6th     0


