function debounce(fn, delay) {
    let timer;
    return function(...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}
// Ejemplo de uso:
const funcionDebounce = debounce((msg) => {
    console.log("Función ejecutada con mensaje:", msg);
}, 2000);

// Simulando llamadas rápidas a la función
funcionDebounce("Primer mensaje");
funcionDebounce("Segundo mensaje");
funcionDebounce("Tercer mensaje");

// Solo se ejecutará el último mensaje después de 2 segundos de inactividad
// Resultado esperado:
// (Después de 2 segundos)
// Función ejecutada con mensaje: Tercer mensaje