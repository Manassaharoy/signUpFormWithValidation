const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const pnumber = document.getElementById('pnumber');
const address = document.getElementById('address');
const postcode = document.getElementById('postcode');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const pnumberValue = pnumber.value.trim();
	const addressValue = address.value.trim();
	const postcodeValue = postcode.value.trim();
	


    if( usernameValue === '' || usernameValue == null){ 
        
        setErrorFor(username, 'Username cannot be blank');
        
      }
    else{
        setSuccessFor(username);
        }


             if(emailValue === '') {
                 setErrorFor(email, 'Email cannot be blank');
              } else if (!isEmail(emailValue)) {
                   setErrorFor(email, 'Not a valid email');
              } else {
                        setSuccessFor(email);
                     }
            
                    
                            if(passwordValue === '') {
                                setErrorFor(password, 'Password cannot be blank');
                            } else if (passwordValue.length < 6 ){
                                setErrorFor(password, 'Password length is below 6');
                            } 
                              else if (passwordValue.length > 10 ){
                                setErrorFor(password, 'Password length is greater then 10');
                            } 
                              else {
                                setSuccessFor(password);
                            }


                                        if(password2Value === '') {
                                            setErrorFor(password2, 'Password cannot be blank');
                                        } else if(passwordValue !== password2Value) {
                                            setErrorFor(password2, 'Passwords does not match');
                                        } else{
                                            setSuccessFor(password2);
                                        }


                                                    if(pnumberValue === ''){
                                                        setErrorFor(pnumber, 'Number cannot be blank');
                                                    }
                                                    
                                                    else if(isPhone(pnumberValue))
                                                    {
                                                        setSuccessFor(pnumber);
                                                    }
                                                    else{
                                                        setErrorFor(pnumber, 'Not a valid number');}

                                                                        if( addressValue === '' || addressValue == null){ 
                        
                                                                            setErrorFor(address, 'Address cannot be blank');
                                                                            
                                                                        }
                                                                        else{
                                                                            setSuccessFor(address);
                                                                            }


                                                                                        if(postcodeValue === '') {
                                                                                            setErrorFor(postcode, 'Postcode cannot be blank');
                                                                                        } else if( postcodeValue.length > 4 || postcodeValue.length < 4) {
                                                                                            setErrorFor(postcode, 'Postcode not valid');
                                                                                        }
                                                                                        else {
                                                                                            setSuccessFor(postcode);
                                                                                        }


}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(pnumber) {
	return /^(\+)?(88)?01[0-9]{9}$/.test(pnumber);  
}


