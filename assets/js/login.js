$(function() {

    $('#login-form-link').click(function(e) {
    $("#login-form").delay(100).fadeIn(100);
     $("#register-form").fadeOut(100);
    $('#register-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
  $('#register-form-link').click(function(e) {
    $("#register-form").delay(100).fadeIn(100);
     $("#login-form").fadeOut(100);
    $('#login-form-link').removeClass('active');
    $(this).addClass('active');
    e.preventDefault();
  });
});

$(document).ready(function() {
  $("#login-form").validate({
    rules: {
      username : {
        required:true, 
        minlength:3, 
        maxlength:15,
        nowhitespace: true,
        alphanumeric: true,
      },
      password : {
        required:true,
         minlength:6, 
         maxlength:15,
         nowhitespace: true,
      }
    },
    messages: {
      username: {
        required:"Introduce el usuario",
        minlength:"El usuario debe tener almenos 3 caracteres",
        maxlength:"El usuario no puede contener más de 15 caracteres",
        nowhitespace:"No puede contener espacios en blanco",
        alphanumeric:"El usuario solo puede contener numeros y letras"
      },
      password: {
        required:"Introduce la contraseña",
        minlength:"La contraseña debe de tener almenos 6 caracteres",
        maxlength:"La contraseña no puede contener más de 15 caracteres",
        nowhitespace:"La contraseña solo puede contener numeros y letras"
      }
    } 
  });
});

$(document).ready(function() {
  $("#register-form").validate({
    rules: {
      username: {
        required:true, 
        minlength:3, 
        maxlength:15,
        nowhitespace: true,
        alphanumeric: true,
      },
      email: {
        email: true
      },
      password: {
        required:"Introduce la contraseña",
        minlength:"La contraseña debe de tener almenos 6 caracteres",
        maxlength:"La contraseña no puede contener más de 15 caracteres",
        nowhitespace:"La contraseña solo puede contener numeros y letras"
      }
    },
    messages: {
      username: {
        required:"Introduce el usuario",
        minlength:"El usuario debe tener almenos 3 caracteres",
        maxlength:"El usuario no puede contener más de 15 caracteres",
        nowhitespace:"No puede contener espacios en blanco",
        alphanumeric:"El usuario solo puede contener numeros y letras"
      },
      password: {
        required:"Introduce la contraseña",
        minlength:"La contraseña debe de tener almenos 6 caracteres",
        maxlength:"La contraseña no puede contener más de 15 caracteres",
        nowhitespace:"La contraseña solo puede contener numeros y letras"
      }
    } 
  });
});