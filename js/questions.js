var formElement=null;
var numeroSecreto=null;
var respuestaSelect=null;
var respuestasCheckbox = [];
var nota = 0;  //nota de la prueba sobre 3 puntos (hay 3 preguntas)

//**************************************************************************************************** 
//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function(){ 

 //CORREGIR al apretar el botón
 formElement=document.getElementById('myform');
 formElement.onsubmit=function(){
   inicializar();
   if (comprobar()){
    corregirNumber();
    corregirSelect();
    corregirCheckbox();
    presentarNota();
   }
   return false;
 }
 
 //LEER XML de xml/preguntas.xml
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
   gestionarXml(this);
  }
 };
 xhttp.open("GET", "xml/preguntas.xml", true);
 xhttp.send();
}

//****************************************************************************************************
// Recuperamos los datos del fichero XML xml/preguntas.xml
// xmlDOC es el documento leido XML. 
function gestionarXml(dadesXml){
	var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc

	//NUMBER
	//Recuperamos el título y la respuesta correcta de Input, guardamos el número secreto
	var tituloInput=xmlDoc.getElementsByTagName("title")[0].innerHTML;
	ponerDatosInputHtml(tituloInput);
	numeroSecreto=parseInt(xmlDoc.getElementsByTagName("answer")[0].innerHTML);

	//SELECT
	//Recuperamos el título y las opciones, guardamos la respuesta correcta
	var tituloSelect1=xmlDoc.getElementsByTagName("title")[1].innerHTML;
	var opcionesSelect1 = [];
	var nopt = xmlDoc.getElementById("profe_002").getElementsByTagName('option').length;
	for (i = 0; i < nopt; i++) { 
		opcionesSelect[i] = xmlDoc.getElementById("profe_002").getElementsByTagName('option')[i].innerHTML;
	}
	alert("La pregunta 2 es " + tituloSelect1 + " y sus opciones son: " + opcionesSelect1);
	ponerDatosSelectHtml(tituloSelect1,opcionesSelect1);
	respuestaSelect=parseInt(xmlDoc.getElementsByTagName("answer")[1].innerHTML);

	//CHECKBOX
	//Recuperamos el título y las opciones, guardamos las respuestas correctas
	var tituloCheckbox = xmlDoc.getElementsByTagName("title")[2].innerHTML;
	var opcionesCheckbox = [];
	var nopt = xmlDoc.getElementById("profe_003").getElementsByTagName('option').length;
	for (i = 0; i < nopt; i++) { 
		opcionesCheckbox[i]=xmlDoc.getElementById("profe_003").getElementsByTagName('option')[i].innerHTML;
	}
	ponerDatosCheckboxHtml(tituloCheckbox,opcionesCheckbox);
	var nres = xmlDoc.getElementById("profe_003").getElementsByTagName('answer').length;
	for (i = 0; i < nres; i++) {
		respuestasCheckbox[i]=xmlDoc.getElementById("profe_003").getElementsByTagName("answer")[i].innerHTML;
	}
}
