// Stop video
// const videoBG = document.querySelector('.main__content-video')
// const stopBG = () => {
//     if (videoBG.paused) {
//       videoBG.play();
     
//     } else {
//       videoBG.pause();
      
//     }
//   }

 // Sticky header
 window.onscroll = function () {
     stickyFunction();
     scrolltoTop()
 }
 const header = document.querySelector('.header-info')
 const headerLink = document.getElementsByClassName('header__list-link')
 const logo = document.querySelector('.logo')
 const sticky = header.offsetTop
 const stickyFunction = () => {
     if(window.pageYOffset >= sticky){
        header.classList.add('sticky')
         for(let i=0;i<headerLink.length;i++){
            headerLink[i].classList.add('sticky-link')
         }
         logo.classList.add('scale-logo')
     }
     else {
        header.classList.remove('sticky')
        for(let i=0;i<headerLink.length;i++){
            headerLink[i].classList.remove('sticky-link')
         }
         logo.classList.remove('scale-logo')
     }
 }

  // Show back to top btn
const backTop = document.querySelector('.back-link')
const scrolltoTop = () => {
    if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        backTop.style.display = "block";
    }
    else {
        backTop.style.display = "none";
    }
}
  // Fade animation
  const reveal =()=> {
    const reveals = document.querySelectorAll(".reveal")
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight
      let elementTop = reveals[i].getBoundingClientRect().top
      let elementVisible = 150
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active")
      }
    }
  }
  window.addEventListener("scroll", reveal)
  // Responsive navbar (attribute events)
  const listHeader = document.querySelector(".header__mobile")
  const overLay = document.querySelector(".nav-overlay")
  const clickShow = () => {
    if(listHeader.style.display==="block"){
      listHeader.style.display="none";
      overLay.style.display="none";
    }
    else
    {
      listHeader.style.display="block";
      overLay.style.display="block";
    }
  }
// Search (assign event using element node)
const searchBtn = document.querySelector(".search")
const xBtn = document.querySelector(".x-search")
const searchOverlay = document.querySelector(".overlay-search")
searchBtn.onclick = function(){
    searchOverlay.style.display="flex";
}
xBtn.onclick = function(){
  searchOverlay.style.display="none";
}

