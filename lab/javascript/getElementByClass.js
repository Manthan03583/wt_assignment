function show(){
    var element = document.getElementsByClassName("a1");
    for( i=0;i<element.length;i++){
        element[i].style.color = "red";
    }
}

function showbytag(){
    var element = document.getElementsByTagName("p");
    for( i=0;i<element.length;i++){
        element[i].style.color = "red";
    }
}