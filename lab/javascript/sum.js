function sum(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var sum = n1+n2;
    if(n1==n2){
        sum = 3* sum;
    }
    else{
        sum = sum;
    }

    alert("Sum is two numbers "+sum);
}