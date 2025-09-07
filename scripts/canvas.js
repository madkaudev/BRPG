// Initialize the canvas.
const Canvas = document.getElementById("battle-scene");
const Ctx = Canvas.getContext("2d");
// Get new width and height of canvas based on viewport.
const Width = screen.width * 2 / 3;
const Height = screen.height * 2 / 3;
// Set new width and height of canvas.
Canvas.width = Width;
Canvas.height = Height;