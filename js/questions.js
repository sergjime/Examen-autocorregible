var url = "https://rawgit.com/sergjime/Examen-autocorregible/master/xml/dtd/questions.xml";
var la_id=null;
var xmlDoc;

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

window.onsubmit = function(){
	
	var correctas = 0;
	var fallidas = 0;
	
	var pregunta1 = document.getElementById('formulario').p1texto.value;
	var pregunta2 = document.getElementById('formulario').p2texto.value;
	var pregunta3 = document.getElementById('formulario').p3selector;
	var pregunta4 = document.getElementById('formulario').p4selector;
	var pregunta5 = document.getElementById('formulario').p5multiple;
	var pregunta6 = document.getElementById('formulario').p6multiple;
	var pregunta7 = document.getElementById('formulario').Pre7;
	var pregunta8 = document.getElementById('formulario').Pre8;
	var pregunta9 = document.getElementById('formulario').Pre9;
	var pregunta10 = document.getElementById('formulario').Pre10;
	
	if(pregunta1.length == 0){
		alert("No puede dejar la pregunta 1 sin responder");
		document.getElementById('formulario').p1texto.focus();
		return false;
	}else{
		var respuesta=xmlDoc.getElementsByTagName("answer")[0].innerHTML;
		if(pregunta1 == respuesta){
			correctas++;
			document.getElementsByClassName("main_correcta")[0].style.display = "block";
			document.getElementsByClassName("main_fallida")[0].style.display = "none";
		}else{
			fallidas++;
			document.getElementsByClassName("main_fallida")[0].style.display = "block";
			document.getElementsByClassName("main_correcta")[0].style.display = "none";
		}
	}
	if(pregunta2.length == 0){
		alert("No puede dejar la pregunta 2 sin responder");
		document.getElementById('formulario').p2texto.focus();
		return false;
	}else{
		var respuesta=xmlDoc.getElementsByTagName("answer")[1].innerHTML;
		if(pregunta2 == respuesta){
			correctas++;
			document.getElementsByClassName("main_correcta")[1].style.display = "block";
			document.getElementsByClassName("main_fallida")[1].style.display = "none";
		}else{
			fallidas++;
			document.getElementsByClassName("main_fallida")[1].style.display = "block";
			document.getElementsByClassName("main_correcta")[1].style.display = "none";
		}
	}
	
	
	if(pregunta3.selectedIndex == 0){
		alert("Selecciona una opción en la pregunta 3");
		document.getElementById('formulario').p3selector.focus();
		return false;
	}else{
		var respuesta=xmlDoc.getElementsByTagName("answer")[2].innerHTML;
		if(pregunta3.selectedIndex-1 == respuesta){
			correctas++;
			document.getElementsByClassName("main_correcta")[2].style.display = "block";
			document.getElementsByClassName("main_fallida")[2].style.display = "none";
		}else{
			fallidas++;
			document.getElementsByClassName("main_fallida")[2].style.display = "block";
			document.getElementsByClassName("main_correcta")[2].style.display = "none";
		}
	}
	if(pregunta4.selectedIndex == 0){
		alert("Selecciona una opción en la pregunta 4");
		document.getElementById('formulario').p4selector.focus();
		return false;
	}else{
		var respuesta=xmlDoc.getElementsByTagName("answer")[3].innerHTML;
		if(pregunta4.selectedIndex-1 == respuesta){
			correctas++;
			document.getElementsByClassName("main_correcta")[3].style.display = "block";
			document.getElementsByClassName("main_fallida")[3].style.display = "none";
		}else{
			fallidas++;
			document.getElementsByClassName("main_fallida")[3].style.display = "block";
			document.getElementsByClassName("main_correcta")[3].style.display = "none";
		}
	}
	
	var seleccionadas5 = [];
	var opciones5 = pregunta5.getElementsByTagName('option').length;
	var pos5 = 0;
	for (j =0; j < opciones5; j++) {
		if(pregunta5[j].selected){
			seleccionadas5[pos5] = pregunta5[j].value;
			pos5++;
		}
	}
	if(seleccionadas5.length == 0 || seleccionadas5.length == 1 || seleccionadas5[0] == -1){
		alert("Selecciona más de una opción válida en la pregunta 5");
		pregunta5.focus();
		return false;
	}else{
		var nres = xmlDoc.getElementById("profe005").getElementsByTagName("answer").length;
		var respuestas=[];
		for (i = 0; i < nres; i++) {
			respuestas[i]=xmlDoc.getElementById("profe005").getElementsByTagName("answer")[i].innerHTML;
		}	
		var contador = 0;
		if(seleccionadas5.length == respuestas.length){
			for(var i = 0; i < seleccionadas5.length; i++){
				if(seleccionadas5[i]-1 == respuestas[i]){
					contador++;
				}
			}
			if(contador == seleccionadas5.length){
				correctas++;
				document.getElementsByClassName("main_correcta")[4].style.display = "block";
				document.getElementsByClassName("main_fallida")[4].style.display = "none";
			}else{
				fallidas++;
				document.getElementsByClassName("main_fallida")[4].style.display = "block";
				document.getElementsByClassName("main_correcta")[4].style.display = "none";
			}
		}else{
			fallidas++;
			document.getElementsByClassName("main_fallida")[4].style.display = "block";
			document.getElementsByClassName("main_correcta")[4].style.display = "none";
		}	
	}
	
	
	var seleccionadas6 = [];
	var opciones6 = pregunta6.getElementsByTagName('option').length;
	var pos6 = 0;
	for (j =0; j < opciones6; j++) {
		if(pregunta6[j].selected){
			seleccionadas6[pos6] = pregunta6[j].value;
			pos6++;
		}
	}
	if(seleccionadas6.length == 0 || seleccionadas6.length == 1 || seleccionadas6[0] == -1){
		alert("Selecciona más de una opción válida en la pregunta 6");
		pregunta6.focus();
		return false;
	}else{
		var nres = xmlDoc.getElementById("profe006").getElementsByTagName("answer").length;
		var respuestas=[];
		for (i = 0; i < nres; i++) {
			respuestas[i]=xmlDoc.getElementById("profe006").getElementsByTagName("answer")[i].innerHTML;
		}	
		var contador = 0;
		if(seleccionadas6.length == respuestas.length){
			for(var i = 0; i < seleccionadas6.length; i++){
				if(seleccionadas6[i]-1 == respuestas[i]){
					contador++;
				}
			}
			if(contador == seleccionadas6.length){
				correctas++;
				document.getElementsByClassName("main_correcta")[5].style.display = "block";
				document.getElementsByClassName("main_fallida")[5].style.display = "none";
			}else{
				fallidas++;
				document.getElementsByClassName("main_fallida")[5].style.display = "block";
				document.getElementsByClassName("main_correcta")[5].style.display = "none";
			}
		}else{
			fallidas++;
			document.getElementsByClassName("main_fallida")[5].style.display = "block";
			document.getElementsByClassName("main_correcta")[5].style.display = "none";
		}	
	}
	
	
	var seleccionadas7 = [];
	var pos7 = 0;
	for (j =0; j < pregunta7.length; j++) {
		if(pregunta7[j].checked){
			seleccionadas7[pos7] = pregunta7[j].value;
			pos7++;
		}
	}
	if(seleccionadas7.length == 0 || seleccionadas7.length == 1){
		alert("Selecciona más de una opción en la pregunta 7");
		return false;
	}else{
		var nres = xmlDoc.getElementById("profe007").getElementsByTagName("answer").length;
		var respuestas=[];
		for (i = 0; i < nres; i++) {
			respuestas[i]=xmlDoc.getElementById("profe007").getElementsByTagName("answer")[i].innerHTML;
		}	
		var contador = 0;
		if(seleccionadas7.length == respuestas.length){
			for(var i = 0; i < seleccionadas7.length; i++){
				if(seleccionadas7[i] == respuestas[i]){
					contador++;
				}
			}
			if(contador == seleccionadas7.length){
				correctas++;
				document.getElementsByClassName("main_correcta")[6].style.display = "block";
				document.getElementsByClassName("main_fallida")[6].style.display = "none";
			}else{
				fallidas++;
				document.getElementsByClassName("main_fallida")[6].style.display = "block";
				document.getElementsByClassName("main_correcta")[6].style.display = "none";
			}
		}else{
			fallidas++;
			document.getElementsByClassName("main_fallida")[6].style.display = "block";
			document.getElementsByClassName("main_correcta")[6].style.display = "none";
		}	
	}
	
	var seleccionadas8 = [];
	var pos8 = 0;
	for (j =0; j < pregunta8.length; j++) {
		if(pregunta8[j].checked){
			seleccionadas8[pos8] = pregunta8[j].value;
			pos8++;
		}
	}
	if(seleccionadas8.length == 0 || seleccionadas8.length == 1){
		alert("Selecciona más de una opción en la pregunta 8");
		return false;
	}else{
		var nres = xmlDoc.getElementById("profe008").getElementsByTagName("answer").length;
		var respuestas=[];
		for (i = 0; i < nres; i++) {
			respuestas[i]=xmlDoc.getElementById("profe008").getElementsByTagName("answer")[i].innerHTML;
		}	
		var contador = 0;
		if(seleccionadas8.length == respuestas.length){
			for(var i = 0; i < seleccionadas8.length; i++){
				if(seleccionadas8[i] == respuestas[i]){
					contador++;
				}
			}
			if(contador == seleccionadas8.length){
				correctas++;
				document.getElementsByClassName("main_correcta")[7].style.display = "block";
				document.getElementsByClassName("main_fallida")[7].style.display = "none";
			}else{
				fallidas++;
				document.getElementsByClassName("main_fallida")[7].style.display = "block";
				document.getElementsByClassName("main_correcta")[7].style.display = "none";
			}
		}else{
			fallidas++;
			document.getElementsByClassName("main_fallida")[7].style.display = "block";
			document.getElementsByClassName("main_correcta")[7].style.display = "none";
		}	
	}
	
	var seleccionada9 = "";
	for (j =0; j < pregunta9.length; j++) {
		if(pregunta9[j].checked){
			seleccionada9 = pregunta9[j].value;
		}
	}
	if(seleccionada9 == ""){
		alert("Selecciona una opción en la pregunta 9");
		return false;
	}else{
		var respuesta=xmlDoc.getElementsByTagName("answer")[8].innerHTML;
		if(seleccionada9 == respuesta){
			correctas++;
			document.getElementsByClassName("main_correcta")[8].style.display = "block";
			document.getElementsByClassName("main_fallida")[8].style.display = "none";
		}else{
			fallidas++;
			document.getElementsByClassName("main_fallida")[8].style.display = "block";
			document.getElementsByClassName("main_correcta")[8].style.display = "none";
		}
	}
	
	var seleccionada10 = "";
	for (j =0; j < pregunta10.length; j++) {
		if(pregunta10[j].checked){
			seleccionada10 = pregunta10[j].value;
		}
	}
	if(seleccionada10 == ""){
		alert("Selecciona una opción en la pregunta 10");
		return false;
	}else{
		var respuesta=xmlDoc.getElementsByTagName("answer")[9].innerHTML;
		if(seleccionada10 == respuesta){
			correctas++;
			document.getElementsByClassName("main_correcta")[9].style.display = "block";
			document.getElementsByClassName("main_fallida")[9].style.display = "none";
		}else{
			fallidas++;
			document.getElementsByClassName("main_fallida")[9].style.display = "block";
			document.getElementsByClassName("main_correcta")[9].style.display = "none";
		}
	}
	
	if (correctas + fallidas == 10){
		document.getElementById("correctas").innerHTML = "Respuestas correctas: <span class='resaltado'>" + correctas + "</span>";
		document.getElementById("fallidas").innerHTML = "Respuestas incorrectas: <span class='resaltado'>" + fallidas + "</span>";
		document.getElementById("correct").style.display = "block"
	}
	
	return false;
}

