if(sessionStorage.getItem("user")){

    window.onchange = function () {


        

            var latitud = document.getElementById("longitud").value;
            var longitud = document.getElementById("longitud").value;
            var direccion = document.getElementById("direccion").value;
            var telefono = document.getElementById("telefono").value;
            var titulo = document.getElementById("titulo").value;
            var descripcion = document.getElementById("descripcion").value;
            
                if (latitud == "" && longitud == "" && direccion == "" &&
                telefono == "" && titulo == "" && descripcion == "") { 
                    document.getElementById('guardar').disabled = true;   
                } else  {
                    document.getElementById('guardar').disabled = false;   
                }
    


    };

} else{
    window.open("../../proyectoFinal/login.html", "_self");
}
