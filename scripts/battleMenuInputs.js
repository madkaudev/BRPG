import { Heroes, Enemies, CharacterLocations } from './battleScene.js';

function checkClickSelection(x, y, CharacterLocations) {
    function isInBounds(x, y, Character, Coords) {
        if (x >= Coords[0] && x < Coords[0] + Character.image.width && y >= Coords[1] && y < Coords[1] + Character.image.height) {
            return true;
        }
        return false;
    }
    for (const [Character, Coords] of CharacterLocations) {
        if (isInBounds(x, y, Character, Coords)) {
            if (Heroes.includes(Character)) {
                console.log("You selected " + Character.name + ", you can't attack your teammate!");
            }
            else if (Enemies.includes(Character)) {
                console.log("You selected " + Character.name + " to attack!");
            }
        }
    }
}

function attackFunction() {
    // Write to console
    console.log("Attack input clicked.");
    // Obscure the battle menu and bring up the text box
    const BattleMenu = document.getElementById("battle-menu");
    BattleMenu.style.display = "none";
    const TextBox = document.getElementById("text-box");
    TextBox.style.display = "block";
    // Let the user select attack target
    const BattleScence = document.getElementById("battle-scene");
    BattleScence.addEventListener("mouseup", (event) => {
        checkClickSelection(x, y, CharacterLocations)
    });
}

const AttackInput = document.getElementById("attack");
AttackInput.addEventListener("click", attackFunction);

async function battleMenuSelection() {

}