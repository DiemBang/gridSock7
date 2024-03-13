// x Tömma gridcontainern på första sidan så att den innehåller välkomsstext
// x + information om hur spelet går till
// x (Visa en räknare som visar hur många spelare som fattas innan spelet startar? )
// x När fyra spelare har anslutit:
// x skapa en timer som räknar ner 10-15s - finns redan!
// TODO: Visa tiden som räknas ner
// x Starta funktionen printStartImage() som visar facit i några sekunder och sedan startar "målargridet"
import { gridContainer } from "./displayGrid.js";
export { beforeGameStart };

// const instructions = document.getElementById("instructions");

function beforeGameStart() {
  console.log("BEFORE GAME START");
  instructions.classList.remove("hidden");
  gridContainer.innerHTML = " ";
  instructions.innerHTML = `
    <div class="game-start" id="gameStart">
        <h2>Welcome!</h2>
         <div class="introduction">
            <h3>Are you ready for a challenge?</h3>
            <p class="game-instructions">
                When four players have joined the game a countdown will tell you when the game starts.
                A pixeled masterpiece will be revealed for 20s - then it's your turn to recreate it! 
                Click the pixels you want to add your color to and watch as your teamwork creates a piece of art. 
                When the time is out you'll see how close you got to the original image. 
                Pixel challenge is not just a game - it's an exhilarating journey of collaboration, skill and fun!
            </p>
            <h4>The game starts in:</h4>
         </div>
    </div>    
    `;

  instructions.appendChild(gameStart);
}
