const button = document.querySelector("#my-button"); // Vælg knappen med id
console.log(button);

button.addEventListener("click", function() {
    skjulElementViaCssSelector(".xtra_txt"); // Brug den ønskede selector her
});

function skjulElementViaCssSelector(cssSelector) {
    const element = document.querySelector(cssSelector); // Find elementet via cssSelector
    if (element) { // Hvis elementet findes
        if (element.style.display === "block") {
            element.style.display = "none"; // Skjul elementet
        } else {
            element.style.display = "block"; // Vis elementet
        }
    }
}

