var rasterBolivia = ee.FeatureCollection('ft:1RxLMu2UiIzvtVd-WqmnKRp7Vjob0JyKEiG2nxTeL'); //cargamos el kml de santa cruz
var usgs_toa= ee.ImageCollection('LANDSAT/LC8_L1T_TOA')
	.filterBounds(rasterBolivia);

Map.addLayer(usgs_toa);
Map.centerObject(rasterBolivia, 6);  //centreamos el mapa en base al vector de Bolivia con un zoom de lejano
Map.addLayer(rasterBolivia); //mostramos el vector de Bolivia en el mapa