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