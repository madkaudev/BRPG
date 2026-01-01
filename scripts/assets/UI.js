// Dimensions of Main element
const MainWidth = 1600;
const MainHeight = 900;

// Scale of main, canvas, and UI
var scale = 1;

const main = document.querySelector("main");
function scaleMain() {
    while (visualViewport.width / MainWidth / scale < 1 || 
           visualViewport.height / MainHeight / scale < 1 ||
           (visualViewport.width / MainWidth / scale >= 2 && 
           visualViewport.height / MainHeight / scale >= 2))
    {
        // Scale down
        if (visualViewport.width / MainWidth / scale < 1 || visualViewport.height / MainHeight / scale < 1) {
            scale = scale / 2;
        }
        // Scale up
        else if (visualViewport.width / MainWidth / scale >= 2 && visualViewport.height / MainHeight / scale >= 2) {
            scale *= 2;
        }
    }
    main.style.transform = `translateX(-50%) scale(${scale})`;
}

window.addEventListener("resize", scaleMain);
window.addEventListener("orientationchange", scaleMain);
scaleMain();

export { scale };