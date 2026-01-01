// Brings up the error dialog box
const ErrorDialog = document.getElementById("error-dialog");
const ErrorDialogButton = document.getElementById("error-dialog-button");
const ErrorDialogText = document.getElementById("error-dialog-text");
export function setErrorDialog(message) {
    return new Promise((resolve) => {
        ErrorDialog.showModal();
        ErrorDialogText.innerText = message;
        ErrorDialogButton.addEventListener("click", () => {
            ErrorDialog.close();
            resolve();
        }, { once: true });
    });
}

const BattleMenuFrame = document.getElementById("battle-menu-frame");
const TextContainerFrame = document.getElementById("text-container-frame");
const TextContainerButton = document.getElementById("text-container-button");
// Function to open the text box/container with an option to not include the button
export function openText(includeButton = true) {
    // Obscure the battle menu
    BattleMenuFrame.style.display = "none";
    // Bring up the text container
    TextContainerFrame.style.display = "flex";
    // Obscure or bring up button if needed
    if (!includeButton) {
        TextContainerButton.style.display = "none";
    }
    else {
        TextContainerButton.style.display = "block";
    }
}
// Function to close the text box/container
export function closeText() {
    // Obscure the text container
    TextContainerFrame.style.display = "none";
    // Bring up the battle menu
    BattleMenuFrame.style.display = "flex";
}
const TextBox = document.getElementById("text-box");
// Function to set the text of the text box/container
export function setText(message) {
    TextBox.textContent = message;
}
// Function to set the text of the text box/container and add a timer
export function setTextTimer(message, time) {
    setText(message);
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

// const Portrait = document.getElementById("portrait");
// // Function to set the protrait image of the battle menu
// export function setPortrait(name) {
//     Portrait.src = "/images/ui/pngs/" + name.toLowerCase() + "Portrait.png";
// }

// Random integer generator within [min, max)
export function rng(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

// Clear the contents of an array without reassignment
export function clearArray(arr) {
    while (arr.length > 0) {
        arr.pop();
    }
}