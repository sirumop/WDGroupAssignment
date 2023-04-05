const $btnLogin = document.getElementById('btnLogin')
const btnLogout = document.getElementById('btnLogout')
const $btnReg = document.getElementById('btnReg')
const $btnRegLink = document.getElementById('btnRegLink')
const loginForm = document.getElementById('loginForm')
const regForm = document.getElementById('regForm')
const $loginInfo = $('#loginInfo')
const isLoggined = localStorage.getItem('isLogined')


// onload event

$('#regForm').hide()	//in modal window

$(document).ready(function(){
    $("#modalBtn").click(function(){
		console.log("Modal opened!");
		$('#loginForm').show()
		$('#regForm').hide()
		$('#exampleModalLabel').text('Login')
    });
  });
//if logined
if(isLoggined){
	$('.login').hide()
	$('.user').show()
	// $('#userLoginID').text(localStorage.getItem('loginID'))
	$('#userLoginID').text('LogOut')
}
else {
	$('.login').show()
	$('.user').hide()
}
//login  btn
loginForm.addEventListener('submit',function(e){
	e.preventDefault()
	login()}
)
//log out btn
btnLogout.addEventListener('click',function(){
	localStorage.clear()
	location.href = 'index.html'
})
//register btn
$btnRegLink.addEventListener('click',function(){
	$('#loginForm').hide()
	$('#regForm').show()
	$('#exampleModalLabel').text('Regist')
}) 
//register account
regForm.addEventListener('submit',function(e){
	e.preventDefault()

	if(validateForm())
	{
	$('#loginForm').show()
	$('#regForm').hide()
	$('#exampleModalLabel').text('Login')
	}
}) 


function login(){
	const id = loginForm.loginID.value
	const pwd = loginForm.pwd.value

	if(id=='test' && pwd=='test'){
		localStorage.setItem('loginID','test')
		localStorage.setItem('isLogined',true)
		$('#Feedback').html('')
		
		$('.login').hide()
		$('.user').show()
		$('#userLoginID').text(localStorage.getItem('loginID'))
		$('#exampleModal').modal('hide')

	}
	else{
		$('#Feedback').html('Please check ID/Password again.')
		$('#Feedback').show()
		return false;
	}
}

function validateForm() {
	const id = regForm.loginID.value
	const email = regForm.email.value
	const pwd = regForm.pwd.value


	if (id === '') {
	  $('#idFeedback').html('Please enter an ID.')
	  $('#idFeedback').show()
	  return false;
	} else {
		$('#idFeedback').html('')
	}
	

	if (email === '') {
	  $('#emailFeedback').html('Please enter a email address.')
	  $('#emailFeedback').show()
	  return false;
	} else {
		$('#emailFeedback').html('')
	}

	if (isValidEmail(email)) {
		$('#emailFeedback').html('')
	} else {
		$('#emailFeedback').html('Please enter a valid email address.')
	  	$('#emailFeedback').show()
	  	return false;
		
	}
	if (pwd === '') {
		$('#passwordFeedback').html('Please enter a password.')
		$('#passwordFeedback').show()
		return false;
	} else {
		$('#passwordFeedback').html('')
	}

	return true;
  }
  function isValidEmail(email) {
    // Regular expression to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email against the regex pattern
    return emailRegex.test(email);
  }