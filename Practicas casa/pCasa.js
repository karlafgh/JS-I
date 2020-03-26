var otroNum = 6545.45412;
otroNum = otroNum.toString();

console.log(otroNum);
console.log("Hola");

var holis = Math.random()*5;
//esto lo hago para que al mostrar solo me enseñe con 3 decimales
console.log(holis.toFixed(3));

confirm("¿Quieres que te diga un secreto?") ? alert("Eres cool") : alert("Que aburrida eres");

var hola = prompt("Ingresa algo");
console.log(hola);

//no toma los decimales si son ingresados ya que se espera un entero
var hola1 = parseInt(prompt("Ingresa un numero "));
console.log(hola1);

var hola2 = parseFloat(prompt("Ingresa un numero "));
console.log(hola2);

var edad;
//al principio se ve undefined 
console.log(edad);

function leerEdad(){
    edad = 100;
    alert("Good job!")
}

leerEdad();
//despues de el llmado de la funcion si es tomada en cuenta como 100 tal como es asignada en la funcion
console.log(edad);

var salario;

function calcularSalario(edad){
    if(edad >= 100){
        salario = 100*4
        return  salario;
    }else{
        salario = 100
        return  salario;
    }
}

function calcularSalario2(edad){
    if(edad >= 100){
        salario = 100*18
    }else{
        salario = 100 -1 
    }
}

//la funcion si retorna el valor de salario
calcularSalario(edad);
console.log(salario);
alert(salario);

var numbeer = parseInt(prompt("ingresa un numero"));
var answer;

if(numbeer = 0){
    return true
}else{
    if((numbeer>=1 ) && (numbeer<=3 )){
        return true
    }else{
        if(numbeer>3){
            return false
        }
    }

}
console.log("Elemento retornado: "+answer);