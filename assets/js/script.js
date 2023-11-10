// for mobile navbar
 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
 } 

//  toggle
 // Set the initial state
      var content = document.getElementById("hiddenContent");
      var iconPlus = document.getElementById("iconPlus");
      var iconMinus = document.getElementById("iconMinus");
      var isContentVisible = false;

      function toggleContent() {
        // Toggle the display property
        isContentVisible = !isContentVisible;
        content.style.display = isContentVisible ? "block" : "none";

        // Toggle the visibility of the icons
        iconPlus.style.display = isContentVisible ? "none" : "inline";
        iconMinus.style.display = isContentVisible ? "inline" : "none";
      }