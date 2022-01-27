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

const  generateRandomString = (num) => {
	const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let result1= (Math.random()*100000000000000000).toString(36).substring(0,num);    
	return result1;
}

function sendEmail(e){
	Email.send({
		Host:"smtp.gmail.com",
		Username:"bgh0001@alu.medac.es",
		Password:"***********",
		To: e,
		From: "bgh0001@alu.medac.es",
		Subject:"Sending Email Using JS",
		Body: `Tu nueva contraseña es: ${generateRandomString(30)}`,
	})
	.then(function(message){
		alert("mail sent successfully");
		
	});
}