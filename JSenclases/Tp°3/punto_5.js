//deepEqual (objetos/arrays simples)
//tema: objetos + recursividad

function deepEqual(a, b) {
    if (a === b) return true;

    if (a === null || b === null) return a === b;

    if (typeof a !== typeof b) return false;

    if (typeof a !== 'object') return false;

    // Arrays
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        for (let i = 0; i < a.length; i++) {
            if (!deepEqual(a[i], b[i])) return false;
        }
        return true;
    }

    // Objects
    if (!Array.isArray(a) && !Array.isArray(b)) {
        const keysA = Object.keys(a);
        const keysB = Object.keys(b);
        if (keysA.length !== keysB.length) return false;
        for (let key of keysA) {
            if (!keysB.includes(key)) return false;
            if (!deepEqual(a[key], b[key])) return false;
        }
        return true;
    }

    // One is array, one is object
    return false;
}

// Ejemplos de uso:
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
console.log(deepEqual([1, 2, [3, 4]], [1, 2, [3, 4]]));
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 3 }));
console.log(deepEqual([1, 2, 3], [1, 2, 4]));