// Page grid tab
const openGrid = (pageName,element,bg) => {
    const tabGa = document.getElementsByClassName("gallery__grid")
    for (let i = 0; i < tabGa.length; i++) {
      tabGa[i].style.display="none";
    }
    const tabLink = document.getElementsByClassName("gallery__link")
    for (let i = 0; i < tabLink.length; i++) {
      tabLink[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    element.style.backgroundColor = bg;
  
  }
  document.getElementById("curTab").click()