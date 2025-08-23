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
// Create array of the hero images.
const HeroImageArray = [ColtImage, DerrickImage, GrammyImage, PeteImage, RookImage, SamImage];

// Function that draws the hero sprites.
async function drawHeroes() {
    // Wait for all images to load before drawing sprites
    await Promise.all(
        HeroImageArray.map(
            (image) => 
                new Promise((resolve) => 
                    image.addEventListener("load", resolve)),
        ),
    );
    // Draw sprites
    Ctx.drawImage(HeroImageArray[0], 40, 60);
    Ctx.drawImage(HeroImageArray[1], 40, 280);
    Ctx.drawImage(HeroImageArray[2], 40, 500);
    Ctx.drawImage(HeroImageArray[3], 240, 133);
    Ctx.drawImage(HeroImageArray[4], 240, 426);
    Ctx.drawImage(HeroImageArray[5], 440, 280);
}
// Call function
drawHeroes();

// Create image objects of enemy sprites.
const GooberImage = new Image();
GooberImage.src = "images/sprites/enemies/pngs/goober.png";
const MenacingMantisImage = new Image();
MenacingMantisImage.src = "images/sprites/enemies/pngs/menacingMantis.png";
// Create array of the enemy images.
const EnemyImageArray = [GooberImage, MenacingMantisImage];

// Function that draws the enemy sprites.
async function drawEnemies() {
    // Wait for all images to load before drawing sprites
    await Promise.all(
        EnemyImageArray.map(
            (image) => 
                new Promise((resolve) => 
                    image.addEventListener("load", resolve)),
        ),
    );
    // Draw sprites
    for (let i = 0; i < EnemyImageArray.length; i++) {
        let x = 1080 - 200*Math.floor(i / 3);
        let y = 60 + 220*(i % 3);
        Ctx.drawImage(EnemyImageArray[i], x, y);
    }
}
// Call function
drawEnemies();

const Colt = new Character(1, 1, 0, 1, 5, 1, ColtImage);
