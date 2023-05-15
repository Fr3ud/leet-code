/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */


const search = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = nums[mid]

    if (guess === target) {
      return mid;
    } 
    
    if (guess > target) {
      high = mid - 1;
    } 
    
    if (guess < target)  {
      low = mid + 1;
    }
  }

  return -1;
};
