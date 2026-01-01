import { openText, setText, setTextTimer, closeText, /*setPortrait*/ } from '../helpers/helperFunctions.js';
import { x, y } from '../helpers/mouseTracker.js'
import { characterLocations } from '../main.js';
import { scale } from '../assets/UI.js';

const SpriteLength = 160;

// Helper function that checks if a selected pixel is in bounds of a character sprite
function isInBounds(X, Y, Coords) {
    return X >= Coords[0] && 
            X < Coords[0] + SpriteLength && 
            Y >= Coords[1] && 
            Y < Coords[1] + SpriteLength;
}
// Function that return an Enemy object if a selected pixel on the canvas is an enemy
function checkClickSelection(X, Y) {
    for (const [Character, Coords] of characterLocations) {
        if (isInBounds(X, Y, Coords) && Character.isAwake === true) {
            return Character;
        }
    }
    // Return null if the selected pixel is not part of any sprite
    return null;
}

const Canvas = document.getElementById("battle-scene");
const TextContainerButton = document.getElementById("text-container-button");
// Function to handle the attack input process
function attackFunction(CurrentCharacter, Heroes, Enemies) {
    return new Promise((resolve) => {
        async function handleSelection() {
            const Selection = checkClickSelection(x / scale, y / scale);
            removeEvents();
            if (Selection === null) {
                resolve("redo");
            }
            else if (Selection === CurrentCharacter) {
                resolve("redo");
                await setTextTimer("You can't make a hero attack themself, are you even trying?", 3000);
            }
            else if (Heroes.includes(Selection)) {
                resolve("redo");
                await setTextTimer("You can't make " + CurrentCharacter.name + " attack " + Selection.name + ", they're on the same team!", 3000);
            }
            else if (Enemies.includes(Selection)) {
                resolve(Selection);
            }
            
        }
        function removeEvents() {
            Canvas.removeEventListener("mouseup", handleSelection);
            TextContainerButton.removeEventListener("click", goBack);
        }
        // Create an event listener to handle targeting of attack
        Canvas.addEventListener("mouseup", handleSelection);
        // Back button event listener
        function goBack() {
            removeEvents();
            resolve(null);
        }
        TextContainerButton.addEventListener("click", goBack, { once: true });
    });
}

const AttackInput = document.getElementById("attack");
const EscapeInput = document.getElementById("escape");
// const TextContainerButton = document.getElementById("text-container-button");
// Function to process the player's navigation of the battle menu
function battleMenuSelection(CurrentCharacter, Heroes, Enemies) {
    return new Promise((resolve) => {
        async function attackEvent() {
            openText();
            let selection;
            do {
                setText("Select your attack target.");
                selection = await attackFunction(CurrentCharacter, Heroes, Enemies);
            }
            while (selection === "redo");
            closeText();
            resolve(["Attack", selection]);
            removeEvents();
        }
        async function escapeEvent() {
            // For now 50/50 chance of escaping
            const RandomFloat = Math.random();
            if (RandomFloat <= 0.5) {
                resolve(["Escape", true]);
            }
            else {
                resolve(["Escape", false]);
            }
            removeEvents();
        }
        function removeEvents() {
            AttackInput.removeEventListener("click", attackEvent);
            EscapeInput.removeEventListener("click", escapeEvent);
        }
        removeEvents();
        AttackInput.addEventListener("click", attackEvent);
        EscapeInput.addEventListener("click", escapeEvent);
    });
}

export { battleMenuSelection }