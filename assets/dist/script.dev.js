"use strict";

var labelOther = document.getElementById("labelDefineOther");
var inputOther = document.getElementById("inputOtherText");
var send = document.getElementById('send');
var lastname = document.getElementById('lastnameInput');
var firstname = document.getElementById('firstnameInput');
var errorDiv = document.getElementById('error');
var mail = document.getElementById('emailInput');
var selectCountry = document.getElementById('CountrySelect');
var form = document.getElementById('form');
var genderSelect = document.getElementById('genderSelect');
var textArea = document.getElementById('message');
var classAlert = "labelOff";
labelOther.className = "labelOn";
inputOther.className = "labelOn";
document.getElementById('subject3').addEventListener('click', function () {
  labelOther.className = "labelOn";
  inputOther.className = "labelOn";
});

function onclickRadio() {
  labelOther.className = "labelOff";
  inputOther.className = "labelOff";
}

function validateForm() {
  //  event.preventDefault();
  if (lastname.value == "" || firstname.value == "" || mail.value == "" || selectCountry.value == "" || genderSelect.value == "Choose" || textArea.value == "") {
    event.preventDefault();
    classAlert = "errorOn";
    errorDiv.className = classAlert;
    alert("Error : Can't send the form to serv, form is incomplete !");
  } else {
    form.setAttribute('action', 'assets/developpement.php');
  }

  if (lastname.value == "") {
    lastname.classList.add('is-invalid');
  }

  if (firstname.value == "") {
    firstname.classList.add('is-invalid');
  }

  if (mail.value == "") {
    mail.classList.add('is-invalid');
  }

  if (selectCountry.value == "") {
    selectCountry.classList.add('is-invalid');
  }

  if (genderSelect.value == "Choose") {
    genderSelect.classList.add('is-invalid');
  }

  if (textArea.value == "") {
    textArea.classList.add('is-invalid');
  }
}

;