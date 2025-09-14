//Ordenar por multiples campos
//tema: Arrays + sort + comparadores

// Ordena una lista de objetos según múltiples criterios especificados en specs
function sortByMany(list, specs) {
    // Clona el array para evitar mutaciones
    const cloned = [...list];

    // Función comparadora basada en los criterios de specs
    function comparator(a, b) {
        for (const { key, dir } of specs) {
            if (a[key] < b[key]) return dir === 'asc' ? -1 : 1;
            if (a[key] > b[key]) return dir === 'asc' ? 1 : -1;
            // Si son iguales, continúa al siguiente criterio
        }
        return 0;
    }

    return cloned.sort(comparator);
}

// Ejemplo de uso:
const usuarios = [
    { apellido: 'Smith', edad: 30 },
    { apellido: 'Smith', edad: 25 },
    { apellido: 'Doe', edad: 40 },
    { apellido: 'Doe', edad: 35 }
];

// Especificaciones de ordenamiento: primero por 'apellido' ascendente, luego por 'edad' descendente
const criterios = [
    { key: 'apellido', dir: 'asc' },
    { key: 'edad', dir: 'desc' }
];

console.log(sortByMany(usuarios, criterios));
