function scrollToSection(sectionId) { //self-explanatory
    var section = document.getElementById(sectionId);
    var headerHeight = document.querySelector('header').offsetHeight;
    var sectionTop = section.offsetTop - headerHeight;
  
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
}