document.addEventListener("DOMContentLoaded", function() {
    const footerContainer = document.getElementById("footer-container");

    if (!footerContainer) {
        console.error("No element with ID 'footer-container' found.");
        return;
    }

    // Inline the footer HTML directly
    const footerHTML = `
        <div>
            <p>&copy; 2024 Vallart Studios. All Rights Reserved.</p>
            <div class="social-links">
                <a target="_blank" href="https://www.tiktok.com/@vallartstudios">Tiktok</a>
                <a target="_blank" href="https://www.facebook.com/vallartstudios/">Facebook</a>
                <a target="_blank" href="https://www.instagram.com/vallartstudios/">Instagram</a>
                <a target="_blank" href="https://twitter.com/vallartstudios">X</a>
                <a target="_blank" href="https://www.linkedin.com/company/vallartstudios/">LinkedIn</a>
                <a target="_blank" href="https://www.youtube.com/@vallartstudios">YouTube</a>
            </div>
        </div>
    `;

    // Set the inner HTML of the footer container
    footerContainer.innerHTML = footerHTML;
});