function pintarPreguntaTexto(respuesta, titulo, position){
	document.getElementsByClassName("negcurs")[position].innerHTML = titulo;
	document.getElementsByClassName("main_fallida")[position].innerHTML = "<span class='resaltado'>FALLASTE.</span> La respuesta correcta es: <span class='resaltado'>" + respuesta + "</span>";
}

function ponerPreguntaSelected(titulo, opciones, respuesta, position){
	document.getElementsByClassName("negcurs")[position].innerHTML = titulo;
	var selector = document.getElementsByClassName("selector")[position-2];
	if (selector.multiple) {
		corregirMultiple(opciones, respuesta, position, selector);
	}else{
		corregirSelected(opciones, respuesta, position, selector);
	}
}

function corregirSelected(opciones, respuesta, position, selector){
	for(var i=0; i < opciones.length; i++){
			var label = document.createElement("option");
			if (i == respuesta){
				document.getElementsByClassName("main_fallida")[position].innerHTML = "<span class='resaltado'>FALLASTE.</span> La respuesta correcta es: <span class='resaltado'>" +  opciones[respuesta] + "</span>";
			}
			label.text= opciones[i];
			label.value=i+1;
			label.id="PR"+i;
			label.name="Pre";
			selector.options.add(label);
		}
}

function corregirMultiple(opciones, respuestas, position, selector){
	document.getElementsByClassName("main_fallida")[position].innerHTML = "<span class='resaltado'>FALLASTE.</span> Las respuestas correctas son: <span class='resaltado'>" +  respuestas + "</span>";
	for(var i=0; i < opciones.length; i++){
		var label = document.createElement("option");
		label.text= opciones[i];
		label.value=i+1;
		label.id="PR"+i;
		label.name="Pre";
		selector.options.add(label);
	}
}


