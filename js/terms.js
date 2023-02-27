
const myCont=document.querySelector(".terms")
 
const btns=document.querySelectorAll(".btn_container .btn")
 
const tab=document.querySelectorAll(".tab_container .tabcontent")
 
myCont.addEventListener("click",(e)=>{
   const id=e.target.dataset.id

   if(id){
      btns.forEach((btn)=>{
         btn.classList.remove("active")
      })
      e.target.classList.add("active")
      tab.forEach((item)=>{
           item.classList.remove("active")
      })
      const element=document.getElementById(id)
      element.classList.add("active")
   }
})