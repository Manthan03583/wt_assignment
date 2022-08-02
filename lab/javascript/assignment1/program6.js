function CheckPalidrome(){
    var s = document.getElementById("string").value;
    var r = s.split(" ").reverse().join(" ");

    if(s == r){
        alert("palindrome");
    }
    else{
        alert("Not Palindrome");
    }
}
