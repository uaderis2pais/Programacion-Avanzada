const conexiones = [
    {id:1, origen: "192.168.1.10", destino: "192.168.1.20", protocolo: "HTTP"},
    {id:2, origen: "192.168.1.30", destino: "192.168.1.40", protocolo: "FTP"},
    {id:3, origen: "192.168.1.50", destino: "192.168.1.60", protocolo: "SSH"},
    {id:4, origen: "192.168.1.70", destino: "192.168.1.80", protocolo: "HTTP"},
    {id:5, origen: "192.168.1.90", destino: "192.168.1.100", protocolo: "HTTPS"},
    {id:6, origen: "192.168.1.110", destino: "192.168.1.120", protocolo: "FTP"},
    {id:7, origen: "192.168.1.130", destino: "192.168.1.140", protocolo: "SSH"},
    {id:8, origen: "192.168.1.150", destino: "192.168.1.160", protocolo: "HTTP"}
]

const conexionesPorProtocolo = conexiones.reduce((acc, conexion) => {
    acc[conexion.protocolo] = (acc[conexion.protocolo] || 0) + 1;
    return acc;
}, {});

console.log(conexionesPorProtocolo);