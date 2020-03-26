// declarando variables
var salario_base = 500000;
var comision = 200000;
var nombre = "Karen";
var salario_neto;
var ventas_t;
var ganancia_v;

const autos_v = 15;
const auto_precio = 90000;
 
ventas_t = autos_v * auto_precio
//recuerda que se debe ser el 0.10 porque el trabajador gana el 10% de sus ventas
ganancia_v = ventas_t * 0.10;
salario_neto = salario_base + comision * autos_v + ganancia_v;

console.log("Nombre de vendedor: "+nombre);
console.log("Cantidad de autos vendidos: "+autos_v);
console.log("Salario neto de "+nombre+" es: "+salario_neto+" $");
