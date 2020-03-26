var nota;
var acum_nota = 0;
var cant_notas = 0;
var monto;
var acum_monto = 0;

function leerEntero(){
    nota = parseFloat(prompt("Ingrese la nota del desafio #"+ cant_notas));
    if(isNaN(nota)){
        alert("En las notas deben solo números!!!!");
    }else{
        acum_nota = acum_nota + nota;
    }
}

while(confirm("¿Desea ingresar una nota? ")){
    //este es el acumulador
    cant_notas++; 
    //aqui estoy llamando la funcion
    leerEntero();
}

//funcion para validar numeros
function otroNumero(){
    numero = prompt("Ingresa el valor: ", "100");
    if(numero == null){
        alert("tu número es null")
        numero = 50;
    } else{
        numero = parseFloat(numero);
        //se eejecuta si el valor que pusieron no es numero sino string
        if(isNaN(numero)){
            alert("Debes escribir solo numeros!!!");
            otroNumero();
        }
    }
}

otroNumero();
//calculos 
console.log("La suma de las notas es: "+ acum_nota);
var promedio = acum_nota / cant_notas;
console.log("El promedio de las notas es: "+ promedio);

function solicitarMonto(){
    var monto = parseFloat(prompt("Ingresa el monto solicitado: "));
    acum_monto = acum_monto + monto;
}
function acumuladoMonto(){
    alert("El monto aucmulado es: "+acum_monto);
    console.log("El monto aucmulado es: "+acum_monto);
}