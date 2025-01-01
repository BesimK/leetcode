function reverseVowels(s: string): string {
    let l = 0, r = s.length - 1;
    const vowels = new Set('aeiouAEIOU');
    const arr = s.split("");
    while (l < r) {
        if (vowels.has(arr[l]) && vowels.has(arr[r])) {
            [arr[l], arr[r]] = [arr[r], arr[l]];
            l++;
            r--;
        } else {
            if (!vowels.has(arr[l])) l++;
            if (!vowels.has(arr[r])) r--;
        }
    }
    return arr.join("");
}

console.log(reverseVowels("hello")); // "holle"
console.log(reverseVowels("leetcode")); // "leotcede"
