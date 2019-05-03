<?php
// Check for empty fields
if(empty($_POST['name'])  		||
   empty($_POST['email']) 		||
   empty($_POST['phone']) 		||
   empty($_POST['message'])	||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
	echo "No arguments Provided!";
	return false;
   }
 $ip = '';
  if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $ip = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } else {
        $ip = $_SERVER['REMOTE_ADDR'];
    }

$data = array(
                'secret' => 'XXXXXXXXX',//insert google captcha code
                'response' => $_POST["captcha"],
                'ip' => $ip
            );
            $url = 'https://www.google.com/recaptcha/api/siteverify';        
            $curl = curl_init();
            curl_setopt($curl, CURLOPT_URL, $url);
            curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
            $result = json_decode(curl_exec($curl), true);
            curl_close($curl);        
if($result["success"]===false)
{
	echo "Error en el captcha";
	return false;
}
{
	$name = $_POST['name'];
	$email_address = $_POST['email'];
	$phone = $_POST['phone'];
	$message = $_POST['message'];
	
	// Create the email and send the message
	$to = 'adriansanchezcarchano@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the 		form will send a message to.
	$email_subject = "Website Contact Form:  $name";
	$email_body = "You have received a new message from your website contact form.\n\n"."Here are the details:\n\nName: $name\n\nEmail: 		$email_address\n\nPhone: $phone\n\nMessage:\n$message";
	$headers = "From: noreply@adriansanchezcarchano.es\n"; // This is the email address the generated message will be from. We recommend using 		something like noreply@yourdomain.com.
	$headers .= "Reply-To: $email_address";	
	mail($to,$email_subject,$email_body,$headers);
	return true;	
}
	
		
?>
