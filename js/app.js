// Alart

window.alert('I Am Still Updating My Portfolio Website. Sorry for the inconvenience.')



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
  if(name!='' && email!='' && subject!=''&& message!=''){
    emailjs.send(serviceId,templeteId,infos)
    .then(alert('Your Email has been sent!'))
  }else{
    alert('Please fill all the field!')
  }
 
 })

//  load more portfolios

const loadMoreBtn=document.querySelectorAll('.load_more_btn');


const allHtmlCssPortfolios=document.querySelectorAll('.html_css_portfolios .portfolio');

const allJavascriptPortfolios=document.querySelectorAll('.javascript_portfolios .portfolio');

const allReactPortfolios=document.querySelectorAll('.react_portfolios .portfolio');

let currentItemHtmlCss=2;
let currentItemJavascript=2;
let currentItemReact=2;


loadMoreBtn.forEach((btn)=>{

  btn.addEventListener('click',(e)=>{

    if(btn.classList.contains('html_css_btn')){

  
      for(let i=currentItemHtmlCss;i<currentItemHtmlCss+2;i++){
            allHtmlCssPortfolios[i].classList.add('active');
            
      }
      currentItemHtmlCss+=2;
      if(currentItemHtmlCss>=allHtmlCssPortfolios.length){
        btn.style.display='none'
       }

    }else if(btn.classList.contains('javascript_btn')){

      for(let i=currentItemJavascript;i<currentItemJavascript+2;i++){
        allJavascriptPortfolios[i].classList.add('active');
        
         }
         currentItemJavascript+=2;

         if(currentItemJavascript>=allJavascriptPortfolios.length){
          btn.style.display='none'
         }
     }else if(btn.classList.contains('react_btn')){

      for(let i=currentItemReact;i<currentItemReact+2;i++){
        allReactPortfolios[i].classList.add('active');
        
       }
        currentItemReact+=2;
        if(currentItemReact>=allReactPortfolios.length){
          btn.style.display='none'
         }
      }

    });

});

// loadMoreBtn.addEventListener('click',()=>{
// for(let i=currentItem;i<currentItem+2;i++){
// allPortfolios[i].classList.add('active');
// }
// currentItem+=2;
// if(currentItem>=allPortfolios.length){
//   loadMoreBtn.style.display='none';
// }
// })

