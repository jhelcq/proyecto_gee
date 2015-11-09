/*
	Autor: Proyecto UNJP/BOL/045/UNJ de apoyo al mecanismo 
	       conjunto en acciones de mitigacion al cambio climatico en los bosques de Bolivia
	Fecha: 2015-11-09
	Descripcion: Se obtiene las imagenes de escenas de Bolivia que tengan la minima nubosidad en un periodo de tiempo
*/

function obtImgMinimaNubosidad(idVector, fecIni, fecFin, nivelNubosidad){
	var pathRowBolivia= [
		{'p': 1, 'r': 69},
		{'p': 1, 'r': 70},
		{'p': 1, 'r': 71},
		{'p': 1, 'r': 72}
	];

	var vector = ee.FeatureCollection('ft:'+ idVector); //cargamos el kml
	var landsatUsgsToa= ee.ImageCollection('LANDSAT/LC8_L1T_TOA') //las imagenes landsat8 de USGS
		.filterBounds(vector) //filtramos la col. de imagenes solo para una determinada area
		.filterDate(fecIni, fecFin) //filtramos imagenes solo para un rango de fechas
		.filterMetadata('CLOUD_COVER', 'less_than', nivelNubosidad); //solo obtenemos las imagenes con un maximo de nubosidad
	
	//mostramos el vector
	Map.centerObject(vector, 6);
	Map.addLayer(vector);

	pathRowBolivia.forEach(function(datosEscena, index) { //iteramos sobre cada escena de Bolivia
		var escenaMenorlandsatUsgsToaBolivia= landsatUsgsToa.filterMetadata('WRS_PATH', "equals", datosEscena.p) //ibtenemos imagenes con un path especifico
			.filterMetadata('WRS_ROW', "equals", datosEscena.r)  //ibtenemos imagenes con un row especifico
			.sort('CLOUD_COVER') //ordenamos las imagenes en orden ascendente
			.first(); //obtenemos la imagen de una escena con menos nubosidad

		var imgMenorNubosidad= ee.Image(escenaMenorlandsatUsgsToaBolivia);
		var vizParams = {
		    bands: ['B6', 'B5', 'B4'],
		    min: 0,
		    max: 0.5,
		    gamma: [0.95, 1.1, 1]
	  	};

		Map.addLayer(imgMenorNubosidad, vizParams); //mostramos la imagen de menor nubosidad de una escena
	});
}

//muestra de grafico de datos de las imagenes landsat del año 2015 con porcentaje de nubosidad como maximo de 10%
obtImgMinimaNubosidad('1RxLMu2UiIzvtVd-WqmnKRp7Vjob0JyKEiG2nxTeL', '2015-01-01', '2015-10-20', 10); 
