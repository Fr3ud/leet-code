/**
 * @param {number[]} nums
 * @return {number[]}
 */
 
 const runningSum = nums => {
    let currentSum = 0;

    return nums.map(num => currentSum += num);
};
