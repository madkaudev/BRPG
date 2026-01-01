import { GameHeight, GameWidth } from "../assets/canvas.js";

export const FlashingCharacters = [];
// Draw when isFlashing true
var isFlashing = true;
const FlashInterval = 500;
setInterval(() => {
    isFlashing = !isFlashing;
}, FlashInterval);

const SpriteLength = 160;

// Compute the starting locations for characters. Super confusing math, but very simple once you see the result
export function computeLocations(Heroes, Enemies) {
    const CharacterLocations = new Map();
    // Heroes have the same X and Y increments every time
    let xIncrement = (GameWidth / 2 - (SpriteLength * 3)) / (4);
    let yIncrement = (GameHeight - (SpriteLength * 2)) / (3);
    // Draws heroes in a 3x2 grid
    for (let i = 0; i < Heroes.length; i++) {
        const X = Math.floor(xIncrement) + (SpriteLength + Math.floor(xIncrement)) * (i % 3);
        const Y = Math.floor(yIncrement) + (SpriteLength + Math.floor(yIncrement)) * Math.floor(i / 3);
        // const XScaled = Math.floor(X * scale);
        // const YScaled = Math.floor(Y * scale);
        // CharacterLocations.set(Heroes[i], [XScaled, YScaled]);
        CharacterLocations.set(Heroes[i], [X, Y]);
    }
    // X and Y increments scales based on amount of enemies. Column by column drawing order
    xIncrement = (GameWidth / 2 - (SpriteLength * (Math.floor((Enemies.length - 1) / 3) + 1))) / ((Math.floor((Enemies.length - 1) / 3) + 1) + 1);
    yIncrement = (GameHeight - (SpriteLength * Math.min(Enemies.length, 3))) / (Math.min(Enemies.length, 3) + 1);
    // Draws enemies
    for (let i = 0; i < Enemies.length; i++) {
        const X = GameWidth / 2 + Math.floor(xIncrement) + (SpriteLength + Math.floor(xIncrement)) * Math.floor(i / 3);
        const Y = Math.floor(yIncrement) + (SpriteLength + Math.floor(yIncrement)) * Math.floor(i % 3);
        // const XScaled = Math.floor(X * scale);
        // const YScaled = Math.floor(Y * scale);
        // CharacterLocations.set(Enemies[i], [XScaled, YScaled]);
        CharacterLocations.set(Enemies[i], [X, Y]);
    }
    return CharacterLocations;
}

// The function assumes that the max heroes is 6 and max enemies is 9
// Min heroes is 6 and min enemies is 1
export function drawCharacters(Ctx, CharacterLocations) {
    for (const [Character, Coords] of CharacterLocations) {
        if (isFlashing && FlashingCharacters.includes(Character) && Character.isAwake) {
            Ctx.drawImage(Character.image, Coords[0], Coords[1]);
        }
        else if (Character.isAwake && !FlashingCharacters.includes(Character)) {
            Ctx.drawImage(Character.image, Coords[0], Coords[1]);
        }
    }
}

// Draw healthbars for each character that is alive
export function drawHealth(Ctx, CharacterLocations) {
    for (const [Character, Coords] of CharacterLocations) {
        if (Character.isAwake) {
            const HealthPercent = Character.stats.hp[0] / Character.stats.hp[1];
            const X = Coords[0];
            const Y = Coords[1] - 25;
            const Width = Character.image.width;
            const Height = 15;
            Ctx.fillRect(X, Y, Math.ceil(Width * HealthPercent), Height);
            Ctx.lineWidth = 4;
            Ctx.strokeRect(X, Y, Width, Height);
            Ctx.lineWidth = 1;
        }
    }
}