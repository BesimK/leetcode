function decodeString(s: string): string {
    let stack: [number, string][] = [];
    let result: string = '';
    let multiplier = 0;

    for (let char of s) {
        if (char === '[') {
            stack.push([multiplier, result]);
            multiplier = 0;
            result = '';
        } else if (char === ']') {
            const [prevMultiplier, prevString] = stack.pop()!;
            result = prevString + result.repeat(prevMultiplier);
        } else if (!isNaN(Number(char))) {
            multiplier = multiplier * 10 + +char;
        } else {
            result += char;
        }
    }

    return result;
};