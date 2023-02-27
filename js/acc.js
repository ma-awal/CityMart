var acc=document.querySelectorAll(".acc-btn")

acc.forEach((btn)=>{
   btn.addEventListener("click",function(){
      this.classList.toggle('active')
       
       var panel=this.nextElementSibling
      if(panel.style.maxHeight){
         panel.style.maxHeight=null;
      } else{
          panel.style.maxHeight=panel.scrollHeight+ "px"
       }

   })
})
 

 
