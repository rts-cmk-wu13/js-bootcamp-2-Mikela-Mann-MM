document.addEventListener("DOMContentLoaded", function () {
    const buttonsContainer = document.querySelector("#buttons");

    buttonsContainer.addEventListener("click", function (event) {
        if (event.target.tagName === "BUTTON") { // 
            // Fjern "active" klassen fra alle knapper
            document.querySelectorAll("#buttons button").forEach(button => {
                button.classList.remove("active");
            });

            // Tilføj "active" klassen til den trykkede knap
            event.target.classList.add("active");
        }
    });
});

/* let buttons = document.querySelectorAll("#buttons button")

console.log(buttons);

buttons.forEach(function (button) {
    button.addEventListener("click", function () {

        buttons.forEach(function (button) {
            button.style.backgroundColor = "#eee"
        })

        button.style.backgroundColor = "#7f7"

    })

})
 */