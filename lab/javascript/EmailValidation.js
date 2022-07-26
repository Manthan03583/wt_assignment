function validateEmail(){
    var email = document.getElementById("email").value;
    var regexp = /^([A-Za-z0-9]+)@([a-z]+)([.a-z]+)$/;
    if(regexp.test(email)){
        alert("valid");
    }
    else{
        alert("invalid");
    }
}