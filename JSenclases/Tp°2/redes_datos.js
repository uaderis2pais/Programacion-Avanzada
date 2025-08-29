//EJERCICIO 1
let router = {
    modelo: "plus1000",
    marca: "tp-link",
    puertos: 4,
    velociadad: "300mbps",
    suppwifi: true
};
console.log(router);

//EJERCICIO 2
const dispositivosRedes = [
    {tipo: "Router", marca:"tp-link", modelo:"SF345", precio: 3000},
    {tipo: "Switch", marca:"cisco", modelo:"TL-SG108", precio: 1500},
    {tipo: "microwave", marca:"cisco", modelo:"TL-WR841N", precio: 2000},
    {tipo: "firewall", marca:"tp-link", modelo:"TL-WR940N", precio: 2500},
    {tipo: "Router", marca:"tp-link", modelo:"TL-WR2543ND", precio: 3500}
];

console.log(dispositivosRedes);


//EJERCICIO 3
const disposFiltrados  = dispositivosRedes.filter(dispositivo => dispositivo.marca === "tp-link");

console.log(disposFiltrados);

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

//EJERCICIO 5

const paquetesDatos = [
    {id:1, origen: "192.168.1.10", destino: "192.168.1.20", tamaño: 1200, prioridad: 3},
    {id:2, origen: "192.168.1.30", destino: "192.168.1.40", tamaño: 800, prioridad: 1},
    {id:3, origen: "192.168.1.50", destino: "192.168.1.60", tamaño: 1500, prioridad: 5},
    {id:4, origen: "192.168.1.70", destino: "192.168.1.80", tamaño: 950, prioridad: 2},
    {id:5, origen: "192.168.1.90", destino: "192.168.1.100", tamaño: 2000, prioridad: 4}
];

const paquetesFiltradosOrdenados = paquetesDatos
    .filter(paquete => paquete.tamaño > 1000)
    .sort((a, b) => b.prioridad - a.prioridad);

console.log(paquetesFiltradosOrdenados);

//EJERCICIO 6

const traficoRed = {
    "08:00": 1250, //MB transferidos
    "09:00": 1870,
    "10:00": 2100,
    "11:00": 1950,
    "12:00": 1600,
    "13:00": 1300,
    "14:00": 1700
};
//la hora con mas trafico
let mayorTrafico = Object.keys(traficoRed).reduce((actual, b) => traficoRed[actual] > traficoRed[b] ? actual : b);

let traficoTotal = Object.values(traficoRed).reduce((a,b)=> a+b,0);

console.log("el trafico total es: " + traficoTotal + "MB y la hora con mas trafico es: " + mayorTrafico + "hs")