import { loadImages } from "./load/loadImages.js";
await loadImages();

import { Heroes, Enemies } from "./assets/characters.js";

// Maybe add this to titleScreen.js
const StartButton = document.getElementById("title-screen-start-button");
StartButton.addEventListener("click", () => {
    const TitleScreenContainer = document.getElementById("title-screen-container");
    TitleScreenContainer.style.display = "none";
});

import { FlashingCharacters, computeLocations, drawCharacters, drawHealth } from "./game/draw.js";
import "./assets/UI.js";
import { Battler } from "./classes/battlerClass.js";
import { openText, setText, setTextTimer, closeText, rng, clearArray } from "./helpers/helperFunctions.js";
import { VictoryMessages } from "./assets/messageBank.js";

//var runRender = true;
// var animationFrameID;

const Canvas = document.getElementById("battle-scene");
const Ctx = Canvas.getContext("2d");

// Graphical render loop
function render(CharacterLocations) {
    // Ctx.clearRect(0, 0, Canvas.clientWidth, Canvas.clientHeight);
    Ctx.clearRect(0, 0, Canvas.clientWidth, Canvas.clientHeight);
    drawCharacters(Ctx, CharacterLocations);
    drawHealth(Ctx, CharacterLocations);
    // animationFrameID = window.requestAnimationFrame(() => render(CharacterLocations));
    window.requestAnimationFrame(() => render(CharacterLocations));
}
// Create a map of characters and their locations
var characterLocations = computeLocations(Heroes, Enemies);
// animationFrameID = window.requestAnimationFrame(() => render(CharacterLocations, GameHeight, GameWidth, scale));
window.requestAnimationFrame(() => render(characterLocations));

async function processAttack(FlashingCharacters, BattlerObject, CurrentCharacter, Target) {
    return new Promise(async (resolve) => {
        FlashingCharacters.push(Target);
        const Damage = BattlerObject.attack(CurrentCharacter, Target);
        openText(false);
        await setTextTimer("" + CurrentCharacter.name + " attacked " + Target.name + " for " + Damage + " damage!", 3000);
        if (Target.stats.hp[0] <= 0) {
            Target.isAwake = false;
            await setTextTimer("" + CurrentCharacter.name + " has slain " + Target.name + "!", 3000);
        }
        closeText();
        resolve();
    });
}

async function createBattle(Heroes, Enemies) {
    const BattlerObject = new Battler(Heroes, Enemies);
    BattlerObject.organizeOrder();
    while (BattlerObject.whoseAsleep() === "No One") {
        // Get the current character whose turn it is
        const CurrentCharacter = BattlerObject.getTurn();
        FlashingCharacters.push(CurrentCharacter);
        // Process the turn of the current character
        if (BattlerObject.isHero(CurrentCharacter)) {
            const Selection = await BattlerObject.playerInput(CurrentCharacter);
            if (Selection[0] === "Attack") {
                const Target = Selection[1];
                await processAttack(FlashingCharacters, BattlerObject, CurrentCharacter, Target);
            }
            else if (Selection[0] === "Escape") {
                openText(false);
                if (Selection[1] === true) {
                    await setTextTimer("You escaped the battle!", 3000);
                    closeText();
                    break;
                }
                else {
                    await setTextTimer("You failed to escape!", 3000);
                    closeText();
                }
            }
        }
        else {    
            const Target = BattlerObject.computerInput();
            await processAttack(FlashingCharacters, BattlerObject, CurrentCharacter, Target);
        }
        // End the character's turn
        clearArray(FlashingCharacters);
        BattlerObject.endTurn();
    }
    clearArray(FlashingCharacters);
    if (BattlerObject.whoseAsleep() === "Enemies") {
        const RandomNumber = rng(0, VictoryMessages.length);
        openText(false);
        setText("Your party has defeated the enemies! " + VictoryMessages[RandomNumber]);
    }
    else if (BattlerObject.whoseAsleep() === "Heroes") {
        openText(false);
        setText("Your party has been brought down by the enemies!");
    }
    else if (BattlerObject.whoseAsleep() === "No One") {
        openText(false);
        setText("What's next?");
    }
}

await createBattle(Heroes, Enemies, characterLocations);

export { characterLocations };