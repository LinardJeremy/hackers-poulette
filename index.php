<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Contact</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
        <link rel="stylesheet" href="assets/style.css">
    </head>
    <body lang="eng">
        <header>
            <img  class="logo" src="assets/img/hackers-poulette-logo.png" alt="logo">
            <h1>Contact Form</h1>
        </header>
    <div id="alert"><h2>Message alert !<h2></div>
     <section class="col-10 mx-auto mb-3 sectionForm">
       
        <form id="form" method="post">
            <div class="form-group row col-12 mt-3">
                <label for="LastName" class="col-3">LastName :</label>
                <input type="text" class="form-control col-3 text-center " id="lastnameInput" placeholder="Write here your lastname">
                <label for="Firstname" class="col-3 text-center">Firstname :</label>
                <input type="text" class="form-control col-3 text-center" id="firstnameInput" placeholder="Write here your firstname">
              </div>
            <div class="form-group">
              <label for="emailAdress">Email address :</label>
              <input type="email" name="mail" class="form-control" id="emailInput" placeholder="name@example.com">
            </div>
            <div class="form-group">
              <label for="Gender">Gender :</label>
              <select class="form-control" name="gender" id="genderSelect">
                <option value="Man">Man</option>
                <option value="Woman">Woman</option>
              
              </select>
            </div>
            <div class="form-group">
              <label for="Country">Country</label>
              <select multiple class="form-control" id="CountrySelect" name="country">
                <option>Belgium</option>
                <option>England</option>
                <option>France</option>
                <option>Germany</option>
                <option>Spain</option>
              </select>
            </div>
            <label for="Gender">Choose the subject of your message :</label>
            <div class="formCheck">
              <div class="custom-control custom-radio custom-control-inline ml-5 mt-4">
                  <input onclick="onclickRadio()" class="custom-control-input" type="radio" id="subject1" name="subject" value="problem">
                  <label class="custom-control-label" for="subject1">Problem with my ordered.</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline ml-3">
                  <input onclick="onclickRadio()" class="custom-control-input" type="radio" id="subject2" name="subject" value="question">
                  <label class="custom-control-label" for="subject2">Question about product.</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline ml-3">
                  <input class="custom-control-input" type="radio" id="subject3" name="subject" value="other">
                  <label class="custom-control-label" for="subject3">Other</label>
              </div>     
          </div>
          <label id="labelDefineOther" class="labelOff">Define your subject here :</label>
          <input class="labelOff" name="subjetOther" type="text" id="inputOtherText">
            <!-- Text area -->
            <div class="form-group">
              <label for="message">Type your message here : </label>
              <textarea class="form-control" id="message" rows="3"></textarea>
            </div>
          
            <button type="submit" onclick="checkForm()" class="btn btn-info mb-3 buttonSend">Send</button>

          </form>
    </section>
<script src="assets/script.js"></script>
    </body>
</html>