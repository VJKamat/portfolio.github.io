<?php
$toEmail = "vijaykaamat@live.com";
$mailHeaders = "From: " . $_POST["name"] . "<". $_POST["email"] .">\r\n";
if(mail($toEmail, $_POST["subject"], $_POST["message"], $mailHeaders)) {
print "<p class='success'>Messege Sent. Thank you.</p>";
} else {
print "<p class='Error'>Looks like something went wrong.</p>";
}
?>