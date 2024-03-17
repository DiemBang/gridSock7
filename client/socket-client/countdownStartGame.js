import { gridContainer } from "./displayGrid.js";
export { beforeGameStart };

// Starts when a user logs in
// Shows the instructions for the game
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
