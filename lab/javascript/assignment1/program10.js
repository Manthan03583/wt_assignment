function countVowels(){
    var t1 = document.getElementById("t1").value;
    var count = t1.match(/[aeiou]/gi).length;

    alert(count+" vowels");
}