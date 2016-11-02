function pintarCasilla(x, y, color){
	var celda = document.getElementById("c" + x + y);
	celda.style.background = color;
}

function pintarCaballo(x, y, color){
	var celda = document.getElementById("c" + x + y);
	celda.style.background = color;
	celda.innerHTML = "<img src='img/caballo.png' style='width:100%;height:100%'>";
}

function pintarOpcion(x, y, color){
	var celda = document.getElementById("c" + x + y);
	celda.style.background = color;
}

function seleccionarCasilla(x, y){
	pintarCasilla(x, y, "#b09b2a");
	pintarCaballo(x, y, "#b09b2a");
}

function checkCell(x, y){
	if(inicio == false){
		tiempoInicio();
		inicio = true;
	}
	var h4 = document.getElementById("header");
	var p = document.getElementById("felicitaciones");
	if(movimientoCorrecto(x, y)){
		tablero[x][y] = 1;
		if((xActual + yActual) % 2 == 0)
			pintarCasilla(xActual, yActual, "#c0814c");
		else
			pintarCasilla(xActual, yActual, "#d8b58b");
		pintarCasilla(x, y, "#b09b2a");
		pintarCaballo(x, y, "#b09b2a");
		xActual = x;
		yActual = y;
		movidas++;
		if(movidas == 63){
			var segundos = document.getElementById("seg").innerHTML;
			var minutos	= document.getElementById("min").innerHTML;
			h4.innerHTML = "¡Has ganado!";
			p.innerHTML = "Felicitaciones, lo has logrado en " + minutos + " minutos y " + segundos + " segundos ";
			$('#modal1').openModal();
		}
		var opc = opciones(xActual, yActual);
		if(opc > 0){
			var op = document.getElementById("opciones");
			op.innerHTML = opc;
			var mov = document.getElementById("movidas");
			mov.innerHTML = movidas;
		}else{
			var segundos = document.getElementById("seg").innerHTML;
			var minutos	= document.getElementById("min").innerHTML;
			var porcentaje = movidas * 100 / 64;
			h4.innerHTML = "Has perdido";
			p.innerHTML = "Has logrado " + movidas + " movimientos " + "(" + Math.round(porcentaje) + "%) en " + minutos + " minutos y " + segundos + " segundos " + "<br> Ánimo, sigue intentándolo :)";
			$('#modal1').openModal();
		}
	}
}