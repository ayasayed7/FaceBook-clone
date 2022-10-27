function formValidate() {

var userName = document.getElementById("userName").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("phone").value;
var error = document.getElementById("error");
var text = "";


if( userName.length <7){
    text = "Please Enter Valid userName";
    error.innerHTML = text;
    return false;

}
else if(email.indexOf("@") == -1 && email.length < 10 ) {
    text = "Please Enter Valid Email";
    error.innerHTML = text;
    return false;

}
else if(phone.length != 11 || isNaN(phone)) {
    text = "Please Enter Valid Phone";
    error.innerHTML = text;
    return false;

} 
else {
    alert("Done");
    return true;
}

}