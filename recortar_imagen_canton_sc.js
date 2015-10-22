var landsat = ee.Image('ESA/GLOBCOVER_L4_200901_200912_V2_3')
var rasterCantonSantaCruz= ee.FeatureCollection('ft:1bwUyBDitRcoB6wu1WRIudDYFDvexu7voD-WTAzqf');

//1er. par: imagen
//2do. par: nombre de la imagen a guardar
//3er. par: region de tipo geometry a guardar

Export.image(landsat, 'exportImageExample3', {
  scale: 15,
  region: rasterCantonSantaCruz.geometry().getInfo()
});
