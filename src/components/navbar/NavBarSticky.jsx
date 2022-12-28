window.onscroll = function() {stickyfunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function stickyfunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}