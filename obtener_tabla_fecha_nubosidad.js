/*
	Autor: Jhonny Colmena
	Email: jhoelicq@hotmail.com
	Fecha: 2015-10-20
	Descripcion: Script de obtencion de una tabla de id de imagenes de landsat con datos de fecha y porcentaje de nubosidad
*/

function obtenerTablaXFechaPorcentaje(idVector, fecIni, fecFin, nivelNubosidad){
	var vector = ee.FeatureCollection('ft:'+ idVector); //cargamos el kml
	var landsatUsgsToa= ee.ImageCollection('LANDSAT/LC8_L1T_TOA') //las imagenes landsat8 de USGS
		.filterBounds(vector) //filtramos la col. de imagenes solo para una determinada area
		.filterDate(fecIni, fecFin) //filtramos imagenes solo para un rango de fechas
		.filterMetadata('CLOUD_COVER', 'less_than', nivelNubosidad); //solo obtenemos las imagenes con un maximo de nubosidad

	var feaColMetaImagenes = landsatUsgsToa.map(function(img) {  //iteramos sobre cada una de las imagenes de una coleccion de imagenes
		var coberturaNube = ee.Image(img).get('CLOUD_COVER');  //obtenemos el metadato de nubosidad de la imagen
		var fechaAdquisicion = ee.Image(img).get('DATE_ACQUIRED'); //fecha de adquisicion de la imagen
		return ee.Feature(null, {'score': coberturaNube, 'date': fechaAdquisicion })
	});

	//exportamos como tabla la feature collection de metadatos de la imagen
	Export.table(feaColMetaImagenes, 'export_metadatos_imgbolivia', {
	  	gmeAttributionName: 'score',
		driveFolder: 'cobuso_fao',
		driveFileNamePrefix: 'cover_metadatos_imgbolivia',
	  	fileFormat: 'CSV' //formato de salida
	});

	Map.centerObject(vector, 6);
	Map.addLayer(landsatUsgsToa);
	Map.addLayer(vector);
}

//obtencion de una tabla de datos de las imagenes landsat del año 2015 con porcentaje de nubosidad como maximo de 10%
obtenerTablaXFechaPorcentaje('1RxLMu2UiIzvtVd-WqmnKRp7Vjob0JyKEiG2nxTeL', '2015-01-01', '2015-10-20', 10); 
