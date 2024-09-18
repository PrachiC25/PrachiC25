const navbar = document.querySelector('.nav-container');
const homeSection = document.getElementById('home');
const homeSectionHeight = homeSection.offsetHeight;

// Set the trigger point to halfway through the first section
const triggerHeight = homeSectionHeight / 2;

window.addEventListener('scroll', function () {
  if (window.scrollY > triggerHeight) {
    navbar.style.transform = 'translateY(0)'; // Show the navbar
  } else {
    navbar.style.transform = 'translateY(-100%)'; // Hide the navbar
  }
});