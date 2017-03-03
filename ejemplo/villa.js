var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var cantidad = aleatorio(5,50);
var fondo = {cargaOk: false};
var vaca = {cargaOk: false};
var pollo = {cargaOk: false};


fondo.imagen = new Image();
fondo.imagen.src = "images/tile.png";
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = "images/vaca.png";
vaca.imagen.addEventListener("load", cargarVaca);

pollo.imagen = new Image();
pollo.imagen.src = "images/pollo.png";
pollo.imagen.addEventListener("load", cargarPollo);

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

function dibujar() {
  if(fondo.cargaOk){
    papel.drawImage(fondo.imagen, 0, 0);}

  if(vaca.cargaOk){
    for (var v=0; v<cantidad; v++) {
      var x = aleatorio(0, 6);
      var y = aleatorio(0, 6);
      x = x * 80;
      y = y * 80;
      papel.drawImage(vaca.imagen, x, y);
    }
  }

  if(pollo.cargaOk){
    var x = aleatorio(0, 6);
    var y = aleatorio(0, 6);
    x = x * 80;
    y = y * 80;
    papel.drawImage(pollo.imagen, x, y);
  }
}

function aleatorio(min, max){
  var resulado;
  resulado = Math.floor(Math.random()*(max - min + 1)) + min ;
  return resulado;
}
