// Import statements
import { Battler } from "./modules/battler.js";
import { Hero, Enemy } from "./modules/character.js"

// Create a map of characters and their locations
export const CharacterLocations = new Map()

// Get the canvas.
const Canvas = document.getElementById("battle-scene");
const Ctx = Canvas.getContext("2d");

// Create image objects of hero sprites.
const ColtImage = new Image();
ColtImage.src = "images/sprites/heroes/pngs/colt.png";
const DerrickImage = new Image();
DerrickImage.src = "images/sprites/heroes/pngs/derrick.png";
const GrammyImage = new Image();
GrammyImage.src = "images/sprites/heroes/pngs/grammy.png";
const PeteImage = new Image();
PeteImage.src = "images/sprites/heroes/pngs/pete.png";
const RookImage = new Image();
RookImage.src = "images/sprites/heroes/pngs/rook.png";
const SamImage = new Image();
SamImage.src = "images/sprites/heroes/pngs/sam.png";
// Create stat splits for heroes.
const ColtStats = {
    name: "Colt",
    hp: 15,
    atk: 15,
    def: 15,
    spd: 15,
    mgk: 15,
    crg: 5,
    image: ColtImage
};
const DerrickStats = {
    name: "Derrick",
    hp: 12,
    atk: 10,
    def: 10,
    spd: 12,
    mgk: 45,
    crg: 3,
    image: DerrickImage
};
const GrammyStats = {
    name: "Grammy",
    hp: 10,
    atk: 18,
    def: 10,
    spd: 6,
    mgk: 25,
    crg: 3,
    image: GrammyImage
};
const PeteStats = {
    name: "Pete",
    hp: 15,
    atk: 10,
    def: 15,
    spd: 10,
    mgk: 20,
    crg: 1,
    image: PeteImage
};
const RookStats = {
    name: "Rook",
    hp: 20,
    atk: 10,
    def: 25,
    spd: 4,
    mgk: 10,
    crg: 3,
    image: RookImage
};
const SamStats = {
    name: "Sam",
    hp: 15,
    atk: 10,
    def: 15,
    spd: 12,
    mgk: 15,
    crg: 1,
    image: SamImage
};
// Create test heroes.
const Colt = new Hero(ColtStats);
const Derrick = new Hero(DerrickStats);
const Grammy = new Hero(GrammyStats);
const Pete = new Hero(PeteStats);
const Rook = new Hero(RookStats);
const Sam = new Hero(SamStats);
// Array of hero objects.
export const Heroes = [Colt, Derrick, Grammy, Pete, Rook, Sam];

// Function that draws the hero sprites.
async function drawHeroes() {
    // Wait for all images to load before drawing sprites
    await Promise.all(
        Heroes.map(
            (Hero) => 
                new Promise((resolve) => 
                    Hero.image.addEventListener("load", resolve)),
        ),
    );
    // Draw sprites
    const Locations = [[40, 60], [40, 280], [40, 500], [240, 133], [240, 426], [440, 280]];
    for (let i = 0; i < Heroes.length; i++) {
        Ctx.drawImage(Heroes[i].image, Locations[i][0], Locations[i][1]);
        CharacterLocations.set(Heroes[i], Locations[i]);
    }
}

// Create image objects of enemy sprites.
const GooberImage = new Image();
GooberImage.src = "images/sprites/enemies/pngs/goober.png";
const MenacingMantisImage = new Image();
MenacingMantisImage.src = "images/sprites/enemies/pngs/menacingMantis.png";
// Create stat splits for enemies.
const GooberStats = {
    name: "Goober",
    hp: 10,
    atk: 10,
    def: 10,
    spd: 8,
    mgk: 20,
    crg: 2,
    image: GooberImage
};
const MenacingMantisStats = {
    name: "Menacing Mantis",
    hp: 15,
    atk: 12,
    def: 15,
    spd: 12,
    mgk: 20,
    crg: 3,
    image: MenacingMantisImage
};
// Create test enemeies.
const Goober1 = new Enemy(GooberStats);
const Goober2 = new Enemy(GooberStats);
const Goober3 = new Enemy(GooberStats);
const Goober4 = new Enemy(GooberStats);
const Goober5 = new Enemy(GooberStats);
const Goober6 = new Enemy(GooberStats);
const MenacingMantis1 = new Enemy(MenacingMantisStats);
const MenacingMantis2 = new Enemy(MenacingMantisStats);
const MenacingMantis3 = new Enemy(MenacingMantisStats);
// Array of enemy objects.
export const Enemies = [Goober1, MenacingMantis1, Goober2, Goober3, MenacingMantis2, Goober4, Goober5, MenacingMantis3, Goober6];

// Function that draws the enemy sprites.
async function drawEnemies() {
    // Wait for all images to load before drawing sprites
    await Promise.all(
        Enemies.map(
            (Enemy) => 
                new Promise((resolve) => 
                    Enemy.image.addEventListener("load", resolve)),
        ),
    );
    // Draw sprites
    for (let i = 0; i < Enemies.length; i++) {
        let x = 1080 - 200*Math.floor(i / 3);
        let y = 60 + 220*(i % 3);
        Ctx.drawImage(Enemies[i].image, x, y);
        CharacterLocations.set(Enemies[i], [x, y]);
    }
}

// Draw the characters
await Promise.all([
  drawHeroes(),
  drawEnemies()
]);


async function battle(Heroes, Enemies) {
    // Create the battler object to assist in attacks and tracking
    const BattlerObject = new Battler(Heroes, Enemies);
    // Start out by getting the turn order
    BattlerObject.organizeOrder();
    // Start the main game loop
    while (BattlerObject.whoseAsleep() === "No One") {
        // Get the character whose turn it is
        const CurrentCharacter = BattlerObject.turnOrder[0];
        // If the character is a hero, player inputs choice
        if (BattlerObject.isHero(CurrentCharacter)) {
            await BattlerObject.playerInput(CurrentCharacter);
        }
        // Else if the character is an enemy, automate the decision
        else {    
            BattlerObject.computerInput(CharactersTurn);
        }
        // End turn by moving current character to the end of the queue
        BattlerObject.endTurn();
    }
}

battle(Heroes, Enemies);
