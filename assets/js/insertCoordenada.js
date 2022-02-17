function insert() {

    var categoria = document.getElementById("categoria").value;
    var latitud = document.getElementById("latitud").value;
    var longitud = document.getElementById("longitud").value;
    var direccion = document.getElementById("direccion").value;
    var telefono = document.getElementById("telefono").value;
    var titulo = document.getElementById("titulo").value;
    var descripcion = document.getElementById("descripcion").value;
    var img = document.getElementById("img").value;
    
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert('Coordenada insertada correctamente');
    }
  };
  ajax.open("POST", "../../proyectoFinal/php/api/maps_api.php", true);
         let formData = new FormData();

           formData.append('id_categoria', categoria);
           formData.append('latitud', latitud);
           formData.append('longitud', longitud);
           formData.append('direccion', direccion);
           formData.append('telefono', telefono);
           formData.append('titulo', titulo);
           formData.append('descripcion', descripcion);
           formData.append('img', img);
           
           console.log(formData);
          ajax.send(formData);
}
     
     
