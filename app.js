const trialBtn = document.getElementById("trial");
const inpot = document.querySelectorAll(".blok");
const para1 = document.querySelector(".firstName");
const para2 = document.querySelector(".lastName");
const para3 = document.querySelector(".email");
const para4 = document.querySelector(".password");
const svF = document.querySelector(".firstN");
const svL = document.querySelector(".lastN");
const svE = document.querySelector(".svemail");
const svP = document.querySelector(".svpass");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
trialBtn.addEventListener("click", function(){
   inpot.forEach(function(e){
 if(e.id == "firstName"){
    if(e.value == ""){
     para1.textContent = "first Name cannot be empty";
     svF.classList.add("invis");
     e.classList.add("inbor");
     setTimeout(function(){
      svF.classList.remove("invis");
      e.classList.remove("inbor");
      para1.textContent = "";
     }, 600)
    }else{
     e.value = "";
    }
  
 }else if(e.id == "lastName"){
   if(e.value == ""){
    para2.textContent ="last Name cannot be empty";
    svL.classList.add("invis");
    e.classList.add("inbor");
    setTimeout(function(){
     svL.classList.remove("invis");
     e.classList.remove("inbor");
     para2.textContent = "";
    }, 600)
   }else{
    e.value = "";
   }
 }else if(e.id == "email"){

   if(e.value.match(mailFormat)){

      e.value ="";
   }else{
        para3.textContent = "looks like this is not an email";
        svE.classList.add("invis");
        e.classList.add("inbor");
        setTimeout(function(){
                   e.classList.remove("inbor");
                   para3.textContent = "";
                   svE.classList.remove("invis");
        }, 600);
   }

 }else if(e.id == "password"){

   if(e.value == ""){
    para4.textContent = "password cannot be empty";
    svP.classList.add("invis");
    e.classList.add("inbor");
    setTimeout(function(){
               e.classList.remove("inbor");
               para4.textContent = "";
               svP.classList.remove("invis");
    }, 600);
   }else{
    e.value = "";
   }
 }
});
});