
    // Show/hide back-to-top button based on scroll position
    const backToTopButton = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) { // Show button when scrolled 200px from top
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

