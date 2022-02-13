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
                var openTr = '<tr>';
                var td1 = '<td>'+id+'</td>'
                var td2 = '<td>'+titulo+'</td>'
                var td3 = '<td>'+latitud+'</td>'
                var td4 = '<td>'+longitud+'</td>'
                var td5 = '<td><a href="#" data-role="update" data-id="'+id+'">Actualizar</a></td>';
                var closeTr = '</tr>';
                var trResult = openTr + td1 + td2 + td3 + td4 +td5+ closeTr;
                getElement.insertAdjacentHTML( 'beforeend', trResult );
             
              }
          }
  }

}

$(document).ready(function(){
    $(document).on('click','a[data-role=update]', function(){
        alert($(this).data('id'));
    })
});