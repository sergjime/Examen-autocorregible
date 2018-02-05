// fichoro xml que está en el servidor rawgit
var url="https://rawgit.com/sergjime/Examen-autocorregible/master/json/preguntas.json";

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		// función personalizada que gestiona la respuesta a la petición de fichero
		gestionarJson(this.responseText); 
	}
};
xhttp.open("GET", url, true); //url del fichero
xhttp.send();

// función personalizada que gestiona la respuesta a la petición de fichero
function gestionarJson(dadesJson){
	var object = JSON.parse(dadesJson);
	document.getElementsByClassName("negcurs")[0].innerHTML = object.questions.question[0].title;
	document.getElementsByClassName("negcurs")[0].innerHTML = object.questions.question[0].type;
	document.getElementsByClassName("negcurs")[0].innerHTML = object.questions.question[0].answer;
}