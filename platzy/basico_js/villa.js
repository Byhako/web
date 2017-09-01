var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var cantidad = aleatorio(5,50);
var fondo = {cargaOk: false};
var vaca = {cargaOk: false};
var pollo = {cargaOk: false};
var teclas = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};
var x1 = aleatorio(0, 6) * 70;
var y1 = aleatorio(0, 6) * 70;
var px=[], py=[];

for (var v=0; v<cantidad; v++) {
  var x = aleatorio(0, 6) * 70;
  var y = aleatorio(0, 6) * 70;
  px.push(x);
  py.push(y);
}

fondo.imagen = new Image();
fondo.imagen.src = "images/tile.png";
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = "images/vaca.png";
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = "images/pollo.png";
pollo.imagen.addEventListener("load", cargarPollo);

document.addEventListener("keyup", teclado);

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

function cargarFondo(){
  fondo.cargaOk = true;
  dibujar();
}
function cargarVaca(){
  vaca.cargaOk = true;
  dibujar();
}
function cargarPollo(){
  pollo.cargaOk = true;
  dibujar();
}
//************************************************************************
function dibujar() {
  if(fondo.cargaOk){
    papel.drawImage(fondo.imagen, 0, 0);}

  if(vaca.cargaOk){
    for (var v=0; v<cantidad; v++) {
      papel.drawImage(vaca.imagen, px[v], py[v]);
    }
  }

  if(pollo.cargaOk){
    papel.drawImage(pollo.imagen, x1, y1);
  }
}
//************************************************************************
function aleatorio(min, max){
  var resulado;
  resulado = Math.floor(Math.random()*(max - min + 1)) + min ;
  return resulado;
}
//************************************************************************
function teclado(evento){
	var paso = 10;

	switch (evento.keyCode) {
		case teclas.UP:
			y1 = y1 - paso;
			break;
		case teclas.DOWN:
      y1 = y1 + paso;
			break;
		case teclas.LEFT:
			x1 = x1 - paso;
			break;
		case teclas.RIGHT:
			x1 = x1 + paso;
			break;
		default:
	}
  dibujar();
}
//************************************************************************