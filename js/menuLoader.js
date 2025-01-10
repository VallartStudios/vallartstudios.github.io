document.addEventListener("DOMContentLoaded", function () {
    const menuContainer = document.getElementById("menu-container");

    if (!menuContainer) {
        console.error("No element with ID 'menu-container' found.");
        return;
    }

    // Inline the menu HTML directly
    const menuHTML = `
        <div class="header-content">
            <div class="logo">
                <a href="index.html"> <img src="assets/images/logo2_white_512_512.jpg" alt="Company Logo"/></a>
            </div>            
            <nav>
                <ul>
                    <li><a href="index.html">Games</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        </div>
    `;

    // Set the inner HTML of the menu container
    menuContainer.innerHTML = menuHTML;
});
