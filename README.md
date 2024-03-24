# Multiplayer game using socket.io

This was a group assignment in the API development course at the Front End Developer programme @[Medieinstitutet](https://medieinstitutet.se/utbildningar/front-end-developer/) Sthlm (remote class).

Our project is a real-time multiplayer game featuring an integrated chat function. Each players gets assigned one of four colors (black, white, red or blue) at login. When four players have joined the game a countdown starts, showing the players the remaining time until the game starts. One of five available images are displayed in a 15x15 grid for 20s. The grid then resets and the players must try to recreate the same image by clicking the correct cells in the grid. When a player clicks a cell it gets the same color as the player was assigned at login. The players have 2min to collaborate and recreate the image. A timer counts down and shows the remaining game time. When the time is up the result is shown, in %. The players can save the image to the database and also view all the other saved images in a gallery. And of course, play again!

We used Express and MongoDB in the backend, and MongoDB Atlas to manage the database. Node.js was used for server-side JavaScript and HTML, CSS and JavaScript for the frontend. The real-time communication aspect of our game was facilitated by Socket.IO.

See section Assignment details for the full assignment (in Swedish).

Throughout this project we used agile methodologies - including, for example, sprint planning and daily stand-ups.

## How to play

To start playing our multiplayer game, follow these steps:

1. Visit the game website: [Multiplayer Game](https://multiplayergame-frontend-qrt3j.ondigitalocean.app/)
2. Enter your name and click the "Join game" button.
3. Invite three friends to join. Once they've entered, the game will start.
4. Enjoy the game!

This application has been deployed on Digital Ocean.

## Authors

- [@DiemBang](https://www.github.com/DiemBang)
- [@SaraGdbg](https://www.github.com/SaraGdbg)
- [@oscarkannerstedt](https://www.github.com/oscarkannerstedt)
- [@helenaskagerlid](https://www.github.com/helenaskagerlid)

## Tech stack

![Miro](https://img.shields.io/badge/-Miro-FFFF00?logo=miro&logoColor=050038&style=for-the-badge)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Screenshots

![Start page](/assets/screen-shots/start-page.png)
![Game view - start image](/assets/screen-shots/game-start-image.png)
![Game view - paint image 1](/assets/screen-shots/game-painting.png)
![Game view - paint image 2](/assets/screen-shots/game-painting-2.png)
![Result page](/assets/screen-shots/result-page.png)
![Gallery view](/assets/screen-shots/gallery-view.png)

## Assigment details

**Lärare**: Janne Kemi

### Gruppuppgift: Gridpainter

"Verktyget

Ni skall tillsammans i eran grupp ta fram en applikation för att färglägga online.
Färgläggning skall ske i realtid mellan samtliga inloggade i applikationen, minst 4 st.
Varje användare får en färg och målar med den färgen.
Färgning skall ske i ett rutnät med minst 15 kolumner och 15 rader.

Chat – Det skall finnas en chat så att de 4 användare som färgar även kan chatta med varandra.

Spara – En bild skall kunna sparas och öppnas igen.

Bonus! Applikationen skall deployas på Digital Ocean så att vi kan rita ihop!

Spelet

Skapa minst 5 st bilder “facit” som slumpas när en session börjar, bilder innehåller de färger som deltagarna är tilldelade. Samtliga användare ser orginalbilden och nu skall deltagarna på tid försöka tillsammans måla en bild som är så lik orginalet som möjligt, genom att färglägga med sin tilldelade färg.

När alla klickat på “Klar” så skall bilden “rättas” för att se om det var rätt. Visa korrekthet i %.

Bilderna kan vara intingen “pixelererade” bilder på riktiga bilder. Eller helt slumpade mönster. Välj svårighetsgrad själva."
