export function mergeAlternately(word1: string, word2: string): string {
    let result = '';
    let i = 0;
    const w1l = word1.length;
    const w2l = word2.length;

    while (i < w1l || i < w2l) {
        if (i < w1l) {
            result += word1[i];
        }
        if (i < w2l) {
            result += word2[i];
        }
        i++;
    }

    return result;
}

console.log(mergeAlternately("AAAAAA", "111111"));
console.log(mergeAlternately("ab", "12345"));
console.log(mergeAlternately("abcd", "123"));
