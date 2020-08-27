let labelOther = document.getElementById("labelDefineOther");
let inputOther = document.getElementById("inputOtherText");
let send = document.getElementById('send');
let lastname = document.getElementById('lastnameInput');
let firstname = document.getElementById('firstnameInput');
let errorDiv = document.getElementById('error');
let mail = document.getElementById('emailInput');
let selectCountry = document.getElementById('CountrySelect');
let form = document.getElementById('form');
let genderSelect = document.getElementById('genderSelect');
let textArea = document.getElementById('message');
let classAlert = "labelOff";
labelOther.className="labelOn";
inputOther.className="labelOn";



document.getElementById('subject3').addEventListener('click',function(){
    labelOther.className="labelOn";
    inputOther.className="labelOn";
})
function onclickRadio(){
    labelOther.className="labelOff";
    inputOther.className="labelOff";
}


function validateForm(){
    //  event.preventDefault();
    if (lastname.value == "" || firstname.value=="" || mail.value=="" ||selectCountry.value=="" || genderSelect.value=="Choose"
      ||textArea.value==""){
        event.preventDefault();
        classAlert = "errorOn";
        errorDiv.className=classAlert;
        alert("Error : Can't send the form to serv, form is incomplete !");
    }
    else {
        form.setAttribute('action','assets/developpement.php');
    }
    if (lastname.value ==""){
        lastname.classList.add('is-invalid');
    }
    if(firstname.value==""){
        firstname.classList.add('is-invalid');  
    }
    if (mail.value==""){
        mail.classList.add('is-invalid');
    }
    if (selectCountry.value==""){
        selectCountry.classList.add('is-invalid');
    }
    if (genderSelect.value=="Choose"){
        genderSelect.classList.add('is-invalid');
    }
    if (textArea.value==""){
        textArea.classList.add('is-invalid');
    }
};

  
