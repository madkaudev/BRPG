const Canvas = document.getElementById("battle-scene");
const Ctx = Canvas.getContext("2d");
Ctx.imageSmoothingEnabled = false;

// Set the internal Width and Height. The actual display of canvas may be a different size.
const GameWidth = 1280;
const GameHeight = 720;
// Canvas.width = GameWidth;
// Canvas.height = GameHeight;

export { GameWidth, GameHeight };