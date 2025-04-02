// Enhanced Intersection Observer for highlight animations
document.addEventListener('DOMContentLoaded', () => {
    // Define the observer with a higher threshold for smoother visibility
    const highlightObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Optional: Unobserve after animation to improve performance
                highlightObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5, // Trigger when 50% of the element is visible for a deliberate effect
        rootMargin: '0px 0px -50px 0px' // Anticipate entry slightly before full visibility
    });

    // Select and animate highlight elements
    const highlights = document.querySelectorAll('.highlight');
    if (highlights.length > 0) {
        highlights.forEach(highlight => {
            // Initial state for animation
            highlight.style.opacity = '0';
            highlight.style.transform = 'translateY(20px)';
            highlight.style.transition = 'none'; // Prevent premature transitions
            // Observe each highlight element
            highlightObserver.observe(highlight);
        });
    } else {
        console.warn('No .highlight elements found on the page.');
    }
});
/* Professional animation for highlight elements */
.highlight {
    opacity: 0; /* Ensure initial state is set in CSS for consistency */
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out; /* Define transition here */
}

.highlight.animate {
    opacity: 1;
    transform: translateY(0);
    /* Transition is already defined in .highlight, no need to repeat */
}

/* Optional: Add a subtle scale effect for extra polish */
.highlight.animate:hover {
    transform: translateY(0) scale(1.02);
    transition: transform 0.3s ease; /* Smooth hover effect */
}