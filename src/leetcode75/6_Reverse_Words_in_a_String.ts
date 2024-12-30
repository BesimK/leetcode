function reverseWords(s: string): string {
    return s.trim().split(/\s+/).reverse().join(" ");
}

console.log(reverseWords("the sky is blue")); // "blue is sky the"
console.log(reverseWords("  hello world  ")); // "world hello"
console.log(reverseWords("a good   example")); // "example good a"
console.log(reverseWords("  Bob    Loves  Alice   ")); // "Alice Loves Bob"
