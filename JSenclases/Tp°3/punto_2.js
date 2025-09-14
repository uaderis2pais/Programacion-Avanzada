//seleccionar propiedades
//tema: objetos y funciones puras
//ignorar las que no existan
//Criterios: No mutar obj.
function pick (obj, keys) {
    const newObj = {};
    for (const key of keys) {
        if (key in obj) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
console.log(pick({a:1, b:2, c:3}, ['a', 'c'])); // {a:1, c:3}
console.log(pick({a:1, b:2, c:3}, ['a', 'd'])); // {a:1}
console.log(pick({a:1, b:2, c:3}, [])); // {}