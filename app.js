let userName=document.getElementById("txtUserName");
let email=document.getElementById("txtEmail");
let pwd=document.getElementById("txtPwd");
let conPwd=document.getElementById("txtConPwd");
let form=document.querySelector("form");
let smsRadio = document.getElementById('sms-radio');
let emailRadio = document.getElementById('email-radio');
let agree = document.getElementById('agree');
let Use = document.getElementById('Use');

function validateInput(){
    //check username is empty 
    if(userName.value.trim()===""){
       onError(userName,"User Name cannot be empty");
    }else{
        onSuccess(userName);
    }
    if(email.value.trim()===""){
        onError(email,"Email cannot be empty");
    }else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Email is not valid");
        }else{
            onSuccess(email);
        }
    }

    //password
    if(pwd.value.trim()===""){
        onError(pwd,"Password cannot be empty");
     }else{
         onSuccess(pwd);
     }
     if(conPwd.value.trim()===""){
        onError(conPwd,"Password cannot be empty");
     }else{
         if(pwd.value.trim()!==conPwd.value.trim()){
            onError(conPwd,"Password & Confirm password not matching");
         }
         else
         onSuccess(conPwd);
    }

    if(Type_use.value.trim()===""){
        onError(Type_use,"You must select something");
     }else{
         onSuccess(Type_use);
     }


    if(!agree.checked)
    {
        document.getElementById('agree_chk_error').style.visibility='visible';
        return false;
    }
    else
    {
        document.getElementById('agree_chk_error').style.visibility='hidden';
        return true;
    }
                   


}

document.querySelector("button")
.addEventListener("click",(event)=>{
    event.preventDefault();
    validateInput();
});

function onSuccess(input){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="hidden"; 
    parent.classList.remove("error");
    parent.classList.add("success");  
}
function onError(input,message){
    let parent=input.parentElement;
    let messageEle=parent.querySelector("small");
    messageEle.style.visibility="visible";
    messageEle.innerText=message;  
    parent.classList.add("error");
    parent.classList.remove("success");

}

function isValidEmail(email){
   return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
