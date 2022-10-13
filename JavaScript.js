// towSum
var twoSum = function (nums, target) {
  let flag = true,
    i = 0,
    j = 1;
  while (flag) {
    console.log("---count", nums[i] + nums[j]);

    if (nums[i] + nums[j] === target || i === nums.length - 2) break;
    if (j === nums.length - 1) {
      i++;
      j = i + 1;
    } else {
      j++;
    }
  }
  return [i, j];
};

// Median of Two Sorted Arrays
var findMedianSortedArrays = function (nums1, nums2) {
  let nums = [];
  nums = nums1.concat(nums2);
  nums = nums.sort((a, b) => a - b);
  if (nums.length % 2 === 1) {
    return nums[Math.floor(nums.length / 2)];
  } else {
    return parseFloat(
      (nums[Math.floor(nums.length / 2) - 1] +
        nums[Math.floor(nums.length / 2)]) /
        2
    );
  }
};

// Regular Expression Matching
var isMatch = function (s, p) {
  let text = s,
    pattern,
    result;
  pattern = new RegExp(p);
  result = text.match(pattern);
  if (!!result) {
    if (text === result[0]) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};

console.log("+++result: ", isMatch("aa", "b"));
