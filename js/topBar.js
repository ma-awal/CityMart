const link=document.querySelector(".locate_link")
const locationForm=document.querySelector(" .location")
 link.addEventListener("click",()=>{
   locationForm.style.transform="translateX(0)"
 })

 const btn=document.querySelector(".location_btn")
 btn.addEventListener("click",()=>{
   locationForm.style.transform="translateX(-100%)"
 })