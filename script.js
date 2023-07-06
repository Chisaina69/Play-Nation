document.addEventListener("DOMContentLoaded", () => {
  const gameContainer = document.getElementById("game");
  const errorMessage = document.createElement("p");
  errorMessage.className = "error-message";
  errorMessage.textContent =
    "Error fetching game data. Please try again later.";

  fetch("https://www.freetogame.com/api/games")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((game) => {
        const gameCard = createGameCard(game);
        gameContainer.appendChild(gameCard);
      });
    })
    .catch((error) => {
      console.error(error);
      gameContainer.appendChild(errorMessage);
    });

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
