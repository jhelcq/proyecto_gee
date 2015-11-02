/*
	Autor: Jhonny Colmena
	Email: jhoelicq@hotmail.com
	Fecha: 2015-10-20
	Descripcion: Script de carga de un vector en formato kml
*/

function cargarVector(idVector){
	//carga un archivo kml(adicionado a google drive) que tiene un determinado ID
	return vector = ee.FeatureCollection('ft:'+ idVector); //cargamos el kml de Bolivia
}

function mostrarRecurso(recurso){
	Map.addLayer(recurso);  //adiciona el vector, la imagen o la coleccion de imagenes al mapa
	
	/*1do par: una imagen, una collecion de imagenes o un vector(feautre collection)
	2do par: se envia las opciones de visualizacion
	3er par: creo que solo es un comentario como string*/
	Map.centerObject(recurso, 9);  //centreamos el mapa en base a la imagen, al vector.
}

var vectorBolivia= cargarVector('1RxLMu2UiIzvtVd-WqmnKRp7Vjob0JyKEiG2nxTeL'); //cargamos el vector de Bolivia
mostrarRecurso(vectorBolivia); //mostramos el vector de Bolivia


