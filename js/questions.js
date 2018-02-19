var url = "https://rawgit.com/sergjime/Examen-autocorregible/master/xml/preguntas.xml";
var la_id=null;

window.onload = function(){ 
	//LEER XML de xml/preguntas.xml
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			gestionarXml(this);
		}
	};
	xhttp.open("GET", url, true);
	xhttp.send();
}

function pintarPreguntaTexto(titulo, position){
	document.getElementsByClassName("negcurs")[position].innerHTML = titulo;
}

function ponerPreguntaSelected(titulo,opciones, position){
	document.getElementsByClassName("negcurs")[position].innerHTML = titulo;
	
	var selector = document.getElementsByClassName("selector")[position-2];
	
	for(var i=0; i < opciones.length; i++){
		var label = document.createElement("option");
		label.text= opciones[i];
		label.value=i+1;
		label.id="PR"+i;
		label.name="Pre";
		selector.options.add(label);
	}
}

function ponerPreguntaCheckRadio(titulo,opciones, position){
	var container = document.getElementsByClassName("radiocheckPregunta")[position-6];
	document.getElementsByClassName("negcurs")[position].innerHTML = titulo;
	var tipo = "";
	if(position > 7){
		tipo = "radio";
		if(position == 8){
			la_id = 9;
		}else{
			la_id = 10;
		}
	}else{
		tipo = "checkbox";
		if(position == 6){
			la_id = 7;
		}else{
			la_id = 8;
		}
	}

	for (i = 0; i < opciones.length; i++) { 
		var input = document.createElement("input");
		var label = document.createElement("label");
		label.innerHTML=opciones[i];
		label.setAttribute("for", "PR"+la_id+"_"+i);
		input.type = tipo;
		input.name="Pre"+la_id;
		input.id="PR"+la_id+"_"+i;    
		container.appendChild(input);
		container.appendChild(label);
		container.appendChild(document.createElement("br"));		
	}	
}

// Recuperamos los datos del fichero XML xml/preguntas.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml){
	var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc
	datosXml = xmlDoc;
	
	//input text 1
	var titulo=xmlDoc.getElementsByTagName("title")[0].innerHTML;
	pintarPreguntaTexto(titulo, 0);


	//input text 2
	var titulo=xmlDoc.getElementsByTagName("title")[1].innerHTML;
	pintarPreguntaTexto(titulo, 1);
	
	//selected pregunta 3
	var titulo = xmlDoc.getElementsByTagName("title")[2].innerHTML;
	var opciones = [];
	var nopt = xmlDoc.getElementById("profe003").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe003").getElementsByTagName("option")[i].innerHTML;
	}  
	ponerPreguntaSelected(titulo,opciones, 2);

	//selected pregunta 4
	var titulo = xmlDoc.getElementsByTagName("title")[3].innerHTML;
	var opciones = [];
	var nopt = xmlDoc.getElementById("profe004").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe004").getElementsByTagName("option")[i].innerHTML;
	}  
	ponerPreguntaSelected(titulo,opciones, 3);
	
	//selected pregunta 5
	var titulo = xmlDoc.getElementsByTagName("title")[4].innerHTML;
	var opciones = [];
	var nopt = xmlDoc.getElementById("profe005").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe005").getElementsByTagName("option")[i].innerHTML;
	}  
	ponerPreguntaSelected(titulo,opciones, 4);

	//selected pregunta 6
	var titulo = xmlDoc.getElementsByTagName("title")[5].innerHTML;
	var opciones = [];
	var nopt = xmlDoc.getElementById("profe006").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe006").getElementsByTagName("option")[i].innerHTML;
	}  
	ponerPreguntaSelected(titulo,opciones, 5);
	
	//checkbox pregunta 7
	var titulo = xmlDoc.getElementsByTagName("title")[6].innerHTML;
	var opciones = [];
	var nopt = xmlDoc.getElementById("profe007").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe007").getElementsByTagName("option")[i].innerHTML;
	}  
	ponerPreguntaCheckRadio(titulo,opciones, 6);

	//checkbox pregunta 8
	var titulo = xmlDoc.getElementsByTagName("title")[7].innerHTML;
	var opciones = [];
	var nopt = xmlDoc.getElementById("profe008").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe008").getElementsByTagName("option")[i].innerHTML;
	}  
	ponerPreguntaCheckRadio(titulo,opciones, 7);
	
	//Radio pregunta 9
	var titulo = xmlDoc.getElementsByTagName("title")[8].innerHTML;
	var opciones = [];
	var nopt = xmlDoc.getElementById("profe009").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe009").getElementsByTagName("option")[i].innerHTML;
	}  
	ponerPreguntaCheckRadio(titulo,opciones, 8);

	//Radio pregunta 10
	var titulo = xmlDoc.getElementsByTagName("title")[9].innerHTML;
	var opciones = [];
	var nopt = xmlDoc.getElementById("profe010").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe010").getElementsByTagName("option")[i].innerHTML;
	}  
	ponerPreguntaCheckRadio(titulo,opciones, 9);
}