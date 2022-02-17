window.onload = function (){

if (sessionStorage.getItem("user")) {
         
    
        var ajax = new XMLHttpRequest();
        console.log(window.location.search);
        const urlParams = new URLSearchParams(window.location.search);
        var urldest="../../../proyectoFinal/php/api/maps_api.php?username=" + urlParams.get('username');
        ajax.open("GET", urldest, true);
        ajax.send();
        let data;

        ajax.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                data = JSON.parse(this.responseText);

            var bienvenido = document.getElementById("bienvenido");
            var element = document.getElementById("user-data");
            
                for (let i = 0; i < data.length; i++) {
                    var username = data[i].username;
                    var email = data[i].email;
                    var nombre_apellido = data[i].nombre_apellidos;
                    var localidad = data[i].localidad;

                    
                    var p1 = "<p>Nombre: "+nombre_apellido+"</p>";
                    var p2 = "<p>Nombre de usuario: "+username+"</p>";
                    var p3 = "<p>Correo electrónico: "+email+"</p>";
                    var p4 = "<p>Localidad: "+localidad+"</p>";
                    
                    var userData = p1 + p2 + p3 + p4;
                    element.insertAdjacentHTML( 'beforeend', userData );

                    var h2 = "<h2>Bienvenido "+nombre_apellido+"</h2>";
                    bienvenido.insertAdjacentHTML('beforeend', h2);
                }
            }
    }
} else{
    window.open("../../proyectoFinal/login.html", "_self");
}

}