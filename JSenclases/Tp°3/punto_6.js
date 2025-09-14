function isBalanced(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

// Ejemplos de uso:
console.log(isBalanced("([]{})")); // true
console.log(isBalanced("(]"));     // false
console.log(isBalanced("([)]"));   // false