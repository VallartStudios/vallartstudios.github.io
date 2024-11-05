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
                <img src="assets/images/logo2_white_512_512.jpg" alt="Company Logo">
            </div>
            <h1>Vallart Studios</h1>
            <nav>
                <ul>
                    <!--<li><a href="index.html">Home</a></li>-->
                </ul>
            </nav>
        </div>
    `;

    // Set the inner HTML of the menu container
    menuContainer.innerHTML = menuHTML;
});
