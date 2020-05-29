var containsDuplicate = function (nums) {
  // Approach 1
  unique = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (unique.has(nums[i])) {
      return true;
    } else {
      unique.add(nums[i]);
    }
  }
  return false;

  // Approach 2
  uniqueSet = new Set(nums);
  return !(uniqueSet.size == nums.length);
};

console.log(containsDuplicate([9, 5, 3, 12, 6, 8, 1, 5]));
