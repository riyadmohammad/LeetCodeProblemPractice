// QUestion

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//solution

var isValid = function(s) {
    var stack = [];
    var len = s.length;
    var map = {
        '(':')',
        '{':'}',
        '[':']',
    };
     for(i=0; i< len ; i++){
         if(stack.length > 0 && map[stack[stack.length - 1]] === s[i] ){
             stack.pop();
         }else{
             stack.push(s[i]);
         }
     }
     return stack.length === 0;
};