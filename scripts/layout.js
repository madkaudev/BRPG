// Constants
const BorderWidth = 4;

// Initialize the canvas.
const Canvas = document.getElementById("battle-scene");
const Ctx = Canvas.getContext("2d");
// Get new width and height of canvas based on viewport.
const Width = screen.width * 2/3;
const Height = screen.height * 2/3;
// Set new width and height of canvas.
Canvas.width = Width;
Canvas.height = Height;

// Set width of battle-menu to match canvas width
const BattleMenu = document.getElementById("battle-menu");
BattleMenu.style.width = Width + "px";

// Set the proportions of the text box
const TextBox = document.getElementById("text-box");
TextBox.style.height = BattleMenu.clientHeight + "px";
TextBox.style.width = Width + "px";
// Hide the box until needed
TextBox.style.display = "none";

// Event listener to handle actions when mouse is moving.
var x = 0;
var y = 0;
const BattleScence = document.getElementById("battle-scene");
BattleScence.addEventListener("mousemove", (event) => {
    // Set x and y coordinates of mouse based on canvas location on document
    const Bounding = BattleScence.getBoundingClientRect();
    x = Math.floor(event.clientX - Bounding.left - BorderWidth);
    y = Math.floor(event.clientY - Bounding.top - BorderWidth);
    // Update the current pixel tracker element
    const headerH3 = document.getElementById("header-h3");
    headerH3.innerText = "Current Pixel: (" + x + "," + y +")";
});

