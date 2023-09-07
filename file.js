// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Function to handle the scroll event
function handleScroll() {
    const sections = document.querySelectorAll(".fade-in-section");

    sections.forEach((section) => {
        if (isElementInViewport(section)) {
            section.style.opacity = "1";
        }
    });
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);

// Trigger the animation once on page load
handleScroll();