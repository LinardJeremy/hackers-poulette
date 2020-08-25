<?php
$mail;
$reason = $_POST['subject'];
$gender = $_POST['gender'];
$country = $_POST['country'];

$object = "We have receive a request from you";
if (isset($_POST['mail'])){
$mail = $_POST['mail'];
}
else {
    echo "Nop il manque des infos connard !";
}
if($gender==="Man"){
    $gender = "Sir";
}
else {
    $gender="Madam";
}
// header('Location: test.html');
// exit();
// mail($mail, 'test', 'test');
//   $sujet = "Email de test";
  $corp = "Hello $gender this email is send to you because we havec receive an request from you about $reason
  ";
  $headers = "From: linard.jeremy.5@gmail.com";
  if (mail($mail, $object, $corp, $headers)) {
    echo "Email envoyé avec succès à $mail ...";
  } else {
    echo "Échec de l'envoi de l'email...";
  }

     



?>