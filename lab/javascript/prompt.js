function getValue(){
    var retval = prompt("Enter your name:","Your name here");
    if(retval){
        document.write("You have entered "+retval);
    }
    else{
        document.write("Ok Bye");
    }
}

function Add(){
    var n1 = prompt("Enter first number","first number");
    var n2 = prompt("Enter Second number","Second number");
    if(n1 & n2){
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        var sum = n1 + n2;
        document.write(sum);
    }
    else{
        document.write("enter numbers to  perform calculation");
    }
}

function Sub(){
    var n1 = prompt("Enter first number","first number");
    var n2 = prompt("Enter Second number","Second number");
    if(n1 & n2){
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        var sum = n1 - n2;
        document.write(sum);
    }
    else{
        document.write("enter numbers to  perform calculation");
    }
}

function Mul(){
    var n1 = prompt("Enter first number","first number");
    var n2 = prompt("Enter Second number","Second number");
    if(n1 & n2){
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        var sum = n1 * n2;
        document.write(sum);
    }
    else{
        document.write("enter numbers to  perform calculation");
    }
    
}

function div(){
    var n1 = prompt("Enter first number","first number");
    var n2 = prompt("Enter Second number","Second number");
    if(n1 & n2){
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        var sum = n1 / n2;
        document.write(sum);
    }
    else{
        document.write("enter numbers to  perform calculation");
    }
}

function validate(){
    // var enterage  = document.ageform.age.value;
    // var age = parseInt(enterage);
    // if(age>=1 && age<=60){
    //     alert("Age is "+ age);
    // }
    // else if(enterage == ""){
    //     alert("Should not be empty");
    // }
    // else{
    //     alert("Enter number is greater than 60");
    // }

    validateUser();
    validatePassword();
}

function validateUser(){
    var user = document.ageform.username.value;
    if(user){
        if(user.length < 6){
            alert("username should be greater than 6 charecter");
            return false;
        }
    }
    else if(user==""){
            alert("username should not be empty");
            return false;
    }
    else{
        return true;
    }

}

function validatePassword(){
    var user = document.ageform.password.value;
    if(user){
        if(user.length < 6){
            alert("password should be greater than 6 charecter");
            return false;
        }
    }
    else if(user==""){
            alert("password should not be empty");
            return false;
    }
    else{
        return true;
    }
}

