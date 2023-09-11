// Question
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//Solution
var twoSum = function(nums, target) {
    var hasmap = {};
    for(i=0; i< nums.length; i++){
       var diff =target  - nums[i];

       if(diff in hasmap){
           return[hasmap[diff],i];
       };
       hasmap[nums[i]] =i;
    };

    return[];
    
};