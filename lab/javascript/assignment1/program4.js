function check(){
    var string = document.getElementById("string").value;
    var regexp= /^java([A-Za-z0-9_!@#$%^&*]+)$/;
    if(regexp.test(string)){
        alert("valid");
    }
    else{
        alert("invalid");
    }
}