function reiniciarTablero(){
	for(i = 0; i < 8; i++){
		for(j = 0; j < 8; j++){
			tablero[i][j] = 0;
		}
	}
}

function iniciarMatriz(){
	tablero = new Array(8);
	for(var i = 0; i < 8; i++){
		tablero[i] = new Array(8);
	}
	reiniciarTablero();
}