const form = document.getElementById('form');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm-password');
const passError = document.querySelector('.pass-mismatch');


form.addEventListener('submit', (event)=>{
    if(password.value !== confirmPass.value){
        passError.textContent = "*Password didn't match";
        event.preventDefault();
    }else if(password.value === confirmPass.value){
        passError.textContent = '';
    }
})

confirmPass.addEventListener('input',()=>{
    if(password.value.length == confirmPass.value.length){
        if(confirmPass.value === ''){
            passError.textContent = '';
        }else if(password.value !== confirmPass.value){
            passError.textContent = "*Password didn't match";
        }else{
            passError.textContent = '';
        }
    }
})