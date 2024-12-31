function pivotIndex(nums: number[]): number {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const rightSum = totalSum - leftSum - nums[i];

        if (leftSum === rightSum) {
            return i;
        }

        leftSum += nums[i];
    }

    return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); // 3
console.log(pivotIndex([1, 2, 3])); // -1
console.log(pivotIndex([2, 1, -1])); // 0
console.log(pivotIndex([0, 0, 0, 0, 0])); // 0