//declaración de variables
var parcial_1;
var parcial_2;
var parcial_3;
var evaluacion_c;
var trabajo_p;
var nota_final;
var nota_final_20;
var nota_final_4;

//ahí se va a ser un número al azar entre 0 y el numero que coloque luego del *
parcial_1 = Math.random()*27
parcial_2 = Math.random()*27;
parcial_3 = Math.random()*27;
evaluacion_c = Math.random()*9;
trabajo_p = Math.random()*10;
nota_final = parcial_1 + parcial_2 + parcial_3 + evaluacion_c + trabajo_p;

/*ESTO ES SOLO UN EJEMPLO
ejecute el toPrecistion para que me diera la cantidad de decimales exacta que 
necesitaba
console.log("parcial 1 = "+parcial_1.toPrecision(2);
console.log("parcial 2 = "+parcial_2);
console.log("evaluacion continua= "+evaluacion_c);
console.log("trabajo practico = "+trabajo_p);
*/

console.log("La nota final del estudiante es: "+nota_final.toPrecision(2)+"/100 pts");
nota_final_20 = nota_final * 20 / 100
console.log("La nota final del estudiante es: "+nota_final_20.toPrecision(2)+"/20 pts");
nota_final_4 = nota_final * 4 / 100
console.log("La nota final del estudiante es: "+nota_final_4.toPrecision(2)+"/4 pts");