import { battleMenuSelection } from "./battleMenuFunctions.js";

class Battler {
    // Declare private fields
    #heroes;            // Array of heroes
    #enemies;           // Array of enemies
    // #characterLocations;// Map of character objects mapped to [x, y] coordinates on canvas
    #characters;        // Array of heroes + enemies
    #turnOrder;         // Charcaters in the order of their turn to attack, may be missing if asleep
    // Declare constructor
    constructor(heroes, enemies) {
        this.#heroes = heroes;
        this.#enemies = enemies;
        // this.#characterLocations = characterLocations;
        this.#characters = heroes.concat(enemies);
        this.#turnOrder = heroes.concat(enemies);
    }
    // Get the characters array
    get characters() {
        return this.#characters;
    }
    // Get the turnOrder array
    get turnOrder() {
        return this.#turnOrder;
    }
    // Randomize the #turnOrder array
    randomizeOrder() {
        // Modern version of the Fisher–Yates shuffle
        for (let i = this.#turnOrder.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.#turnOrder[i], this.#turnOrder[j]] = [this.#turnOrder[j], this.#turnOrder[i]];
        }
    }
    // Organize the #turnOrder array based on speed
    organizeOrder() {
        // Remove any EOC tokens
        this.#turnOrder = this.#turnOrder.filter((character) => character !== "EOC");
        // Shuffle the #turnOrder array in order to give fair chance to speed ties
        this.randomizeOrder();
        // Sort based on speed, descending order
        this.#turnOrder.sort((x, y) => y.stats.spd - x.stats.spd);
        // Append an "end of cycle" marker at the end of the queue
        this.#turnOrder.push("EOC");
    }
    // Get the character's whose turn it is
    getTurn() {
        let CurrentCharacter = this.#turnOrder[0];
        while (CurrentCharacter.isAwake === false) {
            this.endTurn();
            CurrentCharacter = this.#turnOrder[0];
        }
        return CurrentCharacter;
    }
    // Process i attacking j
    attack(Attacker, Target) {
        const Damage = Attacker.stats.atk;
        // Add one charge to the attacker's charge counter
        Attacker.crgCtr = 1;
        // Return damage done
        return Target.hit(Damage);
    }
    // Shift index 0 to the end of the turnOrder array
    endTurn() {
        const Character = this.#turnOrder.shift();
        this.#turnOrder.push(Character);
        // Reshuffle the turn order after a full cycle
        if (this.#turnOrder[0] === "EOC") {
            // Remove the token
            this.#turnOrder.shift();
            this.organizeOrder();
        }
    }
    // Check if either heroes or enemies are asleep
    whoseAsleep() {
        let areHeroesAsleep = true;
        for (const Hero of this.#heroes) {
            if (Hero.isAwake) {
                areHeroesAsleep = false;
                break;
            }
        }
        let areEnemiesAsleep = true;
        for (const Enemy of this.#enemies) {
            if (Enemy.isAwake) {
                areEnemiesAsleep = false;
                break;
            }
        }
        if (areHeroesAsleep) {
            return "Heroes";
        }
        else if (areEnemiesAsleep) {
            return "Enemies";
        }
        else {
            return "No One";
        }
    }
    // Check if character is a hero or enemy
    isHero(Character) {
        if (this.#heroes.includes(Character)) {
            return true;
        }
        else {
            return false;
        }
    }
    // Process a player's input
    async playerInput(CurrentCharacter) {
        let selection;
        do {
            selection = await battleMenuSelection(CurrentCharacter, this.#heroes, this.#enemies);
        }
        while (selection[1] === null)
        return selection;
    }
    // Process the computer's input
    computerInput() {
        let targetHero;
        for (const Hero of this.#heroes) {
            if (Hero.isAwake) {
                targetHero = Hero;
                break;
            }
        }
        for (const Hero of this.#heroes) {
            if (Hero.stats.hp[0] < targetHero.stats.hp[0] && Hero.isAwake) {
                targetHero = Hero;
            }
            else if (Hero.stats.hp[0] === targetHero.stats.hp[0] && Hero.isAwake) {
                if (Hero.stats.def < targetHero.stats.def) {
                    targetHero = Hero;
                }
            }
        }
        return targetHero;
    }
}

export { Battler };