function insert() {

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var parrafo = document.getElementById("parrafo");

  var ajax = new XMLHttpRequest();
  ajax.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
    
    if (ajax.responseText == "LOGINOK") {
      sessionStorage.setItem("user", username);
      var user = sessionStorage.getItem("user");
      var url = '../../proyectoFinal/admin-panel/index.html?username=' + user;
      window.open(url,"_self");
    }else{
      parrafo.innerHTML="<p>Usuario o contraseña incorrecta</p>";
    }
  }
};
ajax.open("POST", "../../proyectoFinal/php/forms/login.php", true);
       let formData = new FormData();

         formData.append('user', username);
         formData.append('pass', password);
       
        ajax.send(formData);
}
   
   
