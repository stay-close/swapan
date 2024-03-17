// Code for Main Menu Tooltip show on hover

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

// code for Circular progress Bar

$(function(){

    $('.circlechart').circlechart();
  
  });


  // Code for Contact form send email 

  (function(){
    emailjs.init({
      publicKey: "E8zJMmaRwRBCqcsnY",
    });
 })();


 const submitBtn=document.querySelector('.send_message');
 const serviceId='service_xzlo2u8';
 const templeteId='template_ufdv3e8';

 submitBtn.addEventListener('click',e=>{
  e.preventDefault()
  const name= document.querySelector('#name').value
   const email= document.querySelector('#email').value
   const subject= document.querySelector('#subject').value
   const message= document.querySelector('#message').value
  const infos={
    name: name,
    email: email,
    subject:subject ,
    message: message,
  }
 emailjs.send(serviceId,templeteId,infos)
 .then(alert('Your Email has been sent!'))
 })

