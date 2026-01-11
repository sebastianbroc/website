const navbar = document.getElementById("navbar");
const wrapper = document.getElementById("wrapper");
const projects = document.getElementById("projects");

wrapper.addEventListener("scroll", () => {
    navbar.style.opacity = 100 - (wrapper.scrollTop / 2) + "%"
    projects.style.opacity = wrapper.scrollTop / 2 + "%";
});
