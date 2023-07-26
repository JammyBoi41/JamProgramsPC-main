function sendEmail() {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const body = `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`;

  Email.send({
    SecureToken: "36826a4a-184c-4bd6-9fa5-8dbd98ff6b6a",
    To: "jaminchung@gmail.com",
    From: "newsender@jamprograms.com",
    Subject: "New Contact Email",
    Body: body,
  }).then(
    (message) => {
      alert("Email sent successfully!");
      resetForm();
    }
  );
}

function resetForm() {
  document.getElementById("first-name").value = "";
  document.getElementById("last-name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
}