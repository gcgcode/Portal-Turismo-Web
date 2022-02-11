function insert() {

    var categoria = document.getElementById("categoria").value;
    var latitud = document.getElementById("latitud").value;
    var longitud = document.getElementById("longitud").value;
    var direccion = document.getElementById("direccion").value;
    var titulo = document.getElementById("titulo").value;
    var descripcion = document.getElementById("descripcion").value;
    var img = document.getElementById("img").value;

    var ajax = new XMLHttpRequest();
      ajax.open("POST", "../maps_api.php", true);

      let formData = new FormData();

        formData.append('latitud', latitud);
        formData.append('longitud', longitud);
        formData.append('direccion', direccion);
        formData.append('titulo', titulo);
        formData.append('descripcion', descripcion);
        formData.append('telefono', descripcion);
        formData.append('img', img);
        formData.append('id_categoria', categoria);

      ajax.send(formData);
     
}