const navbar = document.getElementById("navbar");
const wrapper = document.getElementById("wrapper");
const projects = document.getElementById("projects");

wrapper.addEventListener("scroll", () => {
    navbar.style.opacity = 100 - (wrapper.scrollTop / 2) + "%"
    navbar.style.transform = "scale(" + (100 - wrapper.scrollTop / 50) * 0.01 + ")";
    projects.style.opacity = wrapper.scrollTop / 2 + "%";
});
