var cuadro =   document.getElementById("escena");
var n =        document.getElementById("Npuntos");
var boton =    document.getElementById("b_dibujar");
var borrador = document.getElementById("b_borrar");
var sn =       document.getElementById("seno");
var cs =       document.getElementById("coseno");
var tg =       document.getElementById("tangente");
var negro =    document.getElementById("negro");
var rojo =     document.getElementById("rojo");
var azul =     document.getElementById("azul");
var verde =    document.getElementById("verde");
var amarillo = document.getElementById("amarillo");
//var marron =   document.getElementById("marron");

var lienzo = cuadro.getContext("2d");

var m = cuadro.height/2.0;
var factor = 100; // 100 pixeles = 1 unidad
var i, rad, paso, Color;
var X = [], Y = [];


boton.addEventListener("click", dibujar);
borrador.addEventListener("click", limpiar);

borde("black",cuadro.width,cuadro.height, 5);

////////////////////////////////////////////////////////////////

function dibujar(){
  X = [];
  Y = [];
  paso = cuadro.width/parseInt(n.value);

  if(sn.checked){
    for(i=0 ; i<=cuadro.width ; i=i+paso){
      X.push(i);
      rad = i*Math.PI/180;
      Y.push(m-factor*Math.sin(rad));
    }
  }else if (cs.checked) {
    for(i=0 ; i<=cuadro.width ; i=i+paso){
      X.push(i);
      rad = i*Math.PI/180;
      Y.push(m-factor*Math.cos(rad));
    }
  }else {
    for(i=0 ; i<=cuadro.width ; i=i+paso){
      X.push(i);
      rad = i*Math.PI/180;
      Y.push(m-factor*Math.tan(rad));
    }
  }

  if(negro.checked){
    Color = "black";
  }else if (rojo.checked) {
    Color = "red";
  }else if (azul.checked) {
    Color = "blue";
  }else if (verde.checked) {
    Color = "green";
  }else if (amarillo.checked) {
    Color = "yellow";
  }else {
    Color = "brown";
  }

  graficar(X,Y,Color);
}

function linea(color, x0, y0, x, y, g){
	lienzo.beginPath();
	lienzo.strokeStyle = color;
  lienzo.lineWidth = g;
	lienzo.moveTo(x0,y0);
	lienzo.lineTo(x,y);
	lienzo.stroke();
	lienzo.closePath();
}

function borde(color, a, b, g){
  linea(color, 0, 0, a, 0, g);
  linea(color, a, 0, a, b, g);
  linea(color, a, b, 0, b, g);
  linea(color, 0, b, 0, 0, g);
}

function graficar(a, b, color, g=1){
  nl = a.length - 1; // numero de lineas
  x0 = a[0];
  y0 = b[0];
  for(i=0 ; i<=nl ; i++){
    x = a[i];
    y = b[i];
    linea(color, x0, y0, x, y, g);
    x0 = x;
    y0 = y;
  }
}

function limpiar(){
  X = [];
  Y = [];
  lienzo.clearRect(0,0,cuadro.width,cuadro.height);
  n.value = "";
  borde("black",cuadro.width,cuadro.height, 5);

}
