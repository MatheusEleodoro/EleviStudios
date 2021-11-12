<?php
$status_error = "ERRO NO ENVIO";
$from = "contato@elevistudios.com";
$to = "suporte@elevistudios.com";
$email = $_POST[ "email" ];
$subject =utf8_decode($_POST["assunto"]);
$message = utf8_decode($_POST["menssagem"]);
$headers = "From:" . $email;

if(empty($email) or empty($subject) or empty($message) ){
	echo("Desculpe nenhum campo foi preenchido");
}else{
	if ( mail( $to, $subject, $message, $headers ) ) {
      	echo( "ENVIADO" );
    } else {
      	echo "<font color='RED'>" . $status_error . "</font>";	  
		  $_POST = array();
    }
}
  ?> 