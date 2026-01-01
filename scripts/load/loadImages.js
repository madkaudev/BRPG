// Import the character image objects
import { Images } from "../assets/images.js";
import { setErrorDialog } from "../helpers/helperFunctions.js";

export async function loadImages() {
    // Load all the images
    const InvalidImages = [];
    await Promise.all(
        Object.values(Images).map((image) =>
            new Promise((resolve) => {
                image.addEventListener("load", () => {
                    console.log("" + image + " loaded.");
                    resolve();
                }, { once: true });
                image.addEventListener("error", () => {
                    InvalidImages.push(image);
                    resolve();
                }, { once: true });
            })
        )
    );

    // Set the error dialog if some images failed to load
    if (InvalidImages.length > 0) {
        var errorMessage = "The following images could not be loaded: \n";
        for (let i = 0; i < InvalidImages.length; i++) {
            errorMessage += InvalidImages[i].outerHTML + "\n";
        }
        await setErrorDialog(errorMessage);
    }
}
