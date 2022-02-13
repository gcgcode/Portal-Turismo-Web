window.onload = function () {
    
    var ajax = new XMLHttpRequest();
      ajax.open("GET", "../../../proyectoFinal/php/api/maps_api.php", true);
      ajax.send();
      let data;
      
  ajax.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              data = JSON.parse(this.responseText);
               
              var getElement = document.getElementById('tbody');

              for (let i = 0; i < data.length; i++) {
                var id =  data[i].ID_COORDENADA;
                var titulo = data[i].TITULO;
                var latitud = data[i].LATITUD;
                var longitud = data[i].LONGITUD;
                var descripcion = data[i].DESCRIPCION;
                var direccion = data[i].DIRECCION;
                var telefono = data[i].TELEFONO;
                var img = data[i].IMG;
                var categoria = data[i].ID_CATEGORIA;

                var openTr = '<tr id="'+id+'">';
                var td1 = '<td>'+id+'</td>'
                var td2 = '<td data-target="titulo">'+titulo+'</td>'
                var td3 = '<td data-target="latitud">'+latitud+'</td>'
                var td4 = '<td data-target="longitud">'+longitud+'</td>'
                var td5 = '<td data-target="descripcion">'+descripcion+'</td>'
                var td6 = '<td data-target="direccion">'+direccion+'</td>'
                var td7 = '<td data-target="telefono">'+telefono+'</td>'
                var td8 = '<td data-target="img">'+img+'</td>'
                var td9 = '<td data-target="categoria">'+categoria+'</td>'
                var td10 = '<td><a href="#" data-role="update" data-id="'+id+'">Actualizar</a></td>';
                var closeTr = '</tr>';
                var trResult = openTr + td1 + td2 + td3 + td4 + td5 + td6 + td7 + td8 + td9 + td10 + closeTr;
                getElement.insertAdjacentHTML( 'beforeend', trResult );
             
              }
          }
  }

}

$(document).ready(function(){
    $(document).on('click','a[data-role=update]', function(){
        var id= $(this).data('id');
        var titulo= $('#'+id).children('td[data-target=titulo]').text();
        var latitud= $('#'+id).children('td[data-target=latitud]').text();
        var longitud= $('#'+id).children('td[data-target=longitud]').text();
        var descripcion = $('#'+id).children('td[data-target=descripcion]').text();
        var direccion= $('#'+id).children('td[data-target=direccion]').text();
        var telefono= $('#'+id).children('td[data-target=telefono]').text();
        var img= $('#'+id).children('td[data-target=img]').text();
        var categoria= $('#'+id).children('td[data-target=categoria]').text();

        $('#id_coordenada').val(id);
        $('#titulo').val(titulo);
        $('#latitud').val(latitud);
        $('#longitud').val(longitud);
        $('#descripcion').val(descripcion);
        $('#direccion').val(direccion);
        $('#telefono').val(telefono);
        $('#img').val(img);
        $('#categoria').val(categoria);
        $('#myModal').modal('toggle');
    })

    $('#save').click(function(){
        var id = $('#id_coordenada').val();
        var titulo = $('#titulo').val();
        var latitud = $('#latitud').val();
        var longitud = $('#longitud').val();
        var descripcion = $('#descripcion').val();
        var direccion = $('#direccion').val();
        var telefono = $('#telefono').val();
        var img = $('#img').val();
        var categoria = $('#categoria').val();
    
          var ajax = new XMLHttpRequest();

          var query = "../../../proyectoFinal/php/api/maps_api.php?id_coordenada="
            +id+"&latitud="+latitud+"&longitud="+longitud+"&titulo="+titulo+"&descripcion="+descripcion+
            "&direccion="+direccion+"&telefono="+telefono+"&img="+img+"&id_categoria="+categoria;

        ajax.open("PUT", query, true);
        ajax.send();
      
        ajax.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    location.reload();
                   
                }
        }
    
    });
});

