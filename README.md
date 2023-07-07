# Play-Nation

# Play-Nation - Discover New Games

Play-Nation is a gaming website that allows users to discover new games. This project consists of an HTML webpage with dynamic game card content fetched from the FreeToGame API using JavaScript. Users can view recommended games, search for specific games, and contact me.

## Features

- Fetches game data from the FreeToGame API to display game cards on the webpage.
- Supports smooth scrolling behavior for improved user experience.
- Provides a search functionality to find specific games.
- Allows users to contact the website owner through a contact form.
- Supports navigation to the game's URL when a game card is clicked.

## Technologies Used

- HTML
- CSS
- JavaScript

## Project setup

To run the project locally, follow these steps:

1. Clone the repository in your machine
2. Navigate to the project directory
3. Open the `index.html` file in your preferred web browser.
4. Make sure you have a web extenstion for unblocking CORS example of an extesnion [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino) (Google Chrome)

## Blocking CORS by Extensions

1. Install a CORS extension for your preferred browser. 
   - [CORS Unblock](https://chrome.google.com/webstore/detail/cors-unblock/lfhmikememgdcahcdlaciloancbhjino) (Google Chrome)
   - [Allow CORS: Access-Control-Allow-Origin](https://addons.mozilla.org/en-US/firefox/addon/access-control-allow-origin/) (Mozilla Firefox)

2. Once installed, activate the CORS extension by clicking on its icon in the browser toolbar.

3. With the CORS extension enabled, your web application should now be able to make requests to external APIs without encountering CORS restrictions.

## API Usage

The project utilizes the [FreeToGame API](https://www.freetogame.com/api-doc) to fetch game data. The API provides a list of games with details such as title, thumbnail, genre, and release date. The fetched data is used to dynamically create game cards on the webpage.

## Directory Structure

- `index.html`: Contains the HTML structure of the webpage.
- `style.css`: Contains the CSS styling rules for the webpage.
- `script.js`: Contains the JavaScript code for fetching game data and dynamically creating game cards.
- `background.jpg`: Represents the background image used in the webpage.

## Credits

- The project uses the [FreeToGame API](https://www.freetogame.com/api-doc) to fetch game data.

## License

The project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback, please contact [QUINCY MUYEKWE](muyekwe11@gmail.com).
