var vectorSantaCruz = ee.FeatureCollection('ft:1RxLMu2UiIzvtVd-WqmnKRp7Vjob0JyKEiG2nxTeL'); //cargamos el kml de santa cruz
var usgs_toa= ee.ImageCollection('LANDSAT/LC8_L1T_TOA')
	.filterBounds(vectorSantaCruz)
	.filterDate('2015-01-01', '2015-10-20');

Map.centerObject(vectorSantaCruz, 6);  //centramos el mapa en base al vector de Bolivia con un zoom lejano
Mapp.addLayer(usgs_toa); //adicionando capa
Mapp.addLayer(vectorSantaCruz);
