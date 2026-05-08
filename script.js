

const projects = document.querySelectorAll (".project");

const observer = newIntersectionObserver(
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
        threshold: 0.6
    }
);
 projects.forEach((project) => {
    observer.observe(project);

 });