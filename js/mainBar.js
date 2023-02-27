
 
   const navBar=document.querySelector('.mainbar .navbar')
     navBar.addEventListener("click",(e)=>{
      const bar=document.querySelector(".menu_bar")
      const search=document.querySelector(".search_bar")
      const todo=document.querySelector(".todo_items")
      const id=e.target.className
       if(id==="barimg"){
         bar.style.transform="translateX(0)"
       }
      if(id==="searchimg" ){
         search.style.transform="translateX(0)"
       }
      if(id==="todoimg"){
         todo.style.transform="translateX(0)"
      }
     
     })
   const del= document.querySelectorAll(".cross")
   const bar=document.querySelector(".menu_bar")
   const search=document.querySelector(".search_bar")
   const todo=document.querySelector(".todo_items")
   del.forEach((item)=>{
      item.addEventListener("click",()=>{
         bar.style.transform="translateX(-100%)"
         search.style.transform="translateX(-100%)"
         todo.style.transform="translateX(-100%)"
      })
   })
 
     
  
   
 