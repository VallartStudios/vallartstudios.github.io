document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Header Scroll Effect ---
    const header = document.querySelector('header');
    
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once on load to set initial state
    handleScroll();

    // --- Mobile Navigation ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Put focus back to body to remove focus from navigation
            document.body.focus();
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // --- Game Data ---
    // To add a new game:
    // 1. Add its image to the 'assets/images/' folder.
    // 2. Add a new object to the 'gamesData' array below.
    //    - title: The name of your game.
    //    - genre: The genre of your game.
    //    - image: The path to the game's logo/image (e.g., 'assets/images/your-game-icon.png').
    //    - url: Link to the game's store page or website (e.g., 'https://appstore.com/yourgame'). Use '#' if no link yet.
    const gamesData = [
        {
            title: "Bubbles War",
            genre: "Action / Arcade",
            image: "assets/images/BWR_icon_512.jpg",
            url: "https://play.google.com/store/apps/details?id=com.vallartstudios.bubbleswar" 
        },
        {
            title: "Spawn Battle",
            genre: "Action / Combat",
            image: "assets/images/SPB_icon_512.jpg",
            url: "https://play.google.com/store/apps/details?id=com.vallartstudios.spawnbattle" 
        },
        {
            title: "Luggage Quest",
            genre: "Puzzle / Reflexion",
            image: "assets/images/LUQ_icon_512.jpg",
            url: "https://play.google.com/store/apps/details?id=com.vallartstudios.luggagequest" 
        },
        {
            title: "Missile War",
            genre: "Action / Simulation",
            image: "assets/images/MIM_icon_512.jpg",
            url: "https://play.google.com/store/apps/details?id=com.vallartstudios.missilemaster3d" 
        },
        {
            title: "Merge Factory",
            genre: "Puzzle / Relaxing",
            image: "assets/images/MFY_icon_512.jpg",
            url: "https://play.google.com/store/apps/details?id=com.vallartstudios.mergefactory" 
        },
        {
            title: "Missile Attack",
            genre: "Action / Simulation",
            image: "assets/images/MIA_icon_512.jpg",
            url: "https://play.google.com/store/apps/details?id=com.VallartStudios.MissileAttack" 
        },
    ]

    const gamesGrid = document.getElementById('games-grid');

    function displayGames() {
        if (!gamesGrid) {
            console.warn("Games grid element not found!");
            return;
        }
        gamesGrid.innerHTML = ''; // Clear existing games

        if (gamesData.length === 0) {
            gamesGrid.innerHTML = '<p class="no-games-message">No games to display yet. Check back soon!</p>';
            // Optional: Style .no-games-message in CSS if you want it to look specific
            return;
        }

        gamesData.forEach(game => {
            const gameCard = document.createElement('div');
            gameCard.classList.add('game-card');

            gameCard.innerHTML = `
                <img src="${game.image}" alt="${game.title} Logo" class="game-logo">
                <div class="game-info">
                    <h3>${game.title}</h3>
                    <p class="game-genre">${game.genre}</p>
                    <a href="${game.url}" class="game-link" target="_blank" rel="noopener noreferrer">View Game</a>
                </div>
            `;
            
            // Make the whole card clickable if URL exists and is not '#'
            if (game.url && game.url !== "#") {
                gameCard.style.cursor = 'pointer'; // Indicate it's clickable
                gameCard.addEventListener('click', (event) => {
                    // If the click target is the game-link itself or inside it, let the link handle it.
                    // This prevents double navigation when the link is visible (e.g., on desktop).
                    if (event.target.closest('.game-link')) {
                        return;
                    }
                    window.open(game.url, '_blank', 'noopener,noreferrer');
                });
            }
            gamesGrid.appendChild(gameCard);
        });
    }

    // --- Footer Year ---
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // --- Initialize ---
    displayGames();
});
