window.onload = function () {
    var ajax = new XMLHttpRequest();
      ajax.open("GET", "maps_api.php?id_categoria=monumento", true);
      ajax.send();
      let data;

  ajax.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              data = JSON.parse(this.responseText);
              console.log(data);
              console.log(this.responseText);
              var getElement = document.getElementById('fila');
              for (let i = 0; i < data.length; i++) {
                var titulo =  data[i][3];
                var img = data[i][7];
                var div = '<div class="col-lg-4 text-center"><img src="'+img+'" width="300" height="200" alt=""><h3>'+titulo+'</h3></div>';
                getElement.insertAdjacentHTML( 'beforeend', div );
                console.log(titulo);
                console.log(img);
              }
          }
  }

}