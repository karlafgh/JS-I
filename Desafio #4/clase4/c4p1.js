var nombres =["Karla", "Karen", "Katherine", "Carlos", "Francis"];
var grades =[20, 08, 19, 114, 10];
var acumGrades = 0;

/*en la primera instrucción del for le di valor a la iteracion; luego le puse que iba a parar 
hasta que fuera menor a 5; para que el contador se vaya sumando*/
for (i = 0; i <5 ; i++){
    console.log("El nombre en la posición #"+i+" es "+ nombres[i]);
    /*debo declarar el acumulador porque sino me da undefined */
    acumGrades= grades[i]+acumGrades;
}
var promedio = acumGrades / 5;

console.log("El promedio de los estudiantes es: "+promedio+"pts");

function mostrarNotasOrdenadas(){
    grades.sort();
    console.log("----------Notas Ordenadas-----------")
    for(i=0; i<5; i++){
        console.log("las notas notas ordenadas son: "+grades[i]);
    }
}

function practica14_1(){
    var nombress = ["Karla", "Karen", "Kitty", "Karol", "Khloe"];
    var nombres1 = ["Harry", "Daniel"];
    nombress.push("Kitty");

    //lee la longit7ud del arreglo, es decir, muestra cuantos elementos hay en el
    alert("en el arreglo hay "+nombress.length+" elementos");
    //retorna los elementos separados con lo que le asignemos
    alert(nombress.join("; "));

    //ordena alfabeticamente
    nombress.sort();

    //separa 
    alert(nombress.join("#"));

    //elimina el último elemento 
    nombress.pop();
    alert(nombress.join("-"));
}
