function movimientoInicial(){
	var x = Math.round(Math.random() * 7);
	var y = Math.round(Math.random() * 7);
	tablero[x][y] = 1;
	var opc = opciones(x, y);
	var op = document.getElementById("opciones");
	op.innerHTML = opc;
	seleccionarCasilla(x, y);
	xActual = x;
	yActual = y;
}

function movimientoCorrecto(x, y){
	if((xActual - x == 2 && yActual - y == 1 || xActual - x == 2 && yActual - y == -1 || 
	xActual - x == -2 && yActual - y == 1 || xActual - x == -2 && yActual - y == -1 ||
	yActual - y == 2 && xActual - x == 1 || yActual - y == 2 && xActual - x == -1 ||
	yActual - y == -2 && xActual - x == 1 || yActual - y == -2 && xActual - x == -1) && tablero[x][y]==0)
		return true;
}

function opciones(x, y){
	var opciones = 0;
	if(x + 2 >= 0 && x + 2 < 8 && y - 1 >= 0 && y - 1 < 8)
		if(tablero[x + 2][y - 1] == 0)
			opciones++;
	if(x + 2 >= 0 && x + 2 < 8 && y + 1 >= 0 && y + 1 < 8)		
		if(tablero[x + 2][y + 1] == 0)
			opciones++;
	if(x + 1 >= 0 && x + 1 < 8 && y + 2 >= 0 && y + 2 < 8)
		if(tablero[x + 1][y + 2] == 0)
			opciones++;
	if(x - 1 >= 0 && x - 1 < 8 && y + 2 >= 0 && y + 2 < 8)
		if(tablero[x - 1][y + 2] == 0)
			opciones++;
	if(x - 2 >= 0 && x - 2 < 8 && y + 1 >= 0 && y + 1 < 8)
		if(tablero[x - 2][y + 1] == 0)
			opciones++;
	if(x - 2 >= 0 && x - 2 < 8 && y - 1 >= 0 && y - 1 < 8)
		if(tablero[x - 2][y - 1] == 0)
			opciones++;
	if(x - 1 >= 0 && x - 1 < 8 && y - 2 >= 0 && y - 2 < 8)
		if(tablero[x - 1][y - 2] == 0)
			opciones++;
	if(x + 1 >= 0 && x + 1 < 8 && y - 2 >= 0 && y - 2 < 8)
		if(tablero[x + 1][y - 2] == 0)
			opciones++;	
	return opciones;
}