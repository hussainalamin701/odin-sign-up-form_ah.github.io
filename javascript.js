const password = document.getElementById("password");
const passwordC = document.getElementById("passwordC");

const submit_button = document.getElementById("submit-button");

function checkPassword(){
    if(passwordC.value !== password.value){
        alert("Wrong password confirmation");

        passwordC.style.outline = 'red';
    }else{
        alert("Successfully signed up");
    }
}

submit_button.addEventListener('click', checkPassword)