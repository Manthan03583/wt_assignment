function check(){
    var string = document.getElementById("string").value;
    var regexp= /^java([A-Za-z0-9!@#$%^&*]+)$/;
    if(regexp.test(string)){
        alert("valid");
    }
    else{
        alert("invalid");
    }
}