function validate(){
    var email = document.getElementById("e").value;
    var reg = /^[a-zA-Z0-9]+@[a-z]+.[a-z]+$/;

    if(email.match(reg)){
        alert("valid");
    }
    else{
        alert("invalid");
    }
}