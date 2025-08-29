//EJERCICIO 4
const servidores = [
    {nombre: "Servidor web", ip: "192.168.1.10",sistema: "linux"},
    {nombre: "Servidor de archivos", ip: "192.168.1.20", sistema: "windows"},
    {nombre: "servidor de base de datos", ip: "192.168.1.30", sistema: "windows"},
    {nombre: "servidor de correo", ip: "192.168.1.40", sistema: "linux"},
    {nombre: "Servidor DNS", ip: "192.168.1.50", sistema: "linux"}
];

const servidoresMapeadosIp = servidores.map(servidor => servidor.ip);
console.log(servidoresMapeadosIp);