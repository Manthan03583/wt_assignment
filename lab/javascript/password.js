function validatePassword(){
    var user = prompt("Enter a password","");
    var exp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if(user){
        if(user.match(exp)){
            alert("Strong Password");
        }
        else{
            alert("weak password");
        }
    }
    else{
        alert("password should not be empty");
    }
}