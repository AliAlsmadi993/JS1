var fname = document.getElementById('fname');
var bdate = document.getElementById('bdate');
var email = document.getElementById('email');
var confirmEmail = document.getElementById('confirmEmail');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');

var fnameError = document.getElementById('fnameError');
var bdateError = document.getElementById('bdateError');
var emailError = document.getElementById('emailError');
var confirmEmailError = document.getElementById('confirmEmailError');
var passwordError = document.getElementById('passwordError');
var passwordStrengthError = document.getElementById('passwordStrengthError');

fname.addEventListener('input', function() {
    var regex = /\d/; 
    if (regex.test(fname.value)) {
        fnameError.textContent = 'Numbers are not allowed';
        fnameError.className = 'error';
    } else {
        fnameError.textContent = 'Looks good!';
        fnameError.className = 'success';
    }
});

bdate.addEventListener('input', function() {
    var regex = /^\d{2}\/\d{2}\/\d{4}$/; 
    if (!regex.test(bdate.value)) {
        bdateError.textContent = 'The format should be dd/mm/yyyy';
        bdateError.className = 'error';
    } else {
        bdateError.textContent = 'Looks good!';
        bdateError.className = 'success';
    }
});

email.addEventListener('input', function() {
    var regex = /^\S+@\S+\.\S+$/; 
    if (!regex.test(email.value)) {
        emailError.textContent = 'The e-mail is not valid';
        emailError.className = 'error';
    } else {
        emailError.textContent = 'Looks good!';
        emailError.className = 'success';
    }
});

confirmEmail.addEventListener('input', function() {
    if (confirmEmail.value !== email.value) {
        confirmEmailError.textContent = 'Email addresses do not match';
        confirmEmailError.className = 'error';
    } else {
        confirmEmailError.textContent = 'Email confirmed!';
        confirmEmailError.className = 'success';
    }
});

password.addEventListener('input', function() {
    var regex = /^[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(password.value)) {
        passwordStrengthError.textContent = 'Password must be at least 8 characters long, contain uppercase, lowercase, a number, and a special character';
        passwordStrengthError.className = 'error';
    } else {
        passwordStrengthError.textContent = 'Strong password!';
        passwordStrengthError.className = 'success';
    }
});

confirmPassword.addEventListener('input', function() {
    if (confirmPassword.value !== password.value) {
        passwordError.textContent = 'Passwords do not match';
        passwordError.className = 'error';
    } else {
        passwordError.textContent = 'Passwords match!';
        passwordError.className = 'success';
    }
});
