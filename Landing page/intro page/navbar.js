


function fun() {
    (setTimeout(() => {
        document.getElementById('loader-screen').style.display='none'
        document.getElementById('navbar').style.display='flex'
        document.getElementById('primary-button-box').style.display='block'
        document.getElementById('section').style.display='flex'
        document.getElementById('summary-area').style.display='block'
       
        document.getElementsByClassName('big-img-box')[0].style.display='flex'
        document.getElementById('testimonial-area').style.display='block'
        document.getElementById('feedback-area').style.display='block'
        document.getElementById('footer').style.display='block'
        document.getElementById('sidebar-area').style.display='flex'
      
      
        document.getElementsByTagName('body')[1].style.overflowY='auto'
      
      

    },1000))
}
addEventListener ('load',fun)





if (window.matchMedia("(max-width: 1100px)").matches) {
    // Viewport is less or equal to 700 pixels wide
    document.getElementsByClassName('summary-boxicon')[0].classList.remove('bx-lg')
    document.getElementsByClassName('summary-boxicon')[0].classList.add('bx-md')
    document.getElementsByClassName('summary-boxicon')[1].classList.remove('bx-lg')
    document.getElementsByClassName('summary-boxicon')[1].classList.add('bx-md')
    document.getElementsByClassName('summary-boxicon')[2].classList.remove('bx-lg')
    document.getElementsByClassName('summary-boxicon')[2].classList.add('bx-md')
    document.getElementsByClassName('summary-boxicon')[3].classList.remove('bx-lg')
    document.getElementsByClassName('summary-boxicon')[3].classList.add('bx-md')
    
  }
   else{
    
   }
   
  
   
   
//    function sideshowopen(e) {
//        if(e.target=hambur){

           
//            document.body.querySelector('#sidebar').style.display="flex"
//         }
//         else if(e.target!=hambur){
//             document.body.querySelector('#sidebar').style.display="none"
//         }
        
     
//     }
//   window.addEventListener('click',sideshowopen)

  
    // Viewport is less or equal to 700 pixels wide
  
    




 

