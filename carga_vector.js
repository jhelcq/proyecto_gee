//carga un archivo kml(adicionado a google drive) que tiene un determinado ID
var vectorSantaCruz = ee.FeatureCollection('ft:1eT0En9df3oNiGdA6-93FnYtpXnSqZ6nwtp6nCn3s'); //cargamos el kml de santa cruz

/*1do par: una imagen, una collecion de imagenes o un vector(feautre collection)
2do par: se envia las opciones de visualizacion
3er par: creo que solo es un comentario como string
*/
Map.centerObject(vectorSantaCruz, 9);  //centreamos el mapa en base a la primera imagen
Map.addLayer(vectorSantaCruz);  //adiciona el vector de punto en el mapa