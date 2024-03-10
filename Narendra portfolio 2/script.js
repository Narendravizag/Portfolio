const form =document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone  = document.getElementById("phone");
const message = document.getElementById("message");


  function sendEmail(){
  // const bodyMessage = 'name : ${name.value} <br> email : ${email.value}<br> phone Number : ${phone.value}<br> Message : ${message.value}';


  email.send({
    Host : "smtp.elasticemail.com",
    Username : "a.narendrareddy976@gmail.com",
    Password : "F382828FF12DAA99B1CFB61BD15F6A9E6C96",
    To : 'a.narendrareddy976@gmail.com',
    From : "a.narendrareddy976@gmail.com",
    Subject :"Portfolio Hiring Person",
    Body : "name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Phone Number: " + document.getElementById("phone").value + "<br> Message: " + document.getElementById("message").value
}).then(
  message => {
    if (message == "OK") {
      Swal.fire({
        title: "SUCCESS!",
        text: "Message Sent Successfully!",
        icon: "success"
      });

    }
  }
);
} 
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // checkInputs();
  sendEmail();
})