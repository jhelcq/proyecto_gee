var vectorBolivia = ee.FeatureCollection('ft:1RxLMu2UiIzvtVd-WqmnKRp7Vjob0JyKEiG2nxTeL'); //cargamos el kml de Bolivia
var imagenCoberturaGlobal= ee.Image('ESA/GLOBCOVER_L4_200901_200912_V2_3'); //cargamos la imagen de mapa de cobertura

// exportamos la imagen de cobertura en el area de Bolivia
Export.image(imagenCoberturaGlobal, 'export_cobertura_bolivia', {
  	scale: 7,
  	region: vectorBolivia.geometry().getInfo(),
	maxPixels: 50000000000 //cambiamos el maximo de pixeles
});

Map.centerObject(vectorBolivia, 6);  //centreamos el mapa en base al vector de Bolivia con un zoom de lejano
Map.addLayer(vectorBolivia); //mostramos el vector de Bolivia en el mapa
