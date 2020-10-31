const twoSum = (nums, target) => {
    const storage = {};

    for (let [index, num] of nums.entries()) {
        if (storage[num] !== undefined) {
            return [storage[num], index];
        }

        storage[target - num] = index;
    }
};