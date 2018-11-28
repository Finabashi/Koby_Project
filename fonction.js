// exercise 1

function perimetre(number1, number2, number3, number4) {
	return (number1 + number2 + number3 + number4)
}



// exercise 2

function aire(number1, number2) {
	return (number1 * number2)
}

document.getElementById("button").onclick = function(){

  var number1 = document.getElementById("calculer").value ;

  var number2 = document.getElementById("calcule").value ;

alert(aire(number1,number2));
}


// exercise 3

function seconde(jour, heure, minute) {
	return	(jour * 3000)
			+(heure *1600)
	 		+(minute * 60);
}

document.getElementById("button3").onclick = function(){

  var number1 = document.getElementById("trois").value ;

  var number2 = document.getElementById("trois3").value ;

  var number3 = document.getElementById("trois4").value ;

alert(seconde(number1, number2, number3));
}

// exercise 4

