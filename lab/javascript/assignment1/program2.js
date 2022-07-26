function convert(){
    var tc = parseInt(document.getElementById("cel").value);
    var tf = tc * (5/18) +32;
    alert("Temperature in Fahrenheit "+tf);
}