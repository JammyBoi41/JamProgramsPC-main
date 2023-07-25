function sendEmail() {
    Email.send({
      SecureToken : "36826a4a-184c-4bd6-9fa5-8dbd98ff6b6a",
      To : 'jaminchung@gmail.com',
      From : document.getElementById('email').value,
      Subject : "New Contact Email",
      Body : document.getElementById('message').value
  }).then(
    message => alert(message)
  );


}


