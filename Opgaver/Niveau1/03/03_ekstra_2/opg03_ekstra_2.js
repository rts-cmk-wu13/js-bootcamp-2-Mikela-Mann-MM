const button = document.querySelector("#my-button"); // Vælg knappen med id
console.log(button);

button.addEventListener("click", function () {
    skjulElementerViaCssSelector(".xtra_txt"); // Brug den ønskede selector her
});

// Funktion der skjuler elementer
function skjulElementer(elementer) {
    elementer.forEach(element => {
        element.style.display = "none"; // Skjul elementerne
    });
}

// Funktion der viser elementer
function visElementer(elementer) {
    elementer.forEach(element => {
        element.style.display = "block"; // Vis elementerne
    });
}

// Funktion der skjuler eller viser elementer via CSS selector
function skjulElementerViaCssSelector(cssSelector) {
    const elementer = document.querySelectorAll(cssSelector); // Find alle matchende elementer
    if (elementer.length > 0) {
        elementer.forEach(element => {
            const currentDisplay = window.getComputedStyle(element).display;
            element.style.display = (currentDisplay === "none") ? "block" : "none";
        });
    }
}
