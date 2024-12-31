// Import other scripts
import { setupNavigation } from "./navigation.js";
import { loadContent } from "./contentLoader.js";

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
    setupNavigation(); // Initialize navigation
    loadContent("/html/home.html"); // Load the default homepage content
});