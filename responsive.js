window.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".animated");


    const visibleItems = new Set();

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                visibleItems.add(entry.target);
                entry.target.classList.add('active');
            } else {
                visibleItems.delete(entry.target);
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