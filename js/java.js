document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email')
    emailValue = emailField.value;
    // 
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    console.log(emailValue, password);

    if (emailValue === 'rayhan@khan.com' && password === '123123') {
        window.location.href = 'bank.html'
    }
    else{
        alert('invlid user')
    }
})