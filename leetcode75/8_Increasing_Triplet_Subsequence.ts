function increasingTriplet(nums: number[]): boolean {
    let leftMin = Number.MAX_VALUE;
    let middle = Number.MAX_VALUE;

    for (let num of nums) {
        if (num <= leftMin) {
            leftMin = num;
        } else if (num <= middle) {
            middle = num;
        } else {
            return true;
        }
    }

    return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5])); // true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // true
console.log(increasingTriplet([1, 2, 3, 1, 2, 1])); // false
console.log(increasingTriplet([1, 2, 3, 1, 2, 3])); // true