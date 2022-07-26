function reverse(){
    var n = parseInt(prompt("Enter a number",""));
    var sum=0;
    while(n>0){
        var r = n%10;
        sum = (sum*10)+r;
        n= Math.floor(n/10);
    }
    alert(sum);
}