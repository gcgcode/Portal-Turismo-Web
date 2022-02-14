window.onload = function () {
    
    var ajax = new XMLHttpRequest();
      ajax.open("GET", "../../../proyectoFinal/php/api/maps_api.php?id_categoria=monumento", true);
      ajax.send();
      let data;
      
  ajax.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              data = JSON.parse(this.responseText);
               
              var getElement = document.getElementById('fila');
              for (let i = 0; i < data.length; i++) {
                var titulo =  data[i].TITULO;
                var img = data[i].IMG;
                var id = data[i].ID_COORDENADA;
                id = id +"";
                console.log(id);
                var div = '<div class="col-lg-4 text-center"><img src="'+img+'" width="300" height="200" alt="" onclick= window.open("./monumento.html?id='+ id+'")><h3>'+titulo+'</h3></div>';
                getElement.insertAdjacentHTML( 'beforeend', div );
             
              }
          }
  }

}