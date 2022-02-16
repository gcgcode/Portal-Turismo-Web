function insert() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var hideInput = document.getElementById("hideInput");
    var linea = "<p>Has iniciado sesión </p>";

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      if (ajax.responseText == "LOGINOK") {
        hideInput.insertAdjacentHTML(
          "afterend",
          linea
        );
        window.open('../../proyectoFinal/admin-panel/addElements.html',"_self")
      }else{
        linea = "<p>Usuario o contraseña incorrectos</p>"
        hideInput.insertAdjacentHTML(
          "afterend",
          linea 
        );
      }
    }
  };
  ajax.open("POST", "../../proyectoFinal/php/forms/login.php", true);
         let formData = new FormData();

           formData.append('user', username);
           formData.append('pass', password);
         
          ajax.send(formData);
}
     
     
