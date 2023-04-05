const form = document.getElementById('contactForm')
form.addEventListener('submit',function(e){
	e.preventDefault()
	validateForm()}
)



function validateForm() {
	const name = form.name.value
	const email = form.email.value
	const message = form.message.value


	if (name === '') {
	  $('#cNameFeedback').html('Please enter your name.')
	  $('#cNameFeedback').show()
	  return false;
	} else {
		$('#cNameFeedback').html('')
	}
	

	if (email === '') {
		console.log('nono')
	  $('#cEmailFeedback').html('Please enter a email address.')
	  $('#cEmailFeedback').show()
	  return false;
	} else {
		$('#cEmailFeedback').html('')
	}

	if (isValidEmail(email)) {
		$('#cEmailFeedback').html('')
	} else {
		$('#cEmailFeedback').html('Please enter a valid email address.')
	  	$('#cEmailFeedback').show()
	  	return false;
		
	}
	if (message === '') {
		$('#cMessageFeedback').html('Please enter message.')
		$('#cMessageFeedback').show()
		return false;
	} else {
		$('#cMessageFeedback').html('')
	}

	return true;
  }
  function isValidEmail(email) {
    // Regular expression to match email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Test the email against the regex pattern
    return emailRegex.test(email);
  }