var cronometro;
var tiempoTotal = 0;
var tablero;
var movidas = 0;
var xActual = 0;
var yActual = 0;
var inicio = false;

function autoplay(){
	iniciarMatriz(); //Tablero.js
	resetTime(); //
	movimientoInicial();
}

autoplay();