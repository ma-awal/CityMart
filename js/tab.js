 const tab=document.querySelector(".tab")
 
 const btns=document.querySelectorAll(".btn");
 const content=document.querySelectorAll(".tabcontent")
 
tab.addEventListener("click",(e)=>{
   const id=e.target.dataset.id;
   if(id){
      btns.forEach((btn)=>{
         btn.classList.remove("active")
      })
      e.target.classList.add("active")
      content.forEach((article)=>{
         article.classList.remove("active")
      })
   }
 
   const element=document.getElementById(id)
   element.classList.add("active")
})