if ($_SERVER["REQUEST_METHOD"] == "POST") {
       if (
           !empty($_POST['first_name'])
           && !empty($_POST['last_name'])
           && !empty($_POST['email'])
           && !empty($_POST['phone'])
           && !empty($_POST['message'])
       ) {
           $first_name = $_POST["first_name"];
           $last_name = $_POST["last_name"];
           $email = $_POST["email"];
           $phone = $_POST["phone"];
           $message = $_POST["message"];
           $to = "recipient@example.com";
           $subject = "Contact Form Submission";
           $body = "First Name: $first_name\nLast Name: $last_name\nEmail: $email\nPhone: $phone\nMessage: $message";
           $headers = "From: $email";
           if (mail($to, $subject, $body, $headers)) {
               echo "Message sent successfully!";
           } else {
               echo "Failed to send message.";
           }
       }
   }