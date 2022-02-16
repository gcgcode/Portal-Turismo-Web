function insert() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var linea = "<p>Has iniciado sesión </p>";

    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
      if (ajax.responseText == "LOGINOK") {
        img.insertAdjacentHTML(
          "beforeend",
          linea // Backticks para img variable
        );
        window.open('../../proyectoFinal/admin-panel/addElements.html',"_self")
      }else{
        alert("Usuario o contraseña incorrectos");
      }
    }
  };
  ajax.open("POST", "../../proyectoFinal/php/forms/login.php", true);
         let formData = new FormData();

           formData.append('user', username);
           formData.append('pass', password);
         
          ajax.send(formData);
}
     
     
