const maxSubArray = nums => {
  let max = nums[0];
  let acc = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const calc = Math.max(nums[i], nums[i] + acc);

    if (calc > max) max = calc;
    
    acc = calc;
  }

  return max;
};
