// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const body = document.body;

  if (mobileNavToggle && mobileNav) {
    mobileNavToggle.addEventListener('click', function() {
      // Toggle active class on button
      mobileNavToggle.classList.toggle('active');
      
      // Toggle active class on mobile nav
      mobileNav.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      if (mobileNav.classList.contains('active')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });

    // Close mobile nav when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNavToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        body.style.overflow = '';
      });
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileNav.contains(event.target) && !mobileNavToggle.contains(event.target)) {
        if (mobileNav.classList.contains('active')) {
          mobileNavToggle.classList.remove('active');
          mobileNav.classList.remove('active');
          body.style.overflow = '';
        }
      }
    });

    // Close mobile nav on window resize if screen becomes larger
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        mobileNavToggle.classList.remove('active');
        mobileNav.classList.remove('active');
        body.style.overflow = '';
      }
    });
  }
});
