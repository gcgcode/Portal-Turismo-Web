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
      "usernameLogin" : {required:true, minlength:3, maxlength:15, nowhitespace, alphanumeric, pattern: /^[A-Za-z0-9]{5,20}/},
      "passwordLogin" : {required:true, minlength:6, maxlength:15, nowhitespace, pattern: /^(?=.\d)(?=.[a-z])(?=.[A-Z]).{8,}/}
    }
  });
});