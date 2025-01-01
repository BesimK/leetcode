function compress(chars: string[]): number {
    let writeIndex = 0;
    let readIndex = 0;

    while (readIndex < chars.length) {
        let currentChar = chars[readIndex];
        let count = 0;

        while (readIndex < chars.length && chars[readIndex] === currentChar) {
            count++;
            readIndex++;
        }

        chars[writeIndex++] = currentChar;

        if (count > 1) {
            let countStr = count.toString();
            for (let char of countStr) {
                chars[writeIndex++] = char;
            }
        }
    }

    return writeIndex;
}

console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6
console.log(compress(["a"])); // 1
console.log(compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"])); // 4
console.log(compress(["a", "a", "a", "b", "b", "a", "a"])); // 6