var nro =  prompt("Ingrese un número");

nro = parseFloat(nro)

if(isNaN(nro)){
    alert("No es número");
}else{
    alert("Excelente parcero tu numero es: " + nro);
}