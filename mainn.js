document.getElementById("btn").addEventListener("click",Validation);
var user=document.getElementById("username");
function Username(){
    if(user.value.length==''){
        document.getElementsByClassName("hidden")[0].innerText="Please Enter your name"
    }
    else if(user.value.length<3){
        document.getElementsByClassName("hidden")[0].innerText="Please Enter your name correctly"
    }
    else{
        document.getElementsByClassName("hidden")[0].innerText=""
    }
    
}
var phon=document.getElementById("phone");
function Phon() {

    let z = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
   
    if (phon.value.match(z) === null || phon.value.length === 0)
        document.getElementsByClassName("hidden")[1].innerText = "Invalid Phone num Entered!";
    else
        document.getElementsByClassName("hidden")[1].innerText = "";
}


var mail=document.getElementById("email");
function Email() {

    let y = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
   
    if (mail.value.match(y) === null || mail.value.length === 0)
        document.getElementsByClassName("hidden")[3].innerHTML = "Invalid E-mail Entered!";
    else
        document.getElementsByClassName("hidden")[3].innerHTML = "";
}



function Validation(){
    Username();
    Phon() ;
    Email();
}