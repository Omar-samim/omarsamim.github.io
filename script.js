



function menuFunction(){
    let menu = document.getElementById("myNav"); 
    

    if(menu.style.height === "55%"){
        menu.style.height  = "0%"; 
    }else{
        menu.style.height  = "55%"; 
    }
}

function btnFunction(x){
    // let times = document.getElementsByClassName("bar"); 
    x.classList.toggle("change"); 
}

window.onclick = function(event) {
    let menu = document.getElementById("myNav"); 
    if (event.target == menu) {
        menu.style.display = "none";
    }
  }



// function for scrool to top 
let mybutton = document.getElementById("scollbtn"); 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}

function scrollToTopFunction(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
}