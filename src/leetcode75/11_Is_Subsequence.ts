function isSubsequence(s: string, t: string): boolean {
    const sLength = s.length;
    const tLength = t.length;

    if (sLength === 0) return true;
    if (tLength === 0) return false;
    if (sLength > tLength) return false;

    let sIndex = 0;

    for (let tIndex = 0; tIndex < tLength; ++tIndex) {
        if (s[sIndex] === t[tIndex]) {
            sIndex++;
        }
    }

    return sIndex === sLength;
}

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false
console.log(isSubsequence("abc", "abc")); // true
console.log(isSubsequence("abc", "ahbgdc")); // true
