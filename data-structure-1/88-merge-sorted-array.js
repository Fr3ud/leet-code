const merge = (nums1, m, nums2, n)  => {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0) {
    let firstValue = nums1[first];
    let secondValue = nums2[second];

    if (firstValue > secondValue) {
      nums1[i] = firstValue;
      first--;
    } else {
      nums1[i] = secondValue;
      second--;
    }
    
    i--;
  }
};
