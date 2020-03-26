//declaración de variables
const p_desayuno = 10;
const p_almuerzo = 20;
const p_cena = 25;
const desayunos_v = 30;
const almuerzo_v = 20;
const cena_v = 60;

var i_desayuno;
var i_almuerzo;
var i_cena;
var i_del_dia;

i_desayuno = p_desayuno * desayunos_v;
i_almuerzo = p_almuerzo * almuerzo_v;
i_cena = p_cena * cena_v;
i_del_dia = i_desayuno + i_almuerzo + i_cena;
prom_precio = (p_desayuno + p_almuerzo + p_cena)/3;

console.log("Ingreso del desayuno: "+i_desayuno+" $");
console.log("Ingreso del almuerzo: " +i_almuerzo+" $");
console.log("Ingreso de la cena: "+i_cena+" $");
console.log("Ingreso del dia: "+i_del_dia+" $");
console.log("Promedio de los precios de las comidas: "+prom_precio.toFixed(2)+" $");


