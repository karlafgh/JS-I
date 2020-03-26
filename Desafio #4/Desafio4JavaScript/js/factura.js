console.log("------Ejercicio 1------");
var nombres = [];
var montos = [];
var promedio = 0;
var total = 0;
var contador = 0; 



function solicitar_datos() {
   contador++;
	nombre = prompt("Ingresa tu Nombre");
	nombre = Nombre(nombre);
	/*nombre = busqueda_array(nombres,nombre)*/
	monto = parseInt(prompt("Ingresa el Monto"));
	monto = precio(monto);
   if(contador>=0){
   	nombres[contador]=nombre;
   	montos[contador]= monto;
   }
}


function total_datos(){
	if(contador>=0){
	console.log("El Nombre " +contador+ " del Cliente es:" +nombres[contador]);
	console.log("El Monto Ingresado fue:" +montos[contador]);
	total = total+montos[contador];
	promedio = total/contador;
	console.log("El Total de Ventas es:" +total);
	console.log("El Promedio Total de Ventas es:" +promedio);
	console.log("-------------------------------------------")
}
}
function busqueda_array(nombres,nombre){
nombres.indexOf(nombre)
if (nombres==nombre) {
	return true
}else{
	return false
}

}
