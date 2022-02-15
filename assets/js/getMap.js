function initMap() {
  
      // Create an info window to share between markers.
      const infoWindow = new google.maps.InfoWindow();
  
  
    var ajax = new XMLHttpRequest();
    
        const urlParams = new URLSearchParams(window.location.search);
        
        var urldest="../../../proyectoFinal/php/api/getCoordenada.php?id_coordenada=" + urlParams.get('id');
        console.log(urlParams.get('id'));
        console.log(urldest);

        ajax.open("GET", urldest, true);
        ajax.send();
        let data;
  
    ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                data = JSON.parse(this.responseText);
                
                console.log(this.responseText);
              
  
                for(var a = 0; a < data.length; a++) {
                    // GET coordenada data
                    let latitud = parseFloat(data[a].latitud);
                    let longitud = parseFloat(data[a].longitud); 
                    let titulo = data[a].titulo;
      
                    const coordenada = {lat: latitud, lng: longitud};
                   
                    const map = new google.maps.Map(document.getElementById("map"), {
                      zoom: 12,
                      center: { lat: latitud, lng: longitud  },
                      
                    });
                  // Nuevo marcador
                  const marker = new google.maps.Marker({
                  position: coordenada,
                  map,
                  title: titulo
                  ,
                  });
  
                   // Add a click listener for each marker, and set up the info window.
                  marker.addListener("click", () => {
                  infoWindow.close();
                  infoWindow.setContent(marker.getTitle());
                  infoWindow.open(marker.getMap(), marker);
                  });
                }      
                
            }
        };
  }
  