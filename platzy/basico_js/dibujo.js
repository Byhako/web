// Dibujo malla con lineas
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

boton.addEventListener("click", dibujoPorClick );

// Dibujo con teclado
var t = document.getElementById('area');
var teclado = t.getContext('2d');
var teclas = {UP:38, DOWN:40, LEFT:37, RIGHT:39};
var x = 150;
var y = 150;

document.addEventListener('keyup',dibujarTeclado);

dibujarLinea('red',149,149,151,151,teclado);   // Punto central
dibujarLinea('red',149,151,151,149,teclado);   // Punto central

// Dibujo con mouse
var r = document.getElementById('raton');
var raton = r.getContext("2d");
var estado = 0;          // estado del click
var colorLinea = "blue";
var x2;
var y2;

document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

// Borrador
var borraTeclado = document.getElementById('borrar');
var borraMouse = document.getElementById('borrarm');
borraTeclado.addEventListener('click',borradorT);
borraMouse.addEventListener('click',borradorM);


// Dibujo los bordes
dibujarLinea("black", 1,1,1,299, lienzo);
dibujarLinea("black", 1,299,299,299, lienzo);
dibujarLinea("black", 299,299,299,1, lienzo);
dibujarLinea("black", 299,1,1,1, lienzo);
console.log('Borde1')
dibujarLinea("black", 1,1,1,299, teclado);
dibujarLinea("black", 1,299,299,299, teclado);
dibujarLinea("black", 299,299,299,1, teclado);
dibujarLinea("black", 299,1,1,1, teclado);
console.log('Borde2')
dibujarLinea("black", 1,1,1,299, raton);
dibujarLinea("black", 1,299,299,299, raton);
dibujarLinea("black", 299,299,299,1, raton);
dibujarLinea("black", 299,1,1,1, raton);
console.log('Borde3')

///////////////////////////////////////////////////////////////

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 1;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function graficar(color,x0,y0,n){
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(x0[0], y0[0]);
  for(i=1 ; i<n ; i++){
    lienzo.lineTo(x0[i], y0[i]);
    lienzo.stroke();
  }
  lienzo.closePath();
}

function dibujoPorClick(){
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "#FAA";
  var espacio = ancho / lineas;

  lienzo.clearRect(0, 0, d.width, d.height);

  for(l=0 ; l<lineas ; l++)  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300, lienzo);
    dibujarLinea(colorcito, 300, yi, 300-xf, 300, lienzo);
    dibujarLinea(colorcito, yi, 0, 0, 300-xf, lienzo);
    dibujarLinea(colorcito, 300-yi, 0, 300, 300-xf, lienzo);
    console.log("Linea " + l);
  }
