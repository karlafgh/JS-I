//declaración de varibales
var pantalon_t = Math.random()*3;
var pantalon_a = 141246.25;
var pantalon_b = 96720;
var pantalon_c = 58900;
var name = "Katherine";
var cantidad;

do{
    cantidad = parseInt(prompt("Ingresa la cantidad de pantalones a comprar: "));
} while("hola")

pantalon_t = Math.round(pantalon_t);
//"según" en js. No te olvides de usar el break luego de cada caso!!!!!!
switch(pantalon_t){
    case 1: 
        console.log("Nombre: "+ name);
        console.log("Tipo de pantalón: Pantalon A");
        console.log("Precio pantalon: "+ pantalon_a+"$");
        break;
    case 2:
        console.log("Nombre: "+ name);
        console.log("Tipo de pantalón: Pantalon B");
        console.log("Precio pantalon: "+ pantalon_b+"$");
        break;
    case 3:
        console.log("Nombre: "+ name);
        console.log("Tipo de pantalón: Pantalon C");
        console.log("Precio pantalon: "+ pantalon_c+"$");
        break;
    default:
        console.log("Nombre: "+ name);
        console.log("Tipo de pantalón: No se eligió");
        console.log("Precio pantalon: no existe");
}