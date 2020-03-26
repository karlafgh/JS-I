//declaración de variables
var anios_servicio, nro_cursos, new_sueldo;

const sueldo_base = 100000;
var name = "Karen";

nro_cursos = Math.random()*10;
anios_servicio =  Math.random()*10;

anios_servicio = anios_servicio.toPrecision(1)
nro_cursos = nro_cursos.toPrecision(1)

if (anios_servicio>5){
    new_sueldo = sueldo_base*0.1;
} else aumentoYear = 0;

if (nro_cursos>=4){
   aumentoCurso = sueldo_base+25000;
} else aumentoCurso = 0;


console.log("Nombre: "+name);
console.log("Años de servicio: "+anios_servicio);
console.log("Numero de cursos realizados: "+nro_cursos);
console.log("Nuevo sueldo: "+ new_sueldo +" $");
