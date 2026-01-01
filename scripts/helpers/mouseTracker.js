var x = 0;
var y = 0;
const Canvas = document.getElementById("battle-scene");
Canvas.addEventListener("mousemove", (event) => {
    // const BorderWidth = (Canvas.offsetWidth - Canvas.clientWidth) / 2 * scale;
    // console.log(scale);
    const Bounding = Canvas.getBoundingClientRect();
    x = Math.floor(event.clientX - Bounding.left);
    y = Math.floor(event.clientY - Bounding.top);
    // Update the current pixel tracker element
    // const headerH3 = document.getElementById("header-h3");
    // headerH3.innerText = "Current Pixel: (" + x + "," + y +")";
    // console.log("Current Pixel: (" + x + "," + y +")");
});

export { x, y };