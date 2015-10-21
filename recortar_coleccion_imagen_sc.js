var vectorSantaCruz = ee.FeatureCollection('ft:1eT0En9df3oNiGdA6-93FnYtpXnSqZ6nwtp6nCn3s'); //cargamos el kml de santa cruz
var filteredCollection = ee.ImageCollection('LANDSAT/LC8_L1T') //se carga una coleccion de imagenes
  .filterBounds(vectorSantaCruz) //filtamos la collecion para un punto
 
Map.centerObject(vectorSantaCruz, 9);  //centreamos el mapa en base a la primera imagen

Map.addLayer(filteredCollection) //mostramos la coleccion en el mapa
Map.addLayer(vectorSantaCruz);  //adiciona el vector de punto en el mapa