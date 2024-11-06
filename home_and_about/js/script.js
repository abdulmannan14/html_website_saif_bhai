window.addEventListener("scroll", function() {
    const stickyNavbar = document.querySelector(".sticky-navbar");
  
    if (window.scrollY > 100) { // Adjust scroll value as needed
      stickyNavbar.style.display = "block";
    } else {
      stickyNavbar.style.display = "none";
    }
  });
  