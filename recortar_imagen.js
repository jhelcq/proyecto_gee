var point = ee.Geometry.Point(-122.262, 37.8719); //punto para filtrar la coleccion de imagenes
var filteredCollection = ee.ImageCollection('LANDSAT/LC8_L1T') //se carga una coleccion de imagenes
  .filterBounds(point) //filtamos la collecion para un punto

var first = filteredCollection.first(); //obtenemos la primera imagen de la collecion
 
Map.centerObject(first, 9);  //centreamos el mapa en base a la primera imagen
Map.addLayer(filteredCollection) //mostramos la coleccion en el mapa