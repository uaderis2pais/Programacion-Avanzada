const dispositivos = [
    {id: 1,nombre:"PC-desarrollo", ip: "192.168.1.10", tipo: "estacion de trabajo"},
    {id: 2, nombre:"PC-marketing", ip: "192.168.1.20", tipo: "estacion de trabajo"},
    {id: 3, nombre:"servidor-web", ip: "192.168.1.30", tipo: "servidor"},
    {id: 4, nombre:"Servidor-BD", ip: "192.168.1.40", tipo: "servidor"}
];

const conexionesActivas = [
    {origen: "192.168.1.10", destino: "192.168.1.30", protocolo: "HTTP", bytes: 8500},
    {origen: "192.168.1.20", destino: "192.168.1.30", protocolo: "HTTP", bytes: 15000},
    {origen: "192.168.1.30", destino: "192.168.1.40", protocolo: "MySQL", bytes: 12000},
    {origen: "192.168.1.40", destino: "192.168.1.40", protocolo: "MySQL", bytes: 9200}
];

// Crea un informe que combine la información de dispositivos y conexiones
const informeActividad = conexionesActivas.map(conexion => {
// Encuentra los dispositivos de origen y destino
const dispositivoOrigen = dispositivos.find(d => d.ip === conexion.origen);
const dispositivoDestino = dispositivos.find(d => d.ip === conexion.destino);

// Retorna un objeto con la información combinada
return {
    origen: dispositivoOrigen.nombre,
    destino: dispositivoDestino.nombre,
    protocolo: conexion.protocolo,
    bytes: conexion.bytes
};
});

console.log("informe de actividad de red: ", informeActividad);