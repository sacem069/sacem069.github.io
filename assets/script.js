

const projects = document.querySelectorAll(".project");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("is-open");
            }

            else {
                entry.target.classList.remove("is-open")
            }

        });
    },

    {
        threshold: 0.6,
        rootMargin: "-40% 0px -40% 0px",
    }
);
projects.forEach((project) => {
    observer.observe(project);

});