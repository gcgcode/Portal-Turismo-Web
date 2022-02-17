 //GENERADOR DE CONTRASEÑAS
 const  generateRandomString = (num) => {
	var resultado="";
	 let result1= (Math.random()*1000000000000000000).toString(36).substring(0,num);
	 for (let index = 0; index < result1.length; index++) {
		 if(result1.charAt(index)!='.'){
		 resultado=resultado+result1.charAt(index);
		 }
	 }
	 return resultado;
}
	var p=generateRandomString();

//ENVIO DE EMAIL (SMTP)

function sendEmail(e){
	Email.send({
		Host:"smtp.gmail.com",
		Username:"Tourist.maps.recuperacion@gmail.com",
		Password:"Touristmap1234",
		To: e,
		From: "Tourist.maps.recuperacion@gmail.com",
		Subject:"Sending Email Using JS",
		Body: `Tu nueva contraseña es: ${p}`,
		
	})
	.then(function(message){
		
   // ENVIO CORREO A RECEPCION.PHP
			var ajax = new XMLHttpRequest();
			ajax.onreadystatechange = function(){
				if (ajax.readyState == 4 && ajax.status == 200) {
					alert("Correo enviado correctamente");
				}
	
			};
			
			ajax.open("POST", "./forms/recepcion.php", false);
			let formData = new FormData();

			formData.append("pass", p);
			formData.append("correo", e);

			ajax.send(formData);
});
}
