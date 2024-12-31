import { loadContent } from "./contentLoader.js";

export function setupNavigation() {
    const links = document.querySelectorAll("nav a:not(#linkedinnav)");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            // event.preventDefault(); // Prevent default link behavior
            const page = this.getAttribute("data-page");
            loadContent(page); // Load the clicked page
        });
    });
}
