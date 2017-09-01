class Pakiman{

	constructor(n, v, a){
		this.nombre = n;
		this.vida = v;
		this.ataque = a;
		this.imagen = new Image();
		this.imagen.src = imagenes[this.nombre];
		this.tipo = 'tierra';
	}

	hablar(){
		alert('Mi nombre es ' + this.nombre);
	}

	mostrar(){
		document.body.appendChild(this.imagen);
		document.write('</br><strong>' + this.nombre +'</strong></br>');
		document.write('Vida: '+ this.vida + '</br>');
		document.write('Ataque: '+ this.ataque + '<hr/>');
	}
}
///////////////////////////////////////////////////////////////////////////

var imagenes = {};
imagenes['Paola'] = 'images/vaca.png';
imagenes['Claudio'] = 'images/pollo.png';
imagenes['Andres'] = 'images/cerdo.png';

var coleccion = [];
coleccion.push(new Pakiman('Paola', 100, 30));
coleccion.push(new Pakiman('Claudio', 80, 50));
coleccion.push(new Pakiman('Andres', 120, 40));

for (var p of coleccion){
	p.mostrar();
}

for (var i in imagenes){
	console.log(i);
}