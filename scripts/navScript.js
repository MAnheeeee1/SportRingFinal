let timeout;
let lastScrollTop = 0;
const nav = document.querySelector(".nav-nav");
let isHovering = false;

// Function to show nav
function showNav() {
  nav.style.transform = "translateY(0)";
  nav.style.opacity = "1";
}

// Function to hide nav
function hideNav() {
  nav.style.transform = "translateY(-100%)";
  nav.style.opacity = "0";
}

// Add transition styles to nav
nav.style.transition = "all 0.3s ease";

// Add these event listeners to the nav element
nav.addEventListener("mouseenter", () => {
  isHovering = true;
  showNav();
  clearTimeout(timeout);
});

nav.addEventListener("mouseleave", () => {
  isHovering = false;
  if (
    lastScrollTop >
    (heroSection ? heroSection.offsetTop + heroSection.offsetHeight : 300)
  ) {
    timeout = setTimeout(hideNav, 3000);
  }
});

// Modify the scroll event handler
document.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const heroSection = document.querySelector(".utbud-Hero");
  const heroBottom = heroSection
    ? heroSection.offsetTop + heroSection.offsetHeight
    : 300;

  // Always show nav when in hero section
  if (scrollTop <= heroBottom) {
    showNav();
    return;
  }

  // Show nav only when scrolling up
  if (scrollTop < lastScrollTop) {
    showNav();
    clearTimeout(timeout);
    if (!isHovering) {
      timeout = setTimeout(hideNav, 3000); // Hide after 3 seconds of no scrolling
    }
  } else {
    // Hide nav when scrolling down, but not if mouse is hovering
    if (!isHovering) {
      hideNav();
    }
  }

  lastScrollTop = scrollTop;
});
