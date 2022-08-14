function sendEmail(){

  Email.send({
    SecureToken : "03aed156-fabd-41c6-a634-4e8c5b18ece9",
    To : 'info@electriczone.ca',
    From : 'waymarketingltd@gmail.com',
    Subject: `[Electric Zone] ${document.querySelector("#subject").value}`,
    Body : 
    `
    Name: ${document.querySelector("#name").value}<br><br>

    Email: ${document.querySelector("#email").value}<br><br>

    Phone: ${document.querySelector("#phone").value}<br><br>

    Message: ${document.querySelector("#message").value}
    `
  }).then(
    alert(`Thank you, ${document.querySelector("#name").value}. Your message has been sent successfully`)
  );

}
