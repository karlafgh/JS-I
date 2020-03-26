//declaración de variables
var nombre = "Katherine";
var precio_v = 10000;

var cuota_inicial;
var cuota_mensual;

//el 0.30 es para tomar el 30% del costo del vehiculo que se debe pagar
cuota_inicial = precio_v * 0.30;
cuota_mensual = (precio_v - cuota_inicial) / 24;

console.log("nombre del cliente: "+nombre);
console.log("Precio del vehiculo: "+precio_v+" $");
console.log("Cuota Inicial: "+cuota_inicial+" $");
console.log("Cuota Mensual: "+cuota_mensual.toFixed(2)+" $");