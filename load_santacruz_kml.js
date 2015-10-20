//carga un archivo kml(adicionado a google drive) que tiene un determinado ID
var fc = ee.FeatureCollection('ft:1eT0En9df3oNiGdA6-93FnYtpXnSqZ6nwtp6nCn3s');

//adiciona el vector de punto en el mapa
Map.addLayer(fc, {}, 'counties');