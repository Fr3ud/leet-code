const shuffle = (nums, n) => {
    const newArray = [];

    for (let i = 0; i < n; i++) {
        newArray.push(nums[i]);
        newArray.push(nums[i + n])
    }

    return newArray;
};