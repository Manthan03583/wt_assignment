function gcd(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var gcd = 1;
    var min = n1<n2? n1:n2;
    var i =1;
    while(i<=min){
        if(n1%i==0 && n2%i==0){
            gcd = i;
        }
        i = i + 1;
    }

    alert(gcd+" is gcd of numbers");
}