function validate(){
    var p = document.getElementById("p").value;
    var reg = /^[0-9]{10}$/;

    if(p.match(reg)){
        alert("valid");
    }
    else{
        alert("invalid");
    }
}