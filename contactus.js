const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const messasge = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");  

function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;

    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;    
    }

    if(messasge.value.length < 1){
        errorNodes[2].innerText = "Please enter message";
        messasge.classList.add("error-border");
        errorFlag = true;   
    }

    if(!errorFlag){
        success.innerText = "Succesfully Dilevered!";
        alert ("Mesazhi u dergua me sukses!")
        
    }
}

function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border"); 
    email.classList.remove("error-border");
    messasge.classList.remove("error-border");
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}
