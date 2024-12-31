export function loadContent(page) {
    const content = document.getElementById("content");

    fetch(page)
        .then(response => {
            if (!response.ok) throw new Error("Page not found");
            return response.text();
        })
        .then(html => {
            content.innerHTML = html; // Update the content area
        })
        .catch(error => {
            content.innerHTML = "<p>Error loading page.</p>";
            console.error(error);
        });
}