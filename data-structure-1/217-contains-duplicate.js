const nums1 = [1,2,3,1];
const nums2 = [1,2,3,4];
const nums3 = [1,1,1,3,3,4,3,2,4,2];

const containsDuplicate = nums => nums.length !== [...new Set(nums)].length;

console.log(containsDuplicate(nums1))
console.log(containsDuplicate(nums2))
console.log(containsDuplicate(nums3))
