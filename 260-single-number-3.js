const singleNumber = (nums) => {
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
      if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {
          result.push(nums[i]);
      }
  }
  
  return result;
};
