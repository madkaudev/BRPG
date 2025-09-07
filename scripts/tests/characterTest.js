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
var coltStats = {
    hp: 15,
    atk: 15,
    def: 15,
    spd: 15,
    mgk: 15,
    crg: 5,
    image: ColtImage
};
var derrickStats = {
    hp: 12,
    atk: 10,
    def: 10,
    spd: 12,
    mgk: 45,
    crg: 3,
    image: DerrickImage
};
var grammyStats = {
    hp: 10,
    atk: 18,
    def: 10,
    spd: 6,
    mgk: 25,
    crg: 3,
    image: GrammyImage
};
var peteStats = {
    hp: 15,
    atk: 10,
    def: 15,
    spd: 10,
    mgk: 20,
    crg: 1,
    image: PeteImage
};
var rookStats = {
    hp: 20,
    atk: 10,
    def: 25,
    spd: 4,
    mgk: 10,
    crg: 3,
    image: RookImage
};
var samStats = {
    hp: 15,
    atk: 10,
    def: 15,
    spd: 12,
    mgk: 15,
    crg: 1,
    image: SamImage
};

// Create test characters.
const Colt = new Hero(coltStats);
const Derrick = new Hero(derrickStats);
const Grammy = new Hero(grammyStats);
const Pete = new Hero(peteStats);
const Rook = new Hero(rookStats);
const Sam = new Hero(samStats);

/* ---------------------------Test Cases------------------------------ */

// Test the stats getter.
function getStatsTest(inputStats, testStats) {
    return inputStats.hp === testStats.hp &&
           inputStats.atk === testStats.atk &&
           inputStats.def === testStats.def &&
           inputStats.spd === testStats.spd &&
           inputStats.mgk === testStats.mgk &&
           inputStats.crg === testStats.crg &&
           0 === testStats.crgCtr;
}
console.log("Stats Getter Test (Colt): " + getStatsTest(coltStats, Colt.stats));
console.log("Stats Getter Test (Derrick): " + getStatsTest(derrickStats, Derrick.stats));
console.log("Stats Getter Test (Grammy): " + getStatsTest(grammyStats, Grammy.stats));
console.log("Stats Getter Test (Pete): " + getStatsTest(peteStats, Pete.stats));
console.log("Stats Getter Test (Rook): " + getStatsTest(rookStats, Rook.stats));
console.log("Stats Getter Test (Sam): " + getStatsTest(samStats, Sam.stats));

// Test the stats setter.
const SetStatsColt = {
    hp: 7,
    atk: 8,
    def: 9,
    spd: 10,
    mgk: 11,
    crg: 12,
    crgCtr: 13
}
const SetStatsDerrick = {
    hp: 7
}
const SetStatsGrammy = {
    hp: 7,
    atk: 8,
}
const SetStatsPete = {
    atk: 8,
    def: 9,
    spd: 10,
    mgk: 11,
    crg: 12,
    crgCtr: 13
}
const SetStatsRook = {
    hp: 7,
    def: 9,
    mgk: 11,
    crgCtr: 13
}
const SetStatsSam = {
}
Colt.stats = SetStatsColt;
Derrick.stats = SetStatsDerrick;
Grammy.stats = SetStatsGrammy;
Pete.stats = SetStatsPete;
Rook.stats = SetStatsRook;
Sam.stats = SetStatsSam;
coltStats = {
    hp: 7,
    atk: 8,
    def: 9,
    spd: 10,
    mgk: 11,
    crg: 12,
    crgCtr: 13
}
derrickStats = {
    hp: 7,
    atk: 10,
    def: 10,
    spd: 12,
    mgk: 45,
    crg: 3,
    crgCtr: 0
};
grammyStats = {
    hp: 7,
    atk: 8,
    def: 10,
    spd: 6,
    mgk: 25,
    crg: 3,
    crgCtr: 0
};
peteStats = {
    hp: 15,
    atk: 8,
    def: 9,
    spd: 10,
    mgk: 11,
    crg: 12,
    crgCtr: 13
};
rookStats = {
    hp: 7,
    atk: 10,
    def: 9,
    spd: 4,
    mgk: 11,
    crg: 3,
    crgCtr: 13
};
samStats = {
    hp: 15,
    atk: 10,
    def: 15,
    spd: 12,
    mgk: 15,
    crg: 1,
    crgCtr: 0
};
function setStatsTest(inputStats, testStats) {
    return inputStats.hp === testStats.hp &&
           inputStats.atk === testStats.atk &&
           inputStats.def === testStats.def &&
           inputStats.spd === testStats.spd &&
           inputStats.mgk === testStats.mgk &&
           inputStats.crg === testStats.crg &&
           inputStats.crgCtr === testStats.crgCtr;
}
console.log("Stats Setter Test (Colt): " + setStatsTest(coltStats, Colt.stats));
console.log("Stats Setter Test (Derrick): " + setStatsTest(derrickStats, Derrick.stats));
console.log("Stats Setter Test (Grammy): " + setStatsTest(grammyStats, Grammy.stats));
console.log("Stats Setter Test (Pete): " + setStatsTest(peteStats, Pete.stats));
console.log("Stats Setter Test (Rook): " + setStatsTest(rookStats, Rook.stats));
console.log("Stats Setter Test (Sam): " + setStatsTest(samStats, Sam.stats));

// Test hit() function.
coltStats = {
    hp: 15,
    atk: 15,
    def: 15,
    spd: 15,
    mgk: 15,
    crg: 5,
    image: ColtImage
};
derrickStats = {
    hp: 12,
    atk: 10,
    def: 10,
    spd: 12,
    mgk: 45,
    crg: 3,
    image: DerrickImage
};
grammyStats = {
    hp: 10,
    atk: 18,
    def: 10,
    spd: 6,
    mgk: 25,
    crg: 3,
    image: GrammyImage
};
peteStats = {
    hp: 15,
    atk: 10,
    def: 15,
    spd: 10,
    mgk: 20,
    crg: 1,
    image: PeteImage
};
rookStats = {
    hp: 20,
    atk: 10,
    def: 25,
    spd: 4,
    mgk: 10,
    crg: 3,
    image: RookImage
};
samStats = {
    hp: 15,
    atk: 10,
    def: 15,
    spd: 12,
    mgk: 15,
    crg: 1,
    image: SamImage
};
Colt.stats = coltStats;
Derrick.stats = derrickStats;
Grammy.stats = grammyStats;
Pete.stats = peteStats;
Rook.stats = rookStats;
Sam.stats = samStats;
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