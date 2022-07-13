function getConfirmation(){
    var retval = confirm("Do you want to continue");
    if(retval){
        document.write("Users want to continue");
    }
    else{
        document.write("Get lost");
    }
}