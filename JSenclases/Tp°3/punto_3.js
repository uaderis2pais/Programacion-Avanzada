//Agrupar por clave o funcion
//tema: arrays + objetos + HOF

// Agrupa los elementos de una lista según una clave o función
function groupBy(list, keyOrFn) {
    return list.reduce((acc, item) => {
        // Determina la clave: por nombre de propiedad o por función
        const key = typeof keyOrFn === 'function'
            ? keyOrFn(item)
            : item[keyOrFn];
        // Inicializa el array si la clave no existe
        if (!acc[key]) acc[key] = [];
        // Agrega el elemento al grupo correspondiente
        acc[key].push(item);
        return acc;
    }, {});
}

//Ejemplos de uso:
console.log(groupBy([{t:'a'},{t:'b'},{t:'a'}], 't'));
console.log(groupBy([6,7,8,9], n => n%2?'impar':'par'));