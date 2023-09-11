// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Solution 1

//not working for third test case
var isPalindrome = function(x) {
    let initialX = x;
    let revNum = 0;
     while(x != 0){
         revNum = parseInt(revNum*10 + parseInt(x % 10));
         x = parseInt(x / 10);
     }
 
     if(initialX <0 ){
         return initialX === -1 * revNum;
     }
 
     return initialX = revNum;
 };

// Solutin 2 Javascript way

var isPalindrome = function(x) {
    const reverseNumber = x.toString().split("").reverse().join("");
     return x == reverseNumber;
 };