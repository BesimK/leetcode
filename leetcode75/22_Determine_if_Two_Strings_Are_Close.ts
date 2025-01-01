function closeStrings(word1: string, word2: string): boolean {
    if (word1 === word2) return true;

    const l1 = word1.length;
    const l2 = word2.length;

    if (l1 !== l2) return false;


    const firstArr: number[] = new Array(26).fill(0);
    const secondArr: number[] = new Array(26).fill(0);

    for (let i = 0; i < l1; i++) {
        const ch1 = word1.charCodeAt(i) - 'a'.charCodeAt(0);
        firstArr[ch1]++;
    }

    for (let i = 0; i < l2; i++) {
        const ch2 = word2.charCodeAt(i) - 'a'.charCodeAt(0);
        if (firstArr[ch2] === 0) return false;

        secondArr[ch2]++;
    }

    firstArr.sort((a, b) => a - b);
    secondArr.sort((a, b) => a - b);

    for (let i = 0; i < 26; i++) {
        if (firstArr[i] !== secondArr[i]) {
            return false;
        }
    }

    return true;
}

console.log(closeStrings("abc", "bca")); // true