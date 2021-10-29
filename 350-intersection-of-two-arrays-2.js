const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];
const nums3 = [1,2,2,1];
const nums4 = [2,2];

const intersect = function(nums1, nums2) {
  const result = [];
    
  const map = nums1.reduce((acc, i) => {
    acc[i] = acc[i] ? acc[i] + 1 : 1;
    
    return acc;
  }, {});


  for (let i = 0; i < nums2.length; i++) {
    const current = nums2[i];
    const count = map[current];

    if (count && count > 0) {
      result.push(current);
      map[current] -= 1;
    }
  }

  return result;
};

console.log(intersect(nums1, nums2));
console.log(intersect(nums3, nums4));
