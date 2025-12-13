window.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".animated");


    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                entry.target.classList.remove('active');
            }
        });

    }, {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    });

    items.forEach(item => observer.observe(item));


});