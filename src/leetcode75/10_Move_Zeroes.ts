function moveZeroes(nums: number[]): number[] {
    let lastNonZeroFoundAt = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[lastNonZeroFoundAt], nums[i]] = [nums[i], nums[lastNonZeroFoundAt]];
            lastNonZeroFoundAt++;
        }
    }
    return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([0, 0])); // [0,0]
console.log(moveZeroes([1, 0])); // [1,0]
console.log(moveZeroes([1, 0, 1])); // [1,1,0]