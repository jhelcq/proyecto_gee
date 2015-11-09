<?php 

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;

use Illuminate\Http\Response;

class AdicionPlantacionController extends Controller
{
    public function ver()
    {
        $departamentos= \App\Departamento::all();

        return view('adicion_plantacion', [
            'departamentos'=> $departamentos
        ]);
    }

   	public function procesar(Request $request)
    {
        $superficie_plantada= $request-> input('superficie_plantada');
        $fecha_inicio_plantacion= $request-> input('fecha_inicio_plantacion');
        $fecha_fin_plantacion= $request-> input('fecha_fin_plantacion');

        $proyecto= new \App\Provincia();
        $proyecto
/*        $comunidades= $request-> input('comunidades');
        $comunidades= $request-> input('comunidades');
*/
        return response()->json([
            'comunidades' => $comunidades/*,
            'provincia' => $provincia,
            'municipio' => $municipio*/
        ]);
    }

    public function getProvincias(Request $request)
    {
        $id_departamento= $request-> input('id_departamento');
        $provincias= \App\Provincia::where('id_departamento', $id_departamento)-> get();

        return response()->json($provincias);
    }

    public function getMunicipios(Request $request)
    {
        $id_provincia= $request-> input('id_provincia');
        $municipios= \App\Municipio::where('id_provincia', $id_provincia)-> get();

        return response()->json($municipios);
    }

    public function getComunidades(Request $request)
    {
        $id_municipio= $request-> input('id_municipio');
        $comunidades= \App\Comunidad::where('id_municipio', $id_municipio)-> get();

        return response()->json($comunidades);
    }
}