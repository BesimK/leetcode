function maxVowels(s: string, k: number): number {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

    let max = 0
    let current = 0

    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) max++
    }

    if (max === k) return max

    current = max

    for (let i = 1; i <= s.length - k; i++) {
        if (vowels.has(s[i - 1])) current--
        if (vowels.has(s[i + k - 1])) current++

        if (current === k) return current
        if (current > max) max = current
    }

    return max
}

console.log(maxVowels("abciiidef", 3)); // 3
console.log(maxVowels("aeiou", 2)); // 2
console.log(maxVowels("leetcode", 3)); // 2