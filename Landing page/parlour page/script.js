
setInterval(() => {
    setTimeout(() => {
        document.getElementsByClassName('star')[0].style.color='hotpink'
        
    }, 500);
    setTimeout(() => {
        document.getElementsByClassName('star')[0].style.color='red'
    }, 1000);
}, 1000);
setInterval(() => {
    setTimeout(() => {
        document.getElementsByClassName('star')[1].style.color='black'
        
    }, 500);
    setTimeout(() => {
        document.getElementsByClassName('star')[1].style.color='green'
    }, 1000);
}, 1000);
setInterval(() => {
    setTimeout(() => {
        document.getElementsByClassName('star')[2].style.color='purple'
        
    }, 500);
    setTimeout(() => {
        document.getElementsByClassName('star')[2].style.color='tomato'
    }, 1000);
}, 1000);
setInterval(() => {
    setTimeout(() => {
        document.getElementsByClassName('star')[3].style.color='cyan'
        
    }, 500);
    setTimeout(() => {
        document.getElementsByClassName('star')[3].style.color='royalblue'
    }, 1000);
}, 1000);




function fun() {
    setTimeout(() => {
        document.getElementById('loader-area').style.display='none'
        document.getElementById('parlour-area').style.display='block'
    }, 1000);
}

addEventListener('load',fun)


var show_6=document.getElementsByClassName('view')[5]
var show_5=document.getElementsByClassName('view')[4]
var show_4=document.getElementsByClassName('view')[3]
var show_3=document.getElementsByClassName('view')[2]
var show_2=document.getElementsByClassName('view')[1]
var show_1=document.getElementsByClassName('view')[0]
function summary_show(e) {
    if(e.target==show_6){
        document.getElementById('summary').style.display='flex'
        document.getElementById('profile-6').style.display='flex'
        document.getElementsByTagName('body')[0].style.overflowY='hidden'
    }
  else if(e.target==show_5){
        document.getElementById('summary').style.display='flex'
        document.getElementById('profile-5').style.display='flex'
        document.getElementsByTagName('body')[0].style.overflowY='hidden'
    }
   else if(e.target==show_4){
        document.getElementById('summary').style.display='flex'
        document.getElementById('profile-4').style.display='flex'
        document.getElementsByTagName('body')[0].style.overflowY='hidden'
    }
   else if(e.target==show_3){
        document.getElementById('summary').style.display='flex'
        document.getElementById('profile-3').style.display='flex'
        document.getElementsByTagName('body')[0].style.overflowY='hidden'
    }
   else if(e.target==show_2){
        document.getElementById('summary').style.display='flex'
        document.getElementById('profile-2').style.display='flex'
        document.getElementsByTagName('body')[0].style.overflowY='hidden'
    }
   else if(e.target==show_1){
        document.getElementById('summary').style.display='flex'
        document.getElementById('profile-1').style.display='flex'
        document.getElementsByTagName('body')[0].style.overflowY='hidden'
    }
}

addEventListener('click',summary_show)


var close=document.getElementById('cross')
function summary_close(e) {
    if(e.target==close){
        document.getElementById('summary').style.display='none'
        document.getElementById('profile-1').style.display='none'
        document.getElementById('profile-2').style.display='none'
        document.getElementById('profile-3').style.display='none'
        document.getElementById('profile-4').style.display='none'
        document.getElementById('profile-5').style.display='none'
        document.getElementById('profile-6').style.display='none'
        document.getElementsByTagName('body')[0].style.overflowY='auto'
        
    }
}

addEventListener('click',summary_close)



var matching = window.matchMedia("(max-width: 769px)")

function mquery_1() {

    if(matching.matches){
      for (let i=0;i<4;i++){

          
          
          document.getElementsByClassName('star')[i].classList.remove('bx-sm')
        document.getElementsByClassName('star')[i].classList.add('bx-xs')
    }
      
    }
}
mquery_1()
