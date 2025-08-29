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