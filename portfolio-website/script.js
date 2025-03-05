document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function fadeInOnScroll() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 50) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    }

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(30px)";
        section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll();
});
