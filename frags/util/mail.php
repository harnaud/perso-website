<?php
    $data = json_decode(file_get_contents("php://input"));
    $lastName = $data->lastName;
    $firstName = $data->firstName;
    $email = $data->email;
    $message = $data->message;
    $ip = $_SERVER['REMOTE_ADDR'];
    $msg = "First name: " . $firstName . "\nLast name: " . $lastName . "\nEmail: " . $email . "\nIP : " . $ip . "\n---\nMessage: " . $message;
    mail("arnaud.v.hebert@gmail.com", "ArnaudHebert.com - " . $firstName . " left a message!" , $msg);
?>