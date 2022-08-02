function Max(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var n3 = parseInt(document.getElementById("n3").value);
    var max = 0;
    if(n1>n2 && n1>n3){
        max = n1;
    }
    else if(n2>n3 && n2>n1){
        max = n2;
    }
    else{
        max = n3;
    }

    alert(max+" is maximum");
}