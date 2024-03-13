const logIn = document.querySelector('.container');
const register = document.querySelector('.register-container');
const newAcc = document.querySelector('.newAcc');
const creare=document.getElementById('creare');
newAcc.addEventListener('click', () => {
    logIn.classList.add('show');
    register.classList.add('show');
});
creare.addEventListener('click',()=>{
    logIn.classList.remove('show');
    register.classList.remove('show');
    if (verif(passR.value, passF.value)) {
       
        console.log("Account created successfully!");
    } else {
        alert("Passwords do not match. Please try again.");
    }
    
});


const inputEmail=document.getElementById('Email-r');
const passR=document.getElementById("password-conf");
const passF=document.getElementById("password-r");


function verif(passR,passF){
 return passF===passR;
}



