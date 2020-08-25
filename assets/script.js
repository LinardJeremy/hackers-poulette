let labelOther = document.getElementById("labelDefineOther");
let inputOther = document.getElementById("inputOtherText");
let alertBox = document.getElementById('alert');
alertBox.className ="labelOff";


document.getElementById('subject3').addEventListener('click',function(){
    labelOther.className="labelOn";
    inputOther.className="labelOn";
})
function onclickRadio(){
    labelOther.className="labelOff";
    inputOther.className="labelOff";
}


function checkForm(){
let lastname = document.getElementById("lastnameInput");
if ( lastname.value ==""){
     alertBox.className ="labelOn";
    alert("testfail");
}
else {
    document.getElementById('form').setAttribute("action","assets/developpement.php");
    alert("test");

}
};