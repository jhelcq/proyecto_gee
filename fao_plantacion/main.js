$(function() {
    $('#departamento').change(function() {
        $('#provincia').html(''); //borramos las provincias escogidas
        $('#municipio').html(''); //borramos las provincias escogidas
        $('#comunidad').html(''); //borramos las comunidades escogidas

        //funcion para adicionar las provincias del departamento seleccionado
        function listarProvincias(provincias){
            provincias.forEach(function(provincia, index) {
                $('#provincia').append($('<option>', {
                    value: provincia['id_provincia'],
                    text: provincia['nombre_provincia']
                }));
            })
        }

        var departamento= {id_departamento: $('#departamento').val()};
        $.ajax({
            contentType: "application/json",
            data: departamento,
            dataType: 'json',
            success: function (r) {
                listarProvincias(r);
            },
            error: function() {
                alert('No se puede obtener las provincias!');
            },
            type: "GET",
            url: "registro_plantacion/provincias"
        });
    })

    $('#provincia').change(function() {
        $('#municipio').html(''); //borramos los municipios escogidos
        $('#comunidad').html(''); //borramos las comunidades escogidas

        //funcion para adicionar las provincias del departamento seleccionado
        function listarMunicipios(municipios){
            municipios.forEach(function(municipio, index) {
                $('#municipio').append($('<option>', {
                    value: municipio['id_municipio'],
                    text: municipio['nombre_municipio']
                }));
            })
        }

        var provincia= {id_provincia: $('#provincia').val()};
        $.ajax({
            contentType: "application/json",
            data: provincia,
            dataType: 'json',
            success: function (r) {
                listarMunicipios(r);
            },
            error: function() {
                alert('No se puede obtener los municipios!');
            },
            type: "GET",
            url: "registro_plantacion/municipios"
        });
    })

    $('#municipio').change(function() {
        $('#comunidad').html(''); //borramos las comunidades escogidas

        //funcion para adicionar las provincias del departamento seleccionado
        function listarComunidades(comunidades){
            comunidades.forEach(function(comunidad, index) {
                $('#comunidad').append($('<option>', {
                    value: comunidad['id_comunidad'],
                    text: comunidad['nombre_comunidad']
                }));
            })
        }

        var municipio= {id_municipio: $('#municipio').val()};
        $.ajax({
            contentType: "application/json",
            data: municipio,
            dataType: 'json',
            success: function (r) {
                listarComunidades(r);
            },
            error: function() {
                alert('No se puede obtener las comunidades!');
            },
            type: "GET",
            url: "registro_plantacion/comunidades"
        });
    })

    $('#enviar').click(function() {
        var comunidades= [];
        $( "select#comunidad option:selected" ).each(function() {
            comunidades.push($( this ).val());
        });

        var plantacion={
            superficie_plantada: $('#proyecto_superficie_plantada'),
            fecha_inicio_plantacion: $('#proyecto_fecha_inicio_plantacion'),
            fecha_fin_plantacion: $('#proyecto_fecha_fin_plantacion'),
            comunidades: comunidades
        }

        $.ajax({
            contentType: "application/json",
            data: JSON.stringify(plantacion),
            dataType: 'json',
            success: function (r) {
                alert('Se adiciono correctamente el registro!');
            },
            error: function() {
                alert('No se pudo guardar el registro!');
            },
            type: "POST",
            url: "registro_plantacion"
        });
    });
})