// 1 : arithmatic operator
// 2 : assignment operator
// 3 : comparisons operator
// 4 : string operator
// 5 : logical operator
// 6 : bitwise operator
// 7 : type operator


// 1 : Arithmatic operator

// addition
/*
let a = 100
let b = 70
console.log("Addition = " + (a + b))
*/

// subtract
// let a = 260
// let b = 120
// console.log("Subtraction = " + (a - b))

// multiplication
// let a = 15
// let b = 5
// console.log("Multiplication = "+ (a * b))

// division
// let a = 99
// let b = 9
// console.log("Division = "+ (a / b))

// exponentiation (power of)
// let a = 2
// let b = 5
// console.log("Exponentiation = " + (a ** b))

// modulus
// let a = 22
// let b = 4
// console.log("Modulus = " + (a % b))

// increment
// let a = 75
// a ++
// console.log("Increment = " + a)

// decrement
// let a = 49
// a --
// console.log("Decrement = " + a)


// 2 : Assignment operator

// =
// let a = 550
// console.log("A = " + a)

// +=
// let a = 52
// a += 8
// console.log("(A += 3) = " + a)

// -=
// let a = 47
// a -= 5
// console.log("(A -= 3) = " + a)

// *=
// let a = 25
// a *= 2
// console.log("(A *= 3) = " + a)

// /=
// let a = 72
// a /= 8
// console.log("(A /= 3) = " + a)

// %=
// let a = 20
// a %= 6
// console.log("(A /= 3) = " + a)

// **=
// let a = 2
// a **= 6
// console.log("(A **= 3) = " + a)


// 3 : Comparisons operator -> boolean value

// equal to  value
// let a = "45"
// let b = 45
// console.log("(A == b) = " + (a == b))     // true

// equal to value and type 
// let a = "22"
// let b = 22
// console.log("(A === b) = " + (a === b))          // false

// not equal to value
// let a = 42
// let b = 89
// console.log("(A != b) = " + (a != b))       // ture

// not equal to value and type
// let a = "25"
// let b = 25
// console.log("(A !== b) = " + (a !== b))     // true

// greater than
// let a = 32
// let b = 49
// console.log("(A > b) = " + (a > b))      // false

// less than
// let a = 57
// let b = 35
// console.log("(A < b) = " + (a < b))         // false

// greater than or equal to
// let a = 65
// let b = 45
// console.log("(A >= b) = " + (a >= b))           // true

// less than or equal to
// let a = 77
// let b = 89
// console.log("(A <= b) = " + (a <= b))           // true


// 4 : string operator

// string comparision
// console.log("('a' < 'b') = " + ('a' < 'b'))

// string concatenation
// let first = "Sundar"
// let last = "Samanta"
// let name = first + " " + last
// console.log(name)

// let str1 = "I am a Devil"
// str1 += " of my world."
// console.log(str1);


// 5 : logical operator


// // logical and &&

// console.log(true && true)
// if (12 < 25 && 45 > 35) {
//     console.log('Hello Sun !');
// }


// console.log(true && false)
// if (56 < 67 && 45 > 55) {
//     console.log('Hey !');
// }


// console.log(false && true)
// if (32 < 23 && 67 > 49) {
//     console.log('first case');
// }


// console.log(false && false)
// if (42 < 33 && 37 > 49) {
//     console.log('Hey there !');
// }


// logical or ||

// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)


// if (true || false) {
//     console.log('first case');
// }


// logical not  !

// console.log(!false)
// console.log(!true)

// if (!false) {
//     console.log('Mr. Sun');
// }




// 6 : bitwise operator

// binary number

// 8 -> 1000

// and ->
// console.log("Bitwise 'and' res = " + (11 & 6))

// 8 4 2 1

// 1 0 1 1 -> 11
// 0 1 1 0 -> 6
// ---------------
// 0 0 1 0 -> 2

// bitwise or
// console.log("Bitwise 'or' res = " + (11 | 6))

// 8 4 2 1
// 1 0 1 1 -> 11
// 0 1 1 0 -> 6
// ---------------
// 1 1 1 1 -> 15

// bitwise not
// console.log("Bitwise 'not' res = " + (~25))

// 16 8 4 2 1
//  1 1 0 0 1 -> 25
// ---------------
//  0 0 1 1 0 -> 6


// xor

// xor operator compares between two bits and retuen 1 for each different bit else  0 
// 8 4 2 1
// 1 1 0 0 -> 12
// 0 1 1 1 -> 7
// ---------------
// 1 0 1 1 -> 11
// console.log("Bitwise 'and' res = " + (12 ^ 7))

// righ shift
// 8 4 2 1

// 0 1 1 0 -> 6
// ---------------
// 0 0 1 1  -> 3

// console.log("Right shift (>>) = " + (6 >> 1))

// left shift
// 8 4 2 1

// 0 0 1 1 -> 3
// ---------------
// 0 1 1 0 -> 6
// console.log("Left shift (<<) = " + (3 << 1))



// 7 : type operator

// console.log(typeof 45)
// console.log(typeof "45")
// console.log(typeof false)

// instance of

console.log(5 instanceof Number)

class Student { }

let s1 = new Student()
// car is a object of myCar class
console.log(s1 instanceof Student)
console.log(s1 instanceof Object)       // all item are instanceof object