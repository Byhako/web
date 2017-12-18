var display = document.getElementById('display');
var uno = document.getElementById('n1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var cero = document.getElementById('0');
var suma = document.getElementById('plus');
var resta = document.getElementById('res');
var dividir = document.getElementById('div');
var mul = document.getElementById('x');
var igual = document.getElementById('eq');
var dot = document.getElementById('dot');

var acumulador = '';
var numeros = '';
var operacion;

uno.addEventListener('click', Funo);
dos.addEventListener('click', Fdos);
tres.addEventListener('click', Ftres);
cuatro.addEventListener('click', Fcuatro);
cinco.addEventListener('click', Fcinco);
seis.addEventListener('click', Fseis);
siete.addEventListener('click', Fsiete);
ocho.addEventListener('click', Focho);
nueve.addEventListener('click', Fnueve);
cero.addEventListener('click', Fcero);
dot.addEventListener('click', Fdot);

suma.addEventListener('click', Fsuma);
resta.addEventListener('click', Fresta);
dividir.addEventListener('click', Fdividir);
mul.addEventListener('click', Fmult);
igual.addEventListener('click', Figual);


function Funo(){ 
  numeros = numeros + '1';
  display.innerHTML = numeros;
}

function Fdos(){ 
  numeros = numeros + '2';
  display.innerHTML = numeros;
}
function Ftres(){
  numeros = numeros + '3';
  display.innerHTML = numeros;
 }
function Fcuatro(){ 
  numeros = numeros + '4';
  display.innerHTML = numeros;
}
function Fcinco(){ 
  numeros = numeros + '5';
  display.innerHTML = numeros;
}
function Fseis(){ 
  numeros = numeros + '6';
  display.innerHTML = numeros;
}
function Fsiete(){ 
  numeros = numeros + '7';
  display.innerHTML = numeros;
}
function Focho(){ 
  numeros = numeros + '8';
  display.innerHTML = numeros;
}
function Fnueve(){ 
  numeros = numeros + '9';
  display.innerHTML = numeros;
}
function Fcero(){ 
  numeros = numeros + '0';
  display.innerHTML = numeros;
}
function Fdot(){ 
  numeros = numeros + '.';
  display.innerHTML = numeros;
}

function Fsuma(){
  operacion = 'suma';
  if(acumulador==''){acumulador = Number(numeros);}
  else{Figual();}
  numeros = '';
}
function Fresta(){
  operacion = 'resta';
  if(acumulador==''){acumulador = Number(numeros);}
  else{Figual();}
  numeros = '';
}
function Fmult(){
  operacion = 'mult';
  if(acumulador==''){acumulador = Number(numeros);}
  else{Figual();}
  numeros = '';
}
function Fdividir(){
  operacion = 'dividir';
  if(acumulador==''){acumulador = Number(numeros);}
  else{Figual();}
  numeros = '';
}

function Figual(){
  if(operacion == 'suma'){
    acumulador = Number(acumulador) + Number(numeros);
    display.innerHTML = '';
    display.innerHTML = acumulador;  
  }
  if(operacion == 'resta'){
    acumulador = Number(acumulador) - Number(numeros);
    display.innerHTML = '';
    display.innerHTML = acumulador;  
  }
  if(operacion == 'mult'){
    acumulador = Number(acumulador) * Number(numeros);
    display.innerHTML = '';
    display.innerHTML = acumulador;  
  }
  if(operacion == 'dividir'){
    acumulador = Number(acumulador) / Number(numeros);
    display.innerHTML = '';
    display.innerHTML = acumulador;  
  }
  numeros=0;
}
