var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var ancho = d.width;
var texto = document.getElementById("tb_lineas");
var boton = document.getElementById("b_dibujar");

boton.addEventListener("click", dibujo);

function linea(color, x0, y0, x, y){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
	lienzo.moveTo(x0,y0);
	lienzo.lineTo(x,y);
	lienzo.stroke();
	lienzo.closePath();
}

function dibujo(){
	var lineas = parseInt(texto.value);
	var paso = ancho/lineas;
	var con = 0;
	var x0 = paso;
	var y = 1;

	while(con<lineas){
		linea("#FAA",1,y,x0,299);
		x0 = x0 + paso;
		y = y + paso;
		con++;
	}

	linea("red",1,1,1,299);
	linea("red",1,299,299,299);
}

//****************  TECLADO  **********************

var cuadro = document.getElementById("dibuja_teclado");
var papel = cuadro.getContext("2d");
var teclas = {LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40};
var x1 = 200;
var y1 = 200;

document.addEventListener("keyup", teclado);

// dibujo del borde
dibujaLinea("red", 0, 0, 400, 0);
dibujaLinea("red", 400, 0, 400, 400);
dibujaLinea("red", 400, 400, 0, 400);
dibujaLinea("red", 0, 400, 0, 0);

dibujaLinea("blue", 199, 199, 201, 201); // Punto inicial

function dibujaLinea(color, x0, y0, x, y){
	papel.beginPath();
	papel.strokeStyle = color;
	papel.lineWidth = 3;
	papel.moveTo(x0,y0);
	papel.lineTo(x,y);
	papel.stroke();
	papel.closePath();
}

function teclado(evento){
	var paso = 10;

	switch (evento.keyCode) {
		case teclas.UP:
			dibujaLinea("blue", x1, y1, x1, y1-paso);
			y1 = y1 - paso;
			break;
		case teclas.DOWN:
			dibujaLinea("blue", x1, y1, x1, y1+paso);
			y1 = y1 + paso;
			break;
		case teclas.LEFT:
			dibujaLinea("blue", x1, y1, x1-paso, y1);
			x1 = x1 - paso;
			break;
		case teclas.RIGHT:
			dibujaLinea("blue", x1, y1, x1+paso, y1);
			x1 = x1 + paso;
			break;
		default:

	}

}

//****************  MOUSE  **********************
var estado = 0;          // estado del click
var colorLinea = "blue";
var area = document.getElementById('raton');
var papel2 = raton.getContext("2d");
var x2;
var y2;

document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

// dibujo del borde

dibujaRaton("red", 0, 0, 300, 0);
dibujaRaton("red", 300, 0, 300, 300);
dibujaRaton("red", 300, 300, 0, 300);
dibujaRaton("red", 0, 300, 0, 0);

// Funcion para mousedown

function presionarMouse(pinchar){
  estado = 1;         //click presionado
  x2 = pinchar.layerX;
  y2 = pinchar.layerY;
}

// Funcion para mousemove

function dibujarMouse(pinchar){
  if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
    dibujaRaton(colorLinea, x2, y2, pinchar.layerX, pinchar.layerY);
  }

  x2 = pinchar.layerX;
  y2 = pinchar.layerY;
}

// Funcion para mouseup

function soltarMouse(pinchar){
  estado = 0;         // click suelto
  x2 = pinchar.layerX;
  y2 = pinchar.layerY;
}

function dibujaRaton(color, x0, y0, x, y){
	papel2.beginPath();
	papel2.strokeStyle = color;
	papel2.lineWidth = 3;
	papel2.moveTo(x0,y0);
	papel2.lineTo(x,y);
	papel2.stroke();
	papel2.closePath();
}
