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
