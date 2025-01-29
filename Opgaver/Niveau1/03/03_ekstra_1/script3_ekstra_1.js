const button = document.querySelector("#my-button"); // Vælg knappen med id
console.log(button);

button.addEventListener("click", function() {
    skjulElementViaCssSelector(".xtra_txt"); // Brug den ønskede selector her
});


// Funktion der skjuler et element
function skjulElement(element) {
    if (element) {
        element.style.display = "none"; // Skjul elementet
    }
}

// Funktion der viser et element
function visElement(element) {
    if (element) {
        element.style.display = "block"; // Vis elementet
    }
}

// Funktion der skjuler eller viser element via CSS selector
function skjulElementViaCssSelector(cssSelector) {
    const element = document.querySelector(cssSelector); // Find elementet via selector
    if (element) {
        const currentDisplay = window.getComputedStyle(element).display;
        
        if (currentDisplay === "none") {
            visElement(element); // Hvis elementet er skjult, vis det
        } else {
            skjulElement(element); // Hvis elementet er synligt, skjul det
        }
    }
}