// Datos para graficar el seno.
  xg = [ 0.        ,    3.03030303,    6.06060606,    9.09090909,
         12.12121212,   15.15151515,   18.18181818,   21.21212121,
         24.24242424,   27.27272727,   30.3030303 ,   33.33333333,
         36.36363636,   39.39393939,   42.42424242,   45.45454545,
         48.48484848,   51.51515152,   54.54545455,   57.57575758,
         60.60606061,   63.63636364,   66.66666667,   69.6969697 ,
         72.72727273,   75.75757576,   78.78787879,   81.81818182,
         84.84848485,   87.87878788,   90.90909091,   93.93939394,
         96.96969697,  100.        ,  103.03030303,  106.06060606,
        109.09090909,  112.12121212,  115.15151515,  118.18181818,
        121.21212121,  124.24242424,  127.27272727,  130.3030303 ,
        133.33333333,  136.36363636,  139.39393939,  142.42424242,
        145.45454545,  148.48484848,  151.51515152,  154.54545455,
        157.57575758,  160.60606061,  163.63636364,  166.66666667,
        169.6969697 ,  172.72727273,  175.75757576,  178.78787879,
        181.81818182,  184.84848485,  187.87878788,  190.90909091,
        193.93939394,  196.96969697,  200.        ,  203.03030303,
        206.06060606,  209.09090909,  212.12121212,  215.15151515,
        218.18181818,  221.21212121,  224.24242424,  227.27272727,
        230.3030303 ,  233.33333333,  236.36363636,  239.39393939,
        242.42424242,  245.45454545,  248.48484848,  251.51515152,
        254.54545455,  257.57575758,  260.60606061,  263.63636364,
        266.66666667,  269.6969697 ,  272.72727273,  275.75757576,
        278.78787879,  281.81818182,  284.84848485,  287.87878788,
        290.90909091,  293.93939394,  296.96969697,  300.];
  
  yg = [150.        ,  155.55300191,  138.96270127,  166.38503544,
        128.46995338,  176.4086751 ,  119.03944046,  185.12938129,
        111.13643883,  192.11689766,  105.15086147,  197.02647883,
        101.37802079,  199.61589917,  100.00405865,  199.75740361,
        101.09676269,  197.44401069,  104.6022218 ,  192.78985705,
        110.347486  ,  186.02456617,  118.04909929,  177.48191945,
        127.32708466,  167.58338825,  137.7236911 ,  156.81733965,
        148.72597782,  145.71494173,  159.79112139,  134.82395713,
        170.3731972 ,  124.68171794,  179.95011388,  115.78861515,
        188.04937196,  108.58341068,  194.27137569,  103.42159007,
        198.30914802,  100.55782377,  199.96347606,  100.13340234,
        199.15273968,  102.16926561,  195.91693844,  106.56496953,
        190.41571814,  113.1036418 ,  182.92049429,  121.46268181,
        173.8010612 ,  131.22967685,  163.50734734,  141.92274949,
        152.54721706,  153.01433209,  141.46141389,  163.9571956 ,
        130.79688174,  174.21144837,  121.07978015,  183.27117296,
        112.78952493,  190.68938677,  106.33513514,  196.10009494,
        102.03505312,  199.2363476 ,  100.10143343,  199.94341042,
        100.6296757 ,  198.18639879,  103.59371787,  194.051999  ,
        108.84732201,  187.74419127,  116.13128933,  179.57418598,
        125.08624835,  169.94506937,  135.27038532,  159.33191633,
        146.18124212,  148.25835146,  157.28050623,  137.27071489,
        168.02056962,  126.91110723,  177.87154624,  117.69064385,
        186.34741524,  110.06423778,  193.02999988,  104.40815553,
        197.5895993 ,  101.00145307,  199.80125503,  100.012208];
  
  graficar('blue',xg,yg,100);

  dibujarLinea("black", 1,1,1,299, lienzo);
  dibujarLinea("black", 1,299,299,299, lienzo);
  dibujarLinea("black", 299,299,299,1, lienzo);
  dibujarLinea("black", 299,1,1,1, lienzo);
}

//******************************************************************

function dibujarTeclado(evento){
  switch(evento.keyCode){
    case teclas.DOWN:
      dibujarLinea('blue',x,y,x,y+10,teclado);
      y = y + 10;
      if(y>299){y=1;}
    break;

    case teclas.UP:
      dibujarLinea('blue',x,y,x,y-10,teclado);
      y = y - 10;
      if(y<2){y=299;}
    break;

    case teclas.LEFT:
      dibujarLinea('blue',x,y,x-10,y,teclado);
      x = x - 10;
      if(x<2){x=299;}
    break;

    case teclas.RIGHT:
      dibujarLinea('blue',x,y,x+10,y,teclado);
      x = x + 10;
      if(x>299){x=1;}
    break;

    default:
      console.log('Otra tecla');
    break;
  }
}

//******************************************************************

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
  raton.beginPath();
  raton.strokeStyle = color;
  raton.lineWidth = 3;
  raton.moveTo(x0,y0);
  raton.lineTo(x,y);
  raton.stroke();
  raton.closePath();
}

//******************************************************************

function borradorT(){
  teclado.clearRect(0, 0, t.width, t.height);
  dibujarLinea("black", 1,1,1,299, teclado);
  dibujarLinea("black", 1,299,299,299, teclado);
  dibujarLinea("black", 299,299,299,1, teclado);
  dibujarLinea("black", 299,1,1,1, teclado);
  dibujarLinea('red',149,149,151,151,teclado);
  dibujarLinea('red',149,151,151,149,teclado);
  x = 150;
  y = 150;
}

function borradorM(){
  raton.clearRect(0, 0, r.width, r.height);
  dibujarLinea("black", 1,1,1,299, raton);
  dibujarLinea("black", 1,299,299,299, raton);
  dibujarLinea("black", 299,299,299,1, raton);
  dibujarLinea("black", 299,1,1,1, raton);

}