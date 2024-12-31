function uniqueOccurrences(arr: number[]): boolean {
    const countMap = arr.reduce((map, n) => map.set(n, (map.get(n) || 0) + 1), new Map());
    const occurrences = new Set(countMap.values());
    return countMap.size === occurrences.size;
}

console.log(uniqueOccurrences([1, 2, 2, 1, 3])); // false
console.log(uniqueOccurrences([1, 2])); // false
console.log(uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0])); // true
console.log(uniqueOccurrences([1, 2, 2, 1, 3, 3])); // false