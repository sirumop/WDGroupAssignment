function checkPermit(url){
	const isLoggined = localStorage.getItem('isLogined')
	if(isLoggined){
		location.href = url
	}
	else{
		alert('Please use the service after login.')
		return
	}

}