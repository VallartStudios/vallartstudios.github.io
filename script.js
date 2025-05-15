document.addEventListener('DOMContentLoaded', () => {
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
            title: "Luggage Quest",
            genre: "Puzzle / Reflexion",
            image: "assets/images/LUQ_icon_512.jpg",
            url: "https://play.google.com/store/apps/details?id=com.vallartstudios.luggagequest" 
        },
        {
            title: "Missile Master 3D",
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
        {
            title: "Happy Map",
            genre: "Puzzle / Reflexion",
            image: "assets/images/HPM_icon_512.jpg",
            url: "https://play.google.com/store/apps/details?id=ts.tangames.happymap" 
        },
        {
            title: "Coming Soon",
            genre: "Action / Combat",
            image: "assets/images/lock.jpg",
            url: "#" 
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