// Create image objects of character sprites.
const ColtImage = new Image();
ColtImage.src = "images/sprites/characters/pngs/colt.png";
const DerrickImage = new Image();
DerrickImage.src = "images/sprites/characters/pngs/derrick.png";
const GrammyImage = new Image();
GrammyImage.src = "images/sprites/characters/pngs/grammy.png";
const PeteImage = new Image();
PeteImage.src = "images/sprites/characters/pngs/pete.png";
const RookImage = new Image();
RookImage.src = "images/sprites/characters/pngs/rook.png";
const SamImage = new Image();
SamImage.src = "images/sprites/characters/pngs/sam.png";
// Create array of the character images.
const CharacterImageArray = [ColtImage, DerrickImage, GrammyImage, PeteImage, RookImage, SamImage];

// Function that draws the character sprites.
async function drawCharacters() {
    // Wait for all images to load before drawing sprites
    await Promise.all(
        CharacterImageArray.map(
            (image) => 
                new Promise((resolve) => 
                    image.addEventListener("load", resolve)),
        ),
    );
    // Draw sprites
    Ctx.drawImage(CharacterImageArray[0], 40, 60);
    Ctx.drawImage(CharacterImageArray[1], 40, 280);
    Ctx.drawImage(CharacterImageArray[2], 40, 500);
    Ctx.drawImage(CharacterImageArray[3], 240, 133);
    Ctx.drawImage(CharacterImageArray[4], 240, 426);
    Ctx.drawImage(CharacterImageArray[5], 440, 280);
}
// Call function
drawCharacters();

// Create image objects of enemy sprites.
const GooberImage = new Image();
GooberImage.src = "images/sprites/enemies/pngs/goober.png";
const MenacingMantisImage = new Image();
MenacingMantisImage.src = "images/sprites/enemies/pngs/menacingMantis.png";
// Create array of the character images.
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
