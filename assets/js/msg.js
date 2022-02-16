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



//ENVIO DE EMAIL (SMTP)


function sendEmail(e){
	console.log("hola");
	Email.send({
		
		/*Host:"smtp.gmail.com",
		Username:"Touristmaps.recuperacion@gmail.com",
		Password:"Touristmap1234",
		To: e,
		From: "Touristmaps.recuperacion@gmail.com",
		Subject:"Sending Email Using JS",
		Body: `Tu nueva contraseña es: ${p}`,*/

		Host:"smtp.gmail.com",
		Username:"bgh0001@alu.medac.es",
		Password:"Amxmodmenu1234",
		To: e,
		From: "bgh0001@alu.medac.es",
		Subject:"Sending Email Using JS",
		Body: `Tu nueva contraseña es: ${p}`,
	})
	.then(function(message){
		alert("mail sent successfully");
    //ENVIO CORREO A RECEPCION.PHP
			var req = new XMLHttpRequest();
			req.open('POST', 'http://127.0.0.1:5501/forms/recepcion.php', false);
			req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //INDICA FORMATO DE TEXTO DEL CUERPO DE LA PETICION
			req.setRequestHeader('Access-Control-Allow-Headers', '*'); // PERMISOS DE ACCESO
			req.send(`correo="${e}"`);
			if (req.status == 200){
				console.log(req.responseText); 
			}
      //ENVIO PASS A RECEPCION.PHP
			var req2 = new XMLHttpRequest();
			req2.open('POST', 'http://127.0.0.1:5501/forms/recepcion.php', false);
			req2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); //INDICA FORMATO DE TEXTO DEL CUERPO DE LA PETICION
			req2.setRequestHeader('Access-Control-Allow-Headers', '*'); //PERMISOS DE ACCESO
			req2.send(`pass="${p}"`);
			if (req2.status == 200){
				console.log(req2.responseText)    
		}


});
}
