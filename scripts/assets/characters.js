// Import the hero images
import { HeroImages, EnemyImages } from "./images.js";
import { Hero, Enemy } from "../classes/characterClass.js";

// Create stat splits for heroes
const ColtStats = {
    name: "Colt",
    type: "Hero",
    hp: 15,
    atk: 15,
    def: 15,
    spd: 15,
    mgk: 15,
    crg: 5,
    image: HeroImages["Colt"]
};
const DerrickStats = {
    name: "Derrick",
    type: "Hero",
    hp: 12,
    atk: 10,
    def: 10,
    spd: 12,
    mgk: 45,
    crg: 3,
    image: HeroImages["Derrick"]
};
const GrammyStats = {
    name: "Grammy",
    type: "Hero",
    hp: 10,
    atk: 18,
    def: 10,
    spd: 6,
    mgk: 25,
    crg: 3,
    image: HeroImages["Grammy"]
};
const PeteStats = {
    name: "Pete",
    type: "Hero",
    hp: 15,
    atk: 10,
    def: 15,
    spd: 10,
    mgk: 20,
    crg: 1,
    image: HeroImages["Pete"]
};
const RookStats = {
    name: "Rook",
    type: "Hero",
    hp: 20,
    atk: 10,
    def: 25,
    spd: 4,
    mgk: 10,
    crg: 3,
    image: HeroImages["Rook"]
};
const SamStats = {
    name: "Sam",
    type: "Hero",
    hp: 15,
    atk: 10,
    def: 15,
    spd: 12,
    mgk: 15,
    crg: 1,
    image: HeroImages["Sam"]
};
// Create hero objects
const Colt = new Hero(ColtStats);
const Derrick = new Hero(DerrickStats);
const Grammy = new Hero(GrammyStats);
const Pete = new Hero(PeteStats);
const Rook = new Hero(RookStats);
const Sam = new Hero(SamStats);
// Create an array of hero objects
const Heroes = [Colt, Derrick, Grammy, Pete, Rook, Sam];

// Create stat splits for enemies
const GooberStats = {
    name: "Goober",
    type: "Enemy",
    hp: 10,
    atk: 10,
    def: 10,
    spd: 8,
    mgk: 20,
    crg: 2,
    image: EnemyImages["Goober"]
};
const MenacingMantisStats = {
    name: "Menacing Mantis",
    type: "Enemy",
    hp: 15,
    atk: 12,
    def: 15,
    spd: 12,
    mgk: 20,
    crg: 3,
    image: EnemyImages["MenacingMantis"]
};
// Create enemy objects
const Goober = new Enemy(GooberStats);
const MenacingMantis = new Enemy(MenacingMantisStats);
// Create an array of enemy objects
const Enemies = [Goober, MenacingMantis];

// Create an array of all characters
const Characters = [...Heroes, ...Enemies];

export { Heroes, Enemies, Characters };