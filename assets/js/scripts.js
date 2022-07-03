let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
	count++;
	if(count == 11){
		alert("Valor Máximo Positivo");
	 document.getElementById('btn').disabled=true;

	}
	CURRENT_NUMBER.innerHTML = count;
	if(count >= 0){
		CURRENT_NUMBER.style.color = "green";
	}
}

function decrement() {
	count--;
	if(count == -11){
		alert("Valor Máximo Negativo");
		document.getElementById('btn').disabled=false;
	}	
	CURRENT_NUMBER.innerHTML = count;
	if(count < 0){
		CURRENT_NUMBER.style.color = "red";
	}		
}

function eventbnt(){
	if(count ==10){
	TXT.innerHTML = "Valor Máximo Incrementado"
	}
	else if(count == -10){
		TXT.innerHTML = "Valor Máximo Subtraído!"
		}
		else
		TXT.innerHTML = ""
		}

function test() {
	kdowkdpo;
}

CURRENT_NUMBER.addEbentListener("increment", eventbnt())
CURRENT_NUMBER.addEbentListener("decrement", eventbnt())

