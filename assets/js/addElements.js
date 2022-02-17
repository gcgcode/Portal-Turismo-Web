function validateForm() {
    var $myForm = $("#form");
    $myForm.validate({
      rules: {
        latitud : {
          required:true, 
          nowhitespace: true,
          number: true
        },
        longitud : {
           required:true,
           nowhitespace: true,
           number: true
        },
        direccion : {
            required:true,
            alphanumeric: true
        },
        telefono : {
            required:true,
            phoneUS: true
        },
        titulo : {
            required:true,
            nowhitespace: true,
            alphanumeric: true
        },
        img : {
          required: true,
          url: true
        }
      },
      messages: {
        latitud: {
          required:"Introduce la latitud",
          nowhitespace:"No puede contener espacios en blanco",
          number:"Solo se admiten números"
        },
        longitud: {
          required: "Introduce la longitud",
          nowhitespace: "No puede contener espacios en blanco",
          number: "Solo se admiten números"
        },
        direccion: {
          required: "Introduce la direccion",
          alphanumeric: "Solo se admiten letras y números"
        },
        telefono : {
          required:"Introduce el telefono",
        },
        titulo : {
          required:"Introduce el titulo",
          alphanumeric: "Solo se admiten letras y numeros"
        },
        img : {
          required: "Introduce la URL",
        }
      }
    })
};

//VALIDATION LATITUD
function check_lat(){
  var latitud = document.getElementById("latitud").value;
  var reg = /^(-?[1-8]?\d(?:\.\d{1,18})?|90(?:\.0{1,18})?)$/;

  if( reg.test(latitud) ) {
    //do nothing
  } else {
    alert("Latitud inválida");
    latitud = document.getElementById("latitud").value = "00.0000000";
  }

}
//VALIDATION LONGITUD
function check_lon(){
  var longitud = document.getElementById("longitud").value;
  var reg = /^(-?(?:1[0-7]|[1-9])?\d(?:\.\d{1,18})?|180(?:\.0{1,18})?)$/;

  if( reg.test(longitud) ) {
  //do nothing
  } else {
    alert("Longitud inválida");
    latitud = document.getElementById("longitud").value = "-00.0000000";
  }
}

