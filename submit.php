<?php

  $url = 'http://www.tixers.com';
  $destination = 'info@tixers.com';

  $name = $_POST['Name'];
  $email = $_POST['Email'];

  $message = $name . ' wants to know when Tixers is live. Contact them at ' . $email;
  $message = wordwrap($message, 70, "\r\n");

  mail($destination, 'Somebody wants to know about Tixers.', $message);

  header('Location: ' . $url);
  exit;

?>
