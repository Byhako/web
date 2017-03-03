var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var fondo = {
  url: "images/tile.png",
  cargaOk: false
}
var vaca = {
  url: "images/vaca.png",
  cargaOk: false
};

var cantidad = aleatorio(5,50);

fondo.imagen = new Image();
fondo.imagen.src = "images/tile.png";
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = "images/vaca.png";
vaca.imagen.addEventListener("load", cargarVaca);


function cargarFondo(){
  fondo.cargaOk = true;
  dibujar();
}
function cargarVaca(){
  vaca.cargaOk = true;
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
}

function aleatorio(min, max){
  var resulado;
  resulado = Math.floor(Math.random()*(max - min + 1)) + min ;
  return resulado;
}
