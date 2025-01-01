function productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = new Array(n);

    result[0] = 1;

    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    let rightProduct = 1;
    for (let i = n - 2; i >= 0; i--) {
        rightProduct *= nums[i + 1];
        result[i] *= rightProduct;
    }

    return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // [0,0,9,0,0]
console.log(productExceptSelf([1, 0])); // [0,1]
console.log(productExceptSelf([0, 0])); // [0,0]
console.log(productExceptSelf([1, 0, 1])); // [0,1,0]