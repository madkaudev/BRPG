// General class for all characters.
class Character {
    // Define private fields.
    #hp;        // The hit points, how many hits a character can take
    #atk;       // The attack stat
    #def;     // The defense stat
    #spd;       // The speed stat, decides battle order each turn
    #mgk;       // The magic stat, how powerful the character's ability is
    #crg;       // The charge points needed to activate an ability
    #crgCtr;    // The current charge points
    #image;     // The image sprite object of a character
    #isAwake;   // Whether or not the character is "awake" (alive)

    // Character constructor. Data object contains values for private fields.
    constructor(data) {
        // Set private fields from data object
        this.#hp = data.hp;
        this.#atk = data.atk;
        this.#def = data.def;
        this.#spd = data.spd;
        this.#mgk = data.mgk;
        this.#crg = data.crg;
        this.#image = data.image;
        // Automatically set
        this.#isAwake = true;
        this.#crgCtr = 0;
    }

    // Return an object made up of core character stats.
    get stats() {
        return {
            hp: this.#hp,
            atk: this.#atk,
            def: this.#def,
            spd: this.#spd,
            mgk: this.#mgk,
            crg: this.#crg,
            crgCtr: this.#crgCtr
        }
    }
    // Set the stats of a character.
    set stats(stats) {
        this.#hp = stats.hp ?? this.#hp;
        this.#atk = stats.atk ?? this.#atk;
        this.#def = stats.def ?? this.#def;
        this.#spd = stats.spd ?? this.#spd;
        this.#mgk = stats.mgk ?? this.#mgk;
        this.#crg = stats.crg ?? this.#crg;
        this.#crgCtr = stats.crgCtr ?? this.#crgCtr;
    }
    // Return the character's image sprite.
    get image() {
        return this.#image;
    }
    // Set the character's image sprite.
    set image(image) {
        this.#image = image;
    }
    // Return the status of the character.
    get isAwake() {
        return this.#isAwake;
    }
    // Set the status of the character.
    set isAwake(status) {
        this.#isAwake = status;
    }
    
    // Process damage to a character.
    hit(damage) {
        let newDamage = Math.ceil(damage * (100 / (100 + this.#def * 10 / 3)));
        this.#hp = Math.max(0, this.#hp - newDamage);
        if (this.#hp <= 0) {
            this.#isAwake = false;
            this.#hp = 0;
        }
        return this.#hp;
    }
}

// The class to represent heroes.
class Hero extends Character {
    // Define private fields.
    #lvl;       // The level of a hero
    #exp;       // The experience points of a hero
    //#ultimate;  // Ultimate ability function

    // Hero constructor. Data object contains values for private fields.
    constructor(data) {
        super(data);
        this.#lvl = 1;
        this.#exp = 0;
    }

    // Return an object made up of core hero stats.
    get stats() {
        let stats = super.stats;
        stats.lvl = this.#lvl;
        stats.exp = this.#exp;
        return stats;
    }
    // Set the stats of a character.
    set stats(stats) {
        super.stats = stats;
        this.#lvl = stats.lvl ?? this.#lvl;
        this.#exp = stats.exp ?? this.#exp;
    }

    // Level up a hero based on a quadratic level curve.
    levelUp() {
        // Scaling factor
        const Alpha = 4;
        let newLevel = this.#exp / Alpha;
        newLevel = Math.sqrt(newLevel);
        // Account for cases with very low exp
        newLevel = Math.max(1, Math.floor(newLevel));
        // Set the private field
        this.#lvl = newLevel;
        // Return new level
        return this.#lvl;
    }
    // Add experience points to a hero.
    addExp(points) {
        this.#exp += points;
        return this.#exp;
    }
}

// The enemy class
class Enemy extends Character {
    constructor(data) {
        super(data);
    }
}