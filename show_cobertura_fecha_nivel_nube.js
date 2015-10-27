var rasterBolivia = ee.FeatureCollection('ft:1RxLMu2UiIzvtVd-WqmnKRp7Vjob0JyKEiG2nxTeL'); //cargamos el kml de bolivia
var landsatUsgsToa= ee.ImageCollection('LANDSAT/LC8_L1T_TOA') //las imagenes landsat8 de USGS
	.filterBounds(rasterBolivia) //filtramos la col. de imagenes solo para Bolivia
	.filterDate('2015-01-01', '2015-10-20') //filtramos imagenes solo del año 2015
	.filterMetadata('CLOUD_COVER', 'less_than', 10.0); //solo obtenemos las imagenes con un maximo de nubosidad de 10%

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

// print(Chart.feature.byFeature(feaColMetaImageness);  //mostramos los metadatos de las imagenes como un grafico estadistico

Map.centerObject(rasterBolivia, 6);
Map.addLayer(landsatUsgsToa);
Map.addLayer(rasterBolivia);