function maxOperations(nums: number[], k: number): number {
    const map = new Map<number, number>();
    let operations = 0;
    for (let num of nums) {
        const complement = k - num;
        const complementCount = map.get(complement) ?? 0;
        if (complementCount > 0) {
            operations++;
            map.set(complement, complementCount - 1);
        } else {
            map.set(num, (map.get(num) ?? 0) + 1);
        }
    }
    return operations;
}
