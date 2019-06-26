var maxSubArray = function(nums) {
     
    for(let i = 1; i < nums.length; i++){

    nums[i] = Math.max(nums[i], nums[i] + nums[i-1]);
    }
    
    return Math.max(...nums);

};

const numbers = [2,3,5,-6,-5,3,2,-7];

maxSubArray(numbers);
console.log(maxSubArray(numbers));