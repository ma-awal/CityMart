const swiper = new Swiper(".newSwiper", {
   slidesPerView: 2,
   spaceBetween: 10,
 
   loop:true,
 
   breakpoints: {
     
       
    0: {
      slidesPerView: 1,
      
    },
   
     480:{
      slidesPerView: 2,
      spaceBetween: 20
     },
    768: {
       slidesPerView: 3,
        
     },
   992: {
       slidesPerView: 4,
        
     },
 
  }
 
 
     

 });