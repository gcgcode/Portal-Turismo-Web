function insert() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var parrafo = document.getElementById("parrafo").value;

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      if (ajax.responseText == "LOGINOK") {
        parrafo.insertAdjacentHTML("afterbegin", "<p>Sesión iniciada</p>");
        window.open('../../proyectoFinal/admin-panel/addElements.html',"_self")
      }else{
        parrafo.insertAdjacentHTML("afterbegin", "<p>Usuario o contraseña incorrectos</p>");
      }
    }
  };
  ajax.open("POST", "../../proyectoFinal/php/forms/login.php", true);
         let formData = new FormData();

           formData.append('user', username);
           formData.append('pass', password);
         
          ajax.send(formData);
}
     
     
