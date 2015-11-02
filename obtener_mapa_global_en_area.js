/*
	Autor: Jhonny Colmena
	Email: jhoelicq@hotmail.com
	Fecha: 2015-10-22
	Descripcion: Script de descarga de una imagen del mapa de cobertura global en un area determinada
*/

function getImgCoverGlobal(idVector){
	var vector = ee.FeatureCollection('ft:'+ idVector); //cargamos el kml de una area
	var imgCoverGlobal= ee.Image('ESA/GLOBCOVER_L4_200901_200912_V2_3'); //cargamos la imagen de mapa de cobertura global

	var imgCoverArea= imgCoverGlobal.clip(vector); //recortamos la imagen de cobertura global en una area especificada

	// exportamos la imagen de cobertura en una determinada area
	Export.image(imgCoverArea, 'export_cobertura_bolivia', {
	  	scale: 7,
	  	region: vector.geometry().getInfo(),
		maxPixels: 50000000000 //cambiamos el maximo de pixeles
	});

	Map.centerObject(vector, 6);  //centramos el mapa en base al vector con un zoom lejano
	Map.addLayer(vector); //mostramos el vector del area en el mapa
	Map.addLayer(imgCoverArea); //mostramos la imagen de cobertura en una determinada area
}

getImgCoverGlobal('1RxLMu2UiIzvtVd-WqmnKRp7Vjob0JyKEiG2nxTeL'); //descargamos la imagen de covertura global en el area de Bolivia
