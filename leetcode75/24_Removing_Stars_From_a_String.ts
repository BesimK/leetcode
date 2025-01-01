function removeStars(s: string): string {
    let count = 0, newS = '', i = s.length - 1;

    while (i >= 0) {
        if (s[i] === '*') {
            count++;
        } else if (count) {
            count--;
        } else {
            newS = s[i] + newS;
        }
        i--;
    }

    return newS
};
console.log(removeStars("leetcod*e**")); 
