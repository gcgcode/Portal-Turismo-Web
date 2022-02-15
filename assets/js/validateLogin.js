function validateForm() {
  var $myForm = $("#form");
  $myForm.validate({
    rules: {
      user : {
        required:true, 
        minlength:3, 
        maxlength:15,
        nowhitespace: true,
        alphanumeric: true,
      },
      pass : {
        required:true,
         minlength:6, 
         maxlength:15,
         nowhitespace: true,
      }
    },
    messages: {
      user: {
        required:"Introduce el usuario",
        minlength:"El usuario debe tener almenos 3 caracteres",
        maxlength:"El usuario no puede contener más de 15 caracteres",
        nowhitespace:"No puede contener espacios en blanco",
        alphanumeric:"El usuario solo puede contener numeros y letras"
      },
      pass: {
        required:"Introduce la contraseña",
        minlength:"La contraseña debe de tener almenos 6 caracteres",
        maxlength:"La contraseña no puede contener más de 15 caracteres",
        nowhitespace:"La contraseña solo puede contener numeros y letras"
      }
    }
  });
};
