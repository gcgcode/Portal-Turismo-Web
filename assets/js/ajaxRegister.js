function insert() {

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var id_localidad = document.getElementById("id_localidad").value;
  var parrafo = document.getElementById("parrafo");

  var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);

    if (ajax.responseText == "REGOK") {
      var url = '../../proyectoFinal/login.html';
      window.open(url,"_self");
    }else if(ajax.responseText == "EXIST"){
      parrafo.innerHTML="<p>Lo sentimos, el usuario "+username+" ya existe</p>";
    } else{
      parrafo.innerHTML="<p>Lo sentimos, no se ha completado el registro</p>";
    }
  }
};
ajax.open("POST", "../../proyectoFinal/php/forms/register.php", true);
       let formData = new FormData();

         formData.append('user', username);
         formData.append('pass', password);
         formData.append('name', name);
         formData.append('email', email);
         formData.append('id_localidad', id_localidad);
       
        ajax.send(formData);
}
   