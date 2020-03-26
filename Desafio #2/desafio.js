//declaración de varibariables
var precio_f, sub_total, discount, taxes, monto_t, procedencia, monto_con_descuento;
var opc_1 = "Nacional";
var opc_2 = "Importada"; 
const franela_1 = 25000;
const franela_2 = 50000;
const franela_3 = 68900;
const franela_4 = 98900;

var nombre = prompt("Ingrese su nombre");
var procedencia = (confirm("¿Desea que la franela nacional o importada?"))? opc_1:opc_2;

//unidades y tipo de franela de forma aletoria
var unidades_f = Math.random()*50;
unidades_f = unidades_f.toFixed(0);
var tipo_franela = Math.random()*4;
tipo_franela = tipo_franela.toFixed(0);

switch(tipo_franela){
	case "1":
		if (procedencia == opc_1){
			precio_f = franela_1* 1.25;
		} else {
			precio_f = franela_1;
		}
		break;
	case "2":
		if (procedencia == opc_2){
			precio_f = franela_2*1.45;
		} else{
			precio_f = franela_2;
		}
		break;
	case "3":
		precio_f = franela_3;
		break;
	case "4":
		precio_f = franela_4;
		break;
	default:
		precio_f = 0;
}

//este es el calculo subtotal
sub_total = precio_f * unidades_f;

if (unidades_f>24){
	//calculo del monto con descuento y el valor descuento
	monto_con_descuento = sub_total * 0.85;
	discount = sub_total * 0.15;
}else{
	if (unidades_f>=6 && unidades_f<=11){
		monto_con_descuento = sub_total * 0.95;
		//recuerda que es 0.05 porque sino 0.5 es 50
		discount = sub_total * 0.05;
	}else{
		if ((unidades_f<6) || (unidades_f>11 && unidades_f<24)){
			monto_con_descuento = sub_total;
			discount = 0;
		}
	}
}

//para sac
taxes = sub_total*0.16 - discount
monto_t = monto_con_descuento + taxes;

//salidas
console.log("Nombre: "+ nombre);
console.log("Tipo de franela: "+ tipo_franela);
console.log("Procedencia de franela: "+ procedencia);
console.log("Cantidad de franelas: "+ unidades_f);
console.log("Precio de franela: "+ precio_f+ " Bs");
console.log("Subtotal: "+ sub_total+ " Bs");
console.log("Descuento: "+ monto_con_descuento+ " Bs");
console.log("Impuesto: "+ taxes+ " Bs");
console.log("Monto a pagar: "+ monto_t+ " Bs");

alert("Nombre: "+ nombre);
alert("Tipo de franela: "+ tipo_franela);
alert("Procedencia de franela: "+ procedencia);
alert("Cantidad de franelas: "+ unidades_f);
alert("Precio de franela: "+ precio_f+ " Bs");
alert("Subtotal: "+ sub_total+ " Bs");
alert("Descuento: "+ monto_con_descuento+ " Bs");
alert("Impuesto: "+ taxes+ " Bs");
alert("Monto a pagar: "+ monto_t+ " Bs");