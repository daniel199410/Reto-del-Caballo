function resetTime(){
	clearInterval(cronometro);
}

function tiempoInicio(){
	var seg = 0;
	var minu = 0;
	var segundos = document.getElementById("seg");
	var minutos	= document.getElementById("min");
	
	cronometro = setInterval(function(){
		tiempoTotal++;
		seg++;
		if(seg == 60){
			seg = 0;
			minu++;
			if(minu < 10){
				minutos.innerHTML = "0" + minu;
			}else{
				minutos.innerHTML = minu;
			}
		}
		if(seg < 10){
			segundos.innerHTML = "0" + seg;
		}else{
			segundos.innerHTML = seg;
		}
	},1000);
}