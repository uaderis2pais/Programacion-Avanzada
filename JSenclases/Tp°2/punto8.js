//EJERCICIO 8
//Dado un array de alertas de seguridad de red, filtra las que sean de nivel "alto" y
// transfórmalas en mensajes para el administrador.
const alertas = [
    {id: 1, mensaje: "Acceso no autorizado detectado", nivel: "alto"},
    {id: 2, mensaje: "Intento de malware bloqueado", nivel: "medio"},
    {id: 3, mensaje: "Fuga de datos potencial detectada", nivel: "alto"},
    {id: 4, mensaje: "Actividad sospechosa en la red", nivel: "bajo"}
];

const alertasAltas = alertas
    .filter(a => a.nivel === "alto")
    .map(a => `ALERTA: ${a.mensaje}`);

console.log("Mensajes para el administrador: ", alertasAltas);