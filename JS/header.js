const webHeader = document.querySelector(".main__content-header")
webHeader.innerHTML=` <div class="header__nav">
<nav class="box">
    <div class="main__socialbar">
        <a href="#facebook" class="social-tag facebook"><i class=" fab fa-facebook"></i></i></a>
        <a href="#twitter" class="social-tag twitter"><i class=" fab fa-twitter"></i></a>
        <a href="#instagram" class="social-tag instagram"><i class=" fab fa-instagram"></i></a>
        <a href="#youtube" class="social-tag youtube"><i class=" fab fa-youtube"></i></a>
    </div>
    <div class="main__info">
        <a href="" class="main__info-link">Contact</a>
        <a href="#" class="search"><i class="fas fa-search-location"></i></a>
    </div>
    <div class="overlay-search"> 
    <div class="box-search">
    <i class="fa-solid fa-xmark x-search"></i>
    <input type="text" placeholder="Search..." autocomplete="off">
    <button class="search-button"><i class="fas fa-search-location"></i></button>
</div>
</div>
    
</nav>
</div>
<div class="header-info">
    <div class="box">
        <a href="index.html" class="header__logo"><img src="assets/img/logo.png" alt="Logo" class="logo"></a>
    <ul class="header__list">
        <li class="header__list-item"><a href="index.html" class="header__list-link">Live fully In Vietnam</a></li>
        <li class="header__list-item"><a href="places.html" class="header__list-link">Places to go</a></li>
        <li class="header__list-item"><a href="about.html" class="header__list-link">About us</a></li>
        <li class="header__list-item"><a href="images.html" class="header__list-link">Images gallery</a></li>
    </ul>
   <div class="new-header">
    <a href="#search" class="nav-icon">
        <i class="fas fa-search-location nav-icon"></i>
    </a>
    <a onclick="clickShow()" class="nav-icon">
        <i class="fa-solid fa-bars nav-icon list-btn"></i>
    </a>
   </div>
    
    </div>
</div>
<div onclick="clickShow()" class="nav-overlay"></div>
<div class="header__mobile">
<ul class="header__mobile-list">
    <i onclick="clickShow()" class="fa-solid fa-xmark x-icon"></i>
    <li class="header__mobile-item"><a href="index.html" class="header__mobile-link">Live fully In Vietnam</a></li>
    <li class="header__mobile-item"><a href="places.html" class="header__mobile-link">Places to go</a></li>
    <li class="header__mobile-item"><a href="about.html" class="header__mobile-link">About us</a></li>
    <li class="header__mobile-item"><a href="images.html" class="header__mobile-link">Images gallery</a></li>
</ul>
</div>`