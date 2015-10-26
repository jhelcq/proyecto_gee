var rasterBolivia = ee.FeatureCollection('ft:1RxLMu2UiIzvtVd-WqmnKRp7Vjob0JyKEiG2nxTeL'); //cargamos el kml de Bolivia
var imgCoverGlobal= ee.Image('ESA/GLOBCOVER_L4_200901_200912_V2_3'); //cargamos la imagen de mapa de cobertura global

var imgCoverBolivia= imgCoverGlobal.clip(rasterBolivia); //recortamos la imagen de cobertura global en el area de Bolivia

// exportamos la imagen de cobertura en el area de Bolivia
Export.image(imgCoverBolivia, 'export_cobertura_bolivia', {
  	scale: 7,
  	region: rasterBolivia.geometry().getInfo(),
	maxPixels: 50000000000 //cambiamos el maximo de pixeles
});

Map.centerObject(rasterBolivia, 6);  //centramos el mapa en base al vector de Bolivia con un zoom lejano
Map.addLayer(rasterBolivia); //mostramos el vector de Bolivia en el mapa
Map.addLayer(imgCoverBolivia); //mostramos la imagen de cobertura de Bolivia