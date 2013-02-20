<?php

  $url = 'http://eventargs.com/tixers';
  $destination = 'fiveisprime@me.com';

  $name = $_POST['Name'];
  $email = $_POST['Email'];
  $city = $_POST['City'];
  $state = $_POST['State'];

  $message = $name . ' wants to know when Tixers is live. Contact them at ' . $email . '. They are in ' . $city . ', ' . $state;
  $message = wordwrap($message, 70, "\r\n");

  mail($destination, 'Somebody wants to know about Tixers.', $message);

  header('Location: ' . $url);
  exit;

?>
