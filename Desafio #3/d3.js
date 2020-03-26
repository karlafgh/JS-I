//declaración de variables
var nombre, cedula, genero, numDestino, ticketPrice, destinyName; 
var cantDeRegistrados = 0;
var totalIngresos = 0;

function leerNombre(){
    nombre = prompt("ingrese su nombre");
    if(nombre == null){
        alert("Error. Debes ingresar algo");
        leerNombre();
    }else{
        if(!(isNaN(nombre))){
            alert("Error. No puedes ingresar números.");
            leerNombre();
        }else{
            return nombre;
        }   
    }
}

function leerGenero(){
    genero = prompt("ingrese una inicial según su genero [F]emenino [M]asculino");
    if(genero == null){
        alert("Error. Debes ingresar algo");
        leerGenero();
    }else{
        if(!(isNaN(genero))){
            alert("Error. No puedes ingresar números.");
            leerGenero();
        }else{
            if(genero != "f" && genero != "m"){
                alert("Solo puedes ingresar ´F´ o ´M´")
                leerGenero();
            }else{
                return genero;
            }
        }
    }
}

function validarCedula(){
    cedula = prompt("ingrese su cedula");
    if(cedula == null){
        alert("Error. Tienes que ingresar algo");
        validarCedula();
    } else{
        cedula = parseFloat(cedula);
        if(isNaN(cedula)){
            alert("Error. Debes escribir solo números");
            validarCedula();
        }else{
            if(cedula<1){
                alert("Error. Ni números negativos ni números decimales");
                validarCedula();
            }else{
                return cedula;
            }
        }
    }
}

function validarDestino(){
    numDestino = parseFloat(prompt("ingresa con el número que corresponda tu destino: 1-Aruba, 2-Mexico, 3-Miami, 4-London, 5-Switzerland"));
    if(numDestino == null){
        alert("Error. Tienes que ingresar algo");
        validarDestino();
    } else{
        if(isNaN(numDestino)){
            alert("Error. Debes escribir solo números");
            validarDestino();
        }else{
            if(numDestino<=0 || numDestino>5){
                alert("Error. Debes ingresar un número del 1 al 4");
                validarDestino();
            }else{
                return numDestino;
            }
        }
    }
}

function registrarUsuario(){
    while(confirm("¿Quiere registrar un usuario?")){
        cantDeRegistrados++;
        nombre = leerNombre();
        cedula = validarCedula();
        genero = leerGenero();
        numDestino = validarDestino();

        switch(numDestino){
            case "1":
                ticketPrice = 25000;
                destinyName = "Aruba";
            break;
        
            case "2":
                ticketPrice = 45700;
                destinyName = "Mexico";
            break;
        
            case "3":
                ticketPrice = 50000;
                destinyName = "Miami";
            break;
        
            case "4":
                ticketPrice = 140000;
                destinyName = "London";
            break;
        
            case "5":
                ticketPrice = 140000 * 1.5 + 10000;
                destinyName = "Switzerland";
            break;
        }
        genero == "f" ? ticketPrice = ticketPrice * 0.85 : ticketPrice = ticketPrice * 0.90;
        cedula%2 ? ticketPrice = ticketPrice - 1500 : ticketPrice = ticketPrice + 3000; 
        totalIngresos = totalIngresos + ticketPrice;

        alert("Nombre de usuario: "+ nombre+ " Nombre del destino escogido: "+ destinyName);
        console.log("Nombre de usuario: "+ nombre);
        console.log("Nombre del destino: "+ destinyName);
    }
    return cantDeRegistrados;
}

var promedioIngresos = totalIngresos / cantDeRegistrados;

function mostrarDatos(){
    alert("Total de pasajeros registrados: "+ cantDeRegistrados);
    alert("Total de ingresos de la agencia: "+ totalIngresos);
    alert("Promedio de ingresos: "+ promedioIngresos);
}