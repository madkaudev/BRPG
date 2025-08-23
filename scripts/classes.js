class Character {
    // Define private fields
    #hp;
    #atk;
    #def;
    #mgk;
    #crg;
    #lvl;
    #image;
    #isAwake;
    // Constructor
    constructor(hp, atk, def, mgk, crg, lvl, image) {
        this.#hp = hp;
        this.#atk = atk;
        this.#def = def;
        this.#mgk = mgk;
        this.#crg = crg;
        this.#lvl = lvl;
        this.#image = image;
        this.#isAwake = true;
    }
    // Return an object made up of core character stats
    getStats() {
        return {
            hp:     this.#hp,
            atk:    this.#atk,
            def:    this.#def,
            mgk:    this.#mgk,
            crg:    this.#crg,
            lvl:    this.#lvl
        }
    }
    // Process damage
    hit(damage) {
        let newDamage = Math.max(0, damage - this.#def);
        this.#hp = Math.max(0, this.#hp - newDamage);
        if (this.#hp <= 0) {
            this.#isAwake = false;
        }
    }
}