function ponerPreguntaCheckRadio(titulo, opciones, respuesta, position){
	var container = document.getElementsByClassName("radiocheckPregunta")[position-6];
	document.getElementsByClassName("negcurs")[position].innerHTML = titulo;
	var tipo = "";
	if(position > 7){
		tipo = "radio";
		document.getElementsByClassName("main_fallida")[position].innerHTML = "<span class='resaltado'>FALLASTE.</span> La respuesta correcta es: <span class='resaltado'>" +  opciones[respuesta] + "</span>";
		if(position == 8){
			la_id = 9;
		}else{
			la_id = 10;
		}
	}else{
		tipo = "checkbox";
		document.getElementsByClassName("main_fallida")[position].innerHTML = "<span class='resaltado'>FALLASTE.</span> Las respuestas correctas son: <span class='resaltado'>" +  respuesta + "</span>";
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
		input.value=i+1;
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
	xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc
	//datosXml = xmlDoc;
	
	//input text 1
	var titulo=xmlDoc.getElementsByTagName("title")[0].innerHTML;
	document.getElementsByClassName("main_correcta")[0].innerHTML = "Respuesta correcta";
	var respuesta=xmlDoc.getElementsByTagName("answer")[0].innerHTML;
	pintarPreguntaTexto(respuesta, titulo, 0);


	//input text 2
	var titulo=xmlDoc.getElementsByTagName("title")[1].innerHTML;
	document.getElementsByClassName("main_correcta")[1].innerHTML = "Respuesta correcta";
	var respuesta= xmlDoc.getElementsByTagName("answer")[1].innerHTML;
	pintarPreguntaTexto(respuesta, titulo, 1);
	
	//selected pregunta 3
	var titulo = xmlDoc.getElementsByTagName("title")[2].innerHTML;
	document.getElementsByClassName("main_correcta")[2].innerHTML = "Respuesta correcta";
	var opciones = [];
	var respuesta = xmlDoc.getElementById("profe003").getElementsByTagName("answer")[0].innerHTML;
	var nopt = xmlDoc.getElementById("profe003").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe003").getElementsByTagName("option")[i].innerHTML;
	}
	ponerPreguntaSelected(titulo,opciones,respuesta, 2);

	//selected pregunta 4
	var titulo = xmlDoc.getElementsByTagName("title")[3].innerHTML;
	document.getElementsByClassName("main_correcta")[3].innerHTML = "Respuesta correcta";
	var opciones = [];
	var respuesta = xmlDoc.getElementById("profe004").getElementsByTagName("answer")[0].innerHTML;
	var nopt = xmlDoc.getElementById("profe004").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe004").getElementsByTagName("option")[i].innerHTML;
	}  
	ponerPreguntaSelected(titulo,opciones,respuesta, 3);
	
	//selected multiple pregunta 5
	var titulo = xmlDoc.getElementsByTagName("title")[4].innerHTML;
	document.getElementsByClassName("main_correcta")[4].innerHTML = "Respuestas correctas";
	var opciones = [];
	var respuestas = [];
	var nres = xmlDoc.getElementById("profe005").getElementsByTagName("answer").length;
	for (i = 0; i < nres; i++) {
		respuestas[i]=xmlDoc.getElementById("profe005").getElementsByTagName("answer")[i].innerHTML;
	}
	var nopt = xmlDoc.getElementById("profe005").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe005").getElementsByTagName("option")[i].innerHTML;
	}
	ponerPreguntaSelected(titulo,opciones, respuestas, 4);

	//selected multiple pregunta 6
	var titulo = xmlDoc.getElementsByTagName("title")[5].innerHTML;
	document.getElementsByClassName("main_correcta")[5].innerHTML = "Respuestas correctas";
	var opciones = [];
	var respuestas = [];
	var nres = xmlDoc.getElementById("profe006").getElementsByTagName("answer").length;
	for (i = 0; i < nres; i++) {
		respuestas[i]=xmlDoc.getElementById("profe006").getElementsByTagName("answer")[i].innerHTML;
	}
	var nopt = xmlDoc.getElementById("profe006").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe006").getElementsByTagName("option")[i].innerHTML;
	}  
	ponerPreguntaSelected(titulo,opciones, respuestas, 5);
	
	//checkbox pregunta 7
	var titulo = xmlDoc.getElementsByTagName("title")[6].innerHTML;
	document.getElementsByClassName("main_correcta")[6].innerHTML = "Respuestas correctas";
	var opciones = [];
	var respuestas = [];
	var nres = xmlDoc.getElementById("profe007").getElementsByTagName("answer").length;
	for (i = 0; i < nres; i++) {
		respuestas[i]=xmlDoc.getElementById("profe007").getElementsByTagName("answer")[i].innerHTML;
	}
	var nopt = xmlDoc.getElementById("profe007").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe007").getElementsByTagName("option")[i].innerHTML;
	}
	ponerPreguntaCheckRadio(titulo,opciones, respuestas, 6);

	//checkbox pregunta 8
	var titulo = xmlDoc.getElementsByTagName("title")[7].innerHTML;
	document.getElementsByClassName("main_correcta")[7].innerHTML = "Respuestas correctas";
	var opciones = [];
	var respuestas = [];
	var nres = xmlDoc.getElementById("profe008").getElementsByTagName("answer").length;
	for (i = 0; i < nres; i++) {
		respuestas[i]=xmlDoc.getElementById("profe008").getElementsByTagName("answer")[i].innerHTML;
	}
	var nopt = xmlDoc.getElementById("profe008").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe008").getElementsByTagName("option")[i].innerHTML;
	}
	ponerPreguntaCheckRadio(titulo,opciones, respuestas, 7);
	
	//Radio pregunta 9
	var titulo = xmlDoc.getElementsByTagName("title")[8].innerHTML;
	document.getElementsByClassName("main_correcta")[8].innerHTML = "Respuesta correcta";
	var opciones = [];
	var respuesta = xmlDoc.getElementById("profe009").getElementsByTagName("answer")[0].innerHTML;
	var nopt = xmlDoc.getElementById("profe009").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe009").getElementsByTagName("option")[i].innerHTML;
	}
	ponerPreguntaCheckRadio(titulo, opciones, respuesta, 8);

	//Radio pregunta 10
	var titulo = xmlDoc.getElementsByTagName("title")[9].innerHTML;
	document.getElementsByClassName("main_correcta")[9].innerHTML = "Respuesta correcta";
	var opciones = [];
	var respuesta = xmlDoc.getElementById("profe0010").getElementsByTagName("answer")[0].innerHTML;
	var nopt = xmlDoc.getElementById("profe0010").getElementsByTagName("option").length;
	for (i = 0; i < nopt; i++) { 
		opciones[i]=xmlDoc.getElementById("profe0010").getElementsByTagName("option")[i].innerHTML;
	}
	ponerPreguntaCheckRadio(titulo, opciones, respuesta, 9);
}