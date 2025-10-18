

class Battler {
    // Declare private fields
    #heroes;        // Array of heroes
    #enemies;       // Array of enemies
    #characters;    // Array of heroes + enemies
    #turnOrder;     // Charcaters in the order of their turn to attack, may be missing if asleep
    // Declare constructor
    constructor(heroes, enemies) {
        this.#heroes = heroes;
        this.#enemies = enemies;
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
        // Shuffle the #turnOrder array in order to give fair chance to speed ties
        this.randomizeOrder();
        // Sort based on speed, descending order
        this.#turnOrder.sort((x, y) => y.stats.spd - x.stats.spd);
    }
    // Process i attacking j
    battle(i, j) {
        const Damage = this.#characters[i].stats.atk;
        this.#characters[i].crgCtr = 1;
        return this.#characters[j].hit(Damage);
    }
    // Shift index 0 to the end of the turnOrder array
    endTurn() {
        const Character = this.#turnOrder.shift();
        this.#turnOrder.push(Character);
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
        
    }
    // Process the computer's input
    computerInput(CurrentCharacter) {
        console.log(CurrentCharacter);
    }
}

export { Battler };