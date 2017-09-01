class billete{

	constructor(valor,cantidad,imagen){
		this.valor = valor;
		this.cantidad = cantidad;
	}
}
///////////////////////////////////////////////////////////////////////////

var caja = [];
caja.push(new billete(10, 10));
caja.push(new billete(20, 10));
caja.push(new billete(50, 10));
caja.push(new billete(100, 10));

var total = 0;
for(var i of caja){
	total = total + (i.valor * i.cantidad);
}

var carita = '<img src="images/triste.png" width="200" height="180">';
var falla = '<img src="images/error.png" width="300" height="250">';
var i100 = '<img src="images/e100.png" width="150" height="70">';
var i50 = '<img src="images/e50.png" width="150" height="70">';
var i20 = '<img src="images/e20.png" width="150" height="70">';
var i10 = '<img src="images/e10.png" width="150" height="70">';

var dinero = document.getElementById('cantidad');
var boton = document.getElementById('solicitar');
var cError = document.getElementById("error");
var efe100 = document.getElementById("efectivo100");
var efe50 = document.getElementById("efectivo50");
var efe20 = document.getElementById("efectivo20");
var efe10 = document.getElementById("efectivo10");
var b100, b50, b20, b10;
var saldo = [];
var i;

boton.addEventListener('click', calcular);


//************************************************************************
function calcular() {
	cError.innerHTML = ' ';
	efe100.innerHTML = ' ';
	efe50.innerHTML = ' ';
	efe20.innerHTML = ' ';
	efe10.innerHTML = ' ';

	var plata = parseInt(dinero.value);

	if(plata%10 != 0){
		cError.innerHTML = 'Valor incorrecto!';
		efe100.innerHTML = falla;
		efe50.innerHTML = ' ';
		efe20.innerHTML = ' ';
		efe10.innerHTML = ' ';

	} else{

	if(plata>total){
		cError.innerHTML = 'No tengo suficiente dinero.';
		efe100.innerHTML = carita;
		efe50.innerHTML = ' ';
		efe20.innerHTML = ' ';
		efe10.innerHTML = ' ';
	} else{
		cError.innerHTML = 'Tu dinero.';

		// BILLETES DE 100
		saldo = catidadBilletes(100,3,plata);
		resto = saldo[0];
		b100 = saldo[1];

		// BILLETES DE 50
		saldo = catidadBilletes(50,2,resto);
		resto = saldo[0];
		b50 = saldo[1];

		// BILLETES DE 20
		saldo = catidadBilletes(20,1,resto);
		resto = saldo[0];
		b20 = saldo[1];

		// BILLETES DE 10
		b10 = resto/10;
		caja[0].cantidad = caja[0].cantidad - b10;
		

		//dinero disponible
		var d100 = caja[3].cantidad;
		var d50  = caja[2].cantidad;
		var d20  = caja[1].cantidad;
		var d10  = caja[0].cantidad;

		if(d10<0 || d20<0 || d50<0 || d100<0){
			cError.innerHTML = 'No tengo suficiente dinero.';
			efe100.innerHTML = carita;
			efe50.innerHTML = ' ';
			efe20.innerHTML = ' ';
			efe10.innerHTML = ' ';
		} else{
		pagar(b100,b50,b20,b10);
		}
	} // end if pata>total
	} // end if valor incorrecto

} // end funcion


//************************************************************************
function pagar(n100,n50,n20,n10){

	var salida = [];
	salida.push(new billete(100, n100));
	salida.push(new billete(50, n50));
	salida.push(new billete(20, n20));
	salida.push(new billete(10, n10));

	var s100 = i100 + ' &nbsp&nbspX&nbsp&nbsp ' + salida[0].cantidad;
	var s50  = i50  + ' &nbsp&nbspX&nbsp&nbsp' + salida[1].cantidad;
	var s20  = i20  + ' &nbsp&nbspX&nbsp&nbsp ' + salida[2].cantidad;
	var s10  = i10  + ' &nbsp&nbspX&nbsp&nbsp ' + salida[3].cantidad;

	if(salida[0].cantidad!=0){
		efe100.innerHTML = s100;
	}
		if(salida[1].cantidad!=0){
		efe50.innerHTML = s50;
	}
		if(salida[2].cantidad!=0){
		efe20.innerHTML = s20;
	}
		if(salida[3].cantidad!=0){
		efe10.innerHTML = s10;
	}

}
//************************************************************************

function catidadBilletes(v,i,plata){
	// v es el valor del billete
	// i es el indice en caja del valor del billete
	// plata es la cantidad de plata a pagar
	cb = Math.floor(plata/v);  // cantidad de billetes
	var resto = plata - cb*v;

	if(resto==0 && cb>0){
		cb = cb - 1;
		resto = v;
	}

	if(cb>caja[i].cantidad){
			cb = caja[i].cantidad;
			resto = plata - cb*v;
	}

	caja[i].cantidad = caja[i].cantidad - cb;

	var saldo1 = [resto,cb];
	return saldo1;
}
//************************************************************************