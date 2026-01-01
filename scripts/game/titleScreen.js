// Brings up the settings dialog box
const SettingsDialog = document.getElementById("settings-dialog");
const SettingsDialogButton = document.getElementById("settings-dialog-button");
const FontSizeRange = document.getElementById("font-size-range");
const FullscreenCheckbox = document.getElementById("fullscreen-checkbox");
const DarkModeCheckbox = document.getElementById("dark-mode-checkbox");
function showSettingsDialog() {
    // Options event handlers
    function changeTextSize() {
        const HTML = document.querySelector("html");
        HTML.style.fontSize = (50 + 25 * (FontSizeRange.value - 1)).toString() + "%";
        // Body.style.fontSize = ((0.50 + 0.25 * (FontSizeRange.value - 1)) * 2).toString() + "dvw";
        console.log(HTML.style.fontSize);
    }
    FontSizeRange.addEventListener("input", changeTextSize);
    async function setFullscreen() {
        if (!document.fullscreenEnabled) {
            console.log("Can't request fullscreen.");
        }
        // Document is not in full screen
        else if (document.fullscreenElement === null) {
            try {
                await document.body.requestFullscreen();
                SettingsDialog.close();
                SettingsDialogButton.removeEventListener("click", closeSettingsDialog);
            } catch (e) {
                console.log("Couldn't enter fullscreen.");
            }
        }
        // Document is in full screen
        else if (document.fullscreenElement !== null) {
            try {
                await document.exitFullscreen();
                SettingsDialog.close();
                SettingsDialogButton.removeEventListener("click", closeSettingsDialog);
            } catch (e) {
                console.log("Couldn't exit fullscreen.");
            }
        }
    }
    FullscreenCheckbox.addEventListener("change", setFullscreen);
    function setDarkMode() {
        if (DarkModeCheckbox.checked === true) {
            document.querySelector("html").style.filter = "invert(100%)";
        }
        else {
            document.querySelector("html").style.filter = "invert(0%)";
        }
    }
    DarkModeCheckbox.addEventListener("change", setDarkMode);
    // Start to show the dialog
    SettingsDialog.showModal();
    // Set the exit button
    function closeSettingsDialog() {
        // Remove all option event listners before closing
        FontSizeRange.removeEventListener("input", changeTextSize);
        FullscreenCheckbox.removeEventListener("change", setFullscreen);
        SettingsDialog.close();
        SettingsDialogButton.removeEventListener("click", closeSettingsDialog);
    }
    SettingsDialogButton.addEventListener("click", closeSettingsDialog);
}
const SettingsButton = document.getElementById("settings-button");
SettingsButton.addEventListener("click", showSettingsDialog);
document.addEventListener("fullscreenchange", () => {
    // Document is not in full screen
    if (document.fullscreenElement === null) {
        FullscreenCheckbox.checked = false;
    }
    // Document is in full screen
    else if (document.fullscreenElement !== null) {
        FullscreenCheckbox.checked = true;
    }
});

// Brings up the credits dialog box
const CreditsDialog = document.getElementById("credits-dialog");
const CreditsDialogButton = document.getElementById("credits-dialog-button");
function showCreditsDialog() {
    CreditsDialog.showModal();
    CreditsDialogButton.addEventListener("click", () => {
        CreditsDialog.close();
        resolve();
    }, { once: true });
}
const CreditsButton = document.getElementById("credits-button");
CreditsButton.addEventListener("click", showCreditsDialog);