function sendEmail(){

  Email.send({
    SecureToken : "03aed156-fabd-41c6-a634-4e8c5b18ece9",
    To : 'waymarketingltd@gmail.com',
    From : 'waymarketingltd@gmail.com',
    Subject: document.querySelector("#subject").value,
    Body : 
    `
    Name: ${document.querySelector("#name").value}<br>
    Email: ${document.querySelector("#email").value}<br>
    Phone: ${document.querySelector("#phone").value}<br>
    Message: ${document.querySelector("#message").value}<br>
    `
  }).then(
    alert("Message sent successfully")
  );
  
}
