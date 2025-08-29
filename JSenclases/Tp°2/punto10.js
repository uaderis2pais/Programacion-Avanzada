const topologiaRed = {
nodos: [
{ id: "A", tipo: "Router", ubicacion: "Planta 1" },
{ id: "B", tipo: "Switch", ubicacion: "Planta 1" },
{ id: "C", tipo: "Switch", ubicacion: "Planta 2" },
{ id: "D", tipo: "Switch", ubicacion: "Planta 3" },
{ id: "E", tipo: "Router", ubicacion: "Planta 3" }
],
conexiones: [
{ origen: "A", destino: "B", ancho_banda: 1000 },
{ origen: "A", destino: "C", ancho_banda: 1000 },
{ origen: "B", destino: "C", ancho_banda: 100 },
{ origen: "B", destino: "D", ancho_banda: 100 },
{ origen: "C", destino: "D", ancho_banda: 100 },
{ origen: "C", destino: "E", ancho_banda: 1000 },
{ origen: "D", destino: "E", ancho_banda: 1000 }
]
};

// cuenta el numero de conexiones por nodo
const conexionesPorNodo = {};
topologiaRed.nodos.forEach(nodo => {
    conexionesPorNodo[nodo.id]= 0;
});
//contar conexiones
topologiaRed.conexiones.forEach(conexion => {
    conexionesPorNodo[conexion.origen]++;
    conexionesPorNodo[conexion.destino]++;
});

const nodosConMasConexiones = Object.entries(conexionesPorNodo)
    .filter(([nodo, count]) => count > 0)
    .map(([nodo, count]) => ({ nodo, count }));

const nodosOrdenados = Object.entries(conexionesPorNodo)
.sort((a, b) => b[1] - a[1]);

console.log("Nodos ordenados por conexiones: ", nodosOrdenados);
console.log("Nodos con más conexiones: ", nodosConMasConexiones);