<?php

if(isset($_POST['email']) && $_POST['email'] != '')
{

    $userName = $_POST['name'];
    $userEmail = $_POST['email'];
    $message = $_POST['message'];


    $to = "vijaykamat@live.com";
    $body = "";


    $body.= "From ".$userName. "\r\n";
    $body.= "Email ".$userEmail. "\r\n";
    $body.= "Message ".$message. "\r\n";

    mail($to, "Message from Porfolio", $body);
}

?>
