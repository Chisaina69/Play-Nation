document.addEventListener("DOMContentLoaded", () => {
  const gameContainer = document.getElementById("game");
  const errorMessage = document.createElement("p");
  errorMessage.className = "error-message";
  errorMessage.textContent =
    "Error fetching game data. Please try again later.";

  let gamesData = []; // Variable to store the fetched game data

  fetch("https://www.freetogame.com/api/games")
    .then((response) => response.json())
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
    gameContainer.innerHTML = ""; // Clear the game container

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
