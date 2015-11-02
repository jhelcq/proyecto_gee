/*
	Autor: Jhonny Colmena
	Email: jhoelicq@hotmail.com
	Fecha: 2015-10-20
	Descripcion: Script para mostrar una coleccion de imagenes solo en un area
*/

function mostrarColImagenesArea(idVector){
	var vector = ee.FeatureCollection('ft:1eT0En9df3oNiGdA6-93FnYtpXnSqZ6nwtp6nCn3s'); //cargamos un kml
	var filteredCollection = ee.ImageCollection('LANDSAT/LC8_L1T') //se carga una coleccion de imagenes
	  .filterBounds(vector) //filtamos la collecion para el area del vector
	 
	Map.centerObject(vector, 9);  //centreamos el mapa en base a la primera imagen
	Map.addLayer(filteredCollection) //mostramos la coleccion en el mapa
	Map.addLayer(vector);  //adiciona el vector al mapa
	
}

mostrarColImagenesArea('1eT0En9df3oNiGdA6-93FnYtpXnSqZ6nwtp6nCn3s'); //mostramos una coleccion de imagenes solo en el area de santa cruz