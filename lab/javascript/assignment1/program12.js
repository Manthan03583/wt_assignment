function validate(){
    var user = document.getElementById("user").value;
    var reg = /^[a-zA-Z0-9\s ]+$/;
    
    if(user.length < 6){
        alert("username should be greater than 6 charecter");
    }
    else if(user==""){
            alert("username should not be empty");
    }
    else{
        if(user.match(reg)){
            alert("Accepted");
        }
        else{
            alert("Try again");
        }
    }
}