const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle("is-visible", entry.isIntersecting);
    });
}, {
    threshold: 0.14
});

document
    .querySelectorAll(".reveal")
    .forEach((element) => observer.observe(element));