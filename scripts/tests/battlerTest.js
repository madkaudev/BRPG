// Include modules
import { Hero, Enemy } from "../modules/character.js";
import { Battler } from "../modules/battler.js"

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
const Heroes = [Colt, Derrick, Grammy, Pete, Rook, Sam];

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
const MenacingMantis1 = new Enemy(MenacingMantisStats);
// Array of enemy objects.
const Enemies = [Goober1, MenacingMantis1];

// Create the battler object.
const BattlerObject = new Battler(Heroes, Enemies);

/* ---------------------------Test Cases------------------------------ */
// Test the randomizeOrder() method.
function testRandomizeOrder(randomized, order) {
    let isRandom = true;
    isRandom = randomized.length === order.length ? true : false;
    for (const Character of randomized) {
        if (randomized.indexOf(Character) === -1) {
            isRandom = false;
            break;
        }
    }
    return isRandom;
}
BattlerObject.randomizeOrder()
console.log("randomizeOrder() Test: " + testRandomizeOrder(BattlerObject.turnOrder, Heroes.concat(Enemies)));

// Test the organizeOrder() method.
function testOrganizeOrder(characters) {
    let previousSpd = characters[0].stats.spd;
    for (const Character of characters) {
        if (Character.stats.spd > previousSpd) {
            return false;
        }
    }
    return true;
}
BattlerObject.organizeOrder();
console.log("organizeOrder() Test: " + testOrganizeOrder(BattlerObject.characters));

// Test the battle() method.
BattlerObject.battle(0, 6);
console.log("battle() Test 1 (Colt -> Goober): ".concat(Goober1.stats.hp === 0 && Goober1.isAwake === false && Goober1.crgCtr === 1));
Rook.crgCtr = 2;
BattlerObject.battle(7, 4);
console.log("battle() Test 2 (Menacing Mantis -> Rook): ".concat(Rook.stats.hp === 14 && Rook.isAwake === true && Rook.crgCtr === 3));