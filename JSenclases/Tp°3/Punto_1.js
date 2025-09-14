//suma de numeros unicos
//tema: set y funciones
//set: es un conjunto de valores unicos
//funciones: es un conjunto de instrucciones que realizan una tarea

function sumUnique(nums) {
    let sum = 0;
    let vistos = new Set();
    for (let i = 0; i < nums.length; i++) {
        // Ignorar si no es número
        if (typeof nums[i] !== "number") continue;
        if (!vistos.has(nums[i])) {
            sum += nums[i];
            vistos.add(nums[i]);
        }
    }
    return sum;
}

console.log(sumUnique([1, "b", 3, 4, 5])); // 13
console.log(sumUnique([1, 2, 2, 3, 4, 4, 5])); // 15
console.log(sumUnique([1, 1, 1, 1, 1])); // 1
console.log(sumUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 55
console.log(sumUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10])); // 55
console.log(sumUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10])); // 55
console.log(sumUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10])); // 55
console.log(sumUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10])); // 55
console.log(sumUnique([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, "a"])); // 55