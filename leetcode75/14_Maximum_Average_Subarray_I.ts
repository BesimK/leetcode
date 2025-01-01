function findMaxAverage(nums: number[], k: number): number {
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxAvg = windowSum / k;

    for (let i = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxAvg = Math.max(maxAvg, windowSum / k);
    }
    return maxAvg;
}


console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([5], 1)); // 5
console.log(findMaxAverage([5, 5], 1)); // 5
console.log(findMaxAverage([5, 5], 2)); // 5