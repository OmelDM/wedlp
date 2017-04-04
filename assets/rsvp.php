<?php

	$photoFile = '';
	if (isset($_FILES['photo']) && '' != $_FILES['photo']['name']) {
		$photoFile = "uploads/" . $_FILES['photo']['name'];
		move_uploaded_file($_FILES['photo']['tmp_name'], $photoFile);
	}

	$finalmessage = '';
	$errorMessage = '';
	$name = '';
	$events = '';
	if ('' == $_POST['name'] || '' == $_POST['events']) {
		$errorMessage = 'Please fill all required fields.';
	} else {
		$name = $_POST['name'];
		$finalmessage .= $name . '\n\n';
		$events = $_POST['events'];
		if (is_array($events)) {
			$finalmessage .= implode(', ', $events) . '\n\n';
		}
	}

	if ('' != $errorMessage) {
		header('HTTP/1.1 500 Internal Server Error');
		die(json_encode(array('type'=>'error', 'text' => $errorMessage)));
	}

// SEND RSVP MAIL
	$email_to  =  'omeldm@gmail.com';
	$headers = "From: lovepage-noreply@lovepage.com\r\n";
	$headers .= "Reply-To: lovepage-noreply@lovepage.com\r\n";
	$subject = "RSVP message from Mr/Mrs ".$name;
	$output = '';

	$wishMessage = 'Name: ' . $name . '\n\n';
	$wishMessage .= 'Wish: ' . $_POST['wish'] . '\n\n';
	$wishMessage .= 'Photo: ' . $photoFile . '\n\n';

	if(mail($email_to, $subject, $finalmessage, $headers) &&
			mail('omeldm@gmail.com', 'Add wish', $wishMessage, $headers)) {
		$output = json_encode(array('type'=>'success', 'text' => 'Message Sent'));
	} else {
		header('HTTP/1.1 500 Internal Server Error');
		$output = json_encode(array('type'=>'error', 'text' => 'Can not send message.'));
	}

	// SEND WISH MAIL

	die($output);

?>
