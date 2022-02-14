window.onload = function () {
    
    var ajax = new XMLHttpRequest();
      ajax.open("GET", "../../../proyectoFinal/php/api/maps_api.php?id_coordenada=titulo", true);
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
                var valorImg = data[i].IMG;
                var valorTexto =  data[i].TEXTO;

                titulo.innerHTML=valorTitulo;
                direccion.innerHTML=valorDireccion;
                telefono.innerHTML=valorTelefono;
                horario.innerHTML=valorHorario;
                img.innerHTML=valorImg;
                texto.innerHTML=valorTexto;

             
              }
          }
        }
    }