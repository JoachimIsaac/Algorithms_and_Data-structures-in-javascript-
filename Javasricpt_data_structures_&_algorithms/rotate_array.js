//  @param {number[]} nums
//   @param {number} k
//   @return {void} Do not return anything, modify nums in-place instead.

var rotate = function (nums, k) {
    if (k > nums.length) {
        k = k % nums.length;
    }
    if (k === 0) {
        return;
    }
    var splice = nums.splice(-k, k);
    nums.unshift(...splice);
}

const nums = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotate(nums, k);