const test = [3,7,1,6]
const test2 = [10,1]
const test3 = [13,13,20,0,8,9,9]

function minPossibleMax(nums) {
    let n = nums.length;
    let maxVal = nums[0]; // Initialize maxVal with the first element of nums
    let sum = nums[0]; // Initialize the sum with the first element of nums

    // Iterate through the array, starting from the second element
    for (let i = 1; i < n; i++) {
        sum += nums[i]; // Add the current element to the sum

        // Calculate the minimum possible max value for the current subarray (from index 0 to i)
        // This is done by dividing the sum by the length of the subarray (i + 1) and rounding up
        // Then, compare it with the current maxVal and update maxVal accordingly
        maxVal = Math.max(maxVal, Math.ceil(sum / (i + 1)));
    }
    return maxVal; // Return the minimum possible max value after iterating through the entire array
}






let nums1 = [3, 7, 1, 6];
console.log(minPossibleMax(nums1));  // Output: 5

let nums2 = [10, 1];
console.log(minPossibleMax(nums2));  // Output: 10

let nums3 = [13,13,20,0,8,9,9]
console.log(minPossibleMax(nums3)); // Output: 16