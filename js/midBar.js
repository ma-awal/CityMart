// login button
const loginBtn=document.querySelector(".login_btn")
const sign=document.querySelector('.sign_in')
 


loginBtn.addEventListener("click",()=>{
   sign.style.transform="translateX(0)"
})

const cross=document.querySelector("form .cross ")
 
 
 cross.addEventListener("click",()=>{
   sign.style.transform="translateX(-100%)"
 })



// //  cart
// const cart=document.querySelector(".cart")
// const todos=document.querySelector(".draft_todos")

// cart.addEventListener("mouseover",()=>{
//   todos.style.display="block"
// })
