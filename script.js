document.addEventListener("DOMContentLoaded", () => {
  const gameContainer = document.getElementById("game");
  const errorMessage = document.createElement("p");
  errorMessage.className = "error-message";
  errorMessage.textContent = "Error fetching game data. Please try again later.";

  let gamesData = []; // Variable to store the fetched game data

  const corsProxyUrl = 'https://thingproxy.freeboard.io/fetch/';
  const apiUrl = 'https://www.freetogame.com/api/games';

  fetch(corsProxyUrl + apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      gamesData = data;
      displayGameCards(gamesData);
    })
    .catch((error) => {
      console.error(error);
      gameContainer.appendChild(errorMessage);
    });

  // Function to display all game cards
  function displayGameCards(games) {
    gameContainer.innerHTML = ""; 

    if (games.length === 0) {
      const noResultsMessage = document.createElement("p");
      noResultsMessage.textContent = "No games found.";
      gameContainer.appendChild(noResultsMessage);
    } else {
      games.forEach((game) => {
        const gameCard = createGameCard(game);
        gameContainer.appendChild(gameCard);
      });
    }
  }

  // Function to create a game card
  function createGameCard(game) {
    const gameCard = document.createElement("div");
    gameCard.className = "game-card";
    gameCard.dataset.url = game.game_url;

    const gameImage = document.createElement("img");
    gameImage.className = "game-image";
    gameImage.src = game.thumbnail;
    gameImage.alt = game.title;
    gameCard.appendChild(gameImage);

    const gameDetails = document.createElement("div");
    gameDetails.className = "game-details";

    const gameTitle = document.createElement("h2");
    gameTitle.className = "game-title";
    gameTitle.textContent = game.title;
    gameDetails.appendChild(gameTitle);

    const gameDescription = document.createElement("p");
    gameDescription.className = "game-description";
    gameDescription.textContent = game.short_description;
    gameDetails.appendChild(gameDescription);

    const gameCategory = document.createElement("p");
    gameCategory.className = "game-category";
    gameCategory.textContent = `Category: ${game.genre}`;
    gameDetails.appendChild(gameCategory);

    if (game.release_date === "TBD") {
      const releaseSoon = document.createElement("span");
      releaseSoon.className = "release-soon";
      releaseSoon.textContent = "Release Soon";
      gameDetails.appendChild(releaseSoon);
    }

    gameCard.appendChild(gameDetails);

    return gameCard;
  }

  // Search functionality
  const searchInput = document.getElementById("searchInput");
  const searchForm = document.getElementById("searchForm");

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    const filteredGames = gamesData.filter((game) =>
      game.title.toLowerCase().includes(searchTerm)
    );
    displayGameCards(filteredGames);
    searchInput.value = ""; 
  });

  // Refresh page and show all games
  const homeLink = document.querySelector('a[href="#header"]');
  homeLink.addEventListener("click", () => {
    displayGameCards(gamesData);
  });

  // Navigate to the game when a game card is clicked
  gameContainer.addEventListener("click", (event) => {
    const clickedGameCard = event.target.closest(".game-card");
    if (clickedGameCard) {
      const gameURL = clickedGameCard.dataset.url;
      if (gameURL) {
        window.location.href = gameURL;
      }
    }
  });
});
