window.onload = function () {
  console.log("Hola");
    var ajax = new XMLHttpRequest();
      console.log(window.location.search);
      const urlParams = new URLSearchParams(window.location.search);
      var urldest="../../../proyectoFinal/php/api/maps_api.php?id_coordenada=" + urlParams.get('id');
      ajax.open("GET", urldest, true);
      ajax.send();
      let data;
      
  ajax.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              data = JSON.parse(this.responseText);
              var titulo = document.getElementById('tituloMonumento');
              var direccion = document.getElementById('idDireccionMonumento');
              var telefono = document.getElementById('idTelefonoMonumento');
              var horario = document.getElementById('idHorarioMonumento');
              var img = document.getElementById('imgMonumento');
              var texto = document.getElementById('textoMonumento');



              for (let i = 0; i < data.length; i++) {
                var valorTitulo =  data[i].TITULO;
                var valorDireccion =  data[i].DIRECCION;
                var valorTelefono =  data[i].TELEFONO;
                var valorHorario =  data[i].HORARIO;
                var valorTexto =  data[i].DESCRIPCION;
                var valorImagen =  data[i].IMG; 
                var linea = "<img src='"+valorImagen+"' srcset='' width='600' height='400'>";

                img.insertAdjacentHTML(
                    "beforeend",
                    linea 
                  );
                             
                titulo.innerHTML=valorTitulo;
                direccion.innerHTML="Dirección: "+valorDireccion;
                telefono.innerHTML="Teléfono: "+valorTelefono;
                horario.innerHTML="Horario: "+valorHorario;

                texto.innerHTML=valorTexto;

             
              }
              
          }
        }
    }