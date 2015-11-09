<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/registro_plantacion','AdicionPlantacionController@ver'); 
Route::post('/registro_plantacion','AdicionPlantacionController@procesar'); 
Route::get('/registro_plantacion/provincias','AdicionPlantacionController@getProvincias'); 
Route::get('/registro_plantacion/municipios','AdicionPlantacionController@getMunicipios'); 
Route::get('/registro_plantacion/comunidades','AdicionPlantacionController@getComunidades'); 

