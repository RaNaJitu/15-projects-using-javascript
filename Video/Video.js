//The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, 
//without waiting for stylesheets, images, and subframes to finish loading

//The load event is fired when the whole page has loaded including 
//all depandent resources such as stylesheet and images

const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

//This function is invoked when we are click to the pause button and paly   
btn.addEventListener('click', () =>{
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide')
        video.pause();
    }
    else{
        btn.classList.remove('slide')
        video.play();
    }
})

// preloader
const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});

