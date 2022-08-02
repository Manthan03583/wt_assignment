function isPrime(){
    var n = parseInt(prompt("Enter a number",""));
    var count = 0;
    var i = 1;
    while(i<=n){
        if(n%i == 0){
            count = count+1;
        }
        i = i + 1;
    }

    if(count == 2){
        alert("Prime");
    }
    else{
        alert("Not Prime");
    }

}