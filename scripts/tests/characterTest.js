// Include modules
import { Hero, Enemy } from "../modules/character.js";

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

// Create test characters.
const Colt = new Hero(ColtStats);
const Derrick = new Hero(DerrickStats);
const Grammy = new Hero(GrammyStats);
const Pete = new Hero(PeteStats);
const Rook = new Hero(RookStats);
const Sam = new Hero(SamStats);

/* ---------------------------Test Cases------------------------------ */
// Test hit() function.
console.log("Hit Test (Colt): ".concat(Colt.hit(15) === 5));
console.log("Hit Test (Derrick): ".concat(Derrick.hit(20) === 0));
console.log("Hit Test (Grammy): ".concat(Grammy.hit(7) === 4));
console.log("Hit Test (Pete): ".concat(Pete.hit(500) === 0));
console.log("Hit Test (Rook): ".concat(Rook.hit(1) === 19));
console.log("Hit Test (Sam): ".concat(Sam.hit(0) === 15));

// Test addExp() function.
Colt.addExp(0);
Derrick.addExp(1);
Grammy.addExp(5);
Pete.addExp(35);
Rook.addExp(421);
Sam.addExp(1002);
console.log("addExp() Test (Colt): ".concat(Colt.stats.exp === 0));
console.log("addExp() Test (Derrick): ".concat(Derrick.stats.exp === 1));
console.log("addExp() Test (Grammy): ".concat(Grammy.stats.exp === 5));
console.log("addExp() Test (Pete): ".concat(Pete.stats.exp === 35));
console.log("addExp() Test (Rook): ".concat(Rook.stats.exp === 421));
console.log("addExp() Test (Sam): ".concat(Sam.stats.exp === 1002));

// Test levelUp() function.
Colt.levelUp();
Derrick.levelUp();
Grammy.levelUp();
Pete.levelUp();
Rook.levelUp();
Sam.levelUp();
console.log("levelUp() Test (Colt): ".concat(Colt.stats.lvl === 1));
console.log("levelUp() Test (Derrick): ".concat(Derrick.stats.lvl === 1));
console.log("levelUp() Test (Grammy): ".concat(Grammy.stats.lvl === 1));
console.log("levelUp() Test (Pete): ".concat(Pete.stats.lvl === 2));
console.log("levelUp() Test (Rook): ".concat(Rook.stats.lvl === 10));
console.log("levelUp() Test (Sam): ".concat(Sam.stats.lvl === 15));