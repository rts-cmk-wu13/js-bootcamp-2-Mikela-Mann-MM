let colorButton = document.getElementById("my-button"); 

// De to farver, der skal skiftes mellem
let colors = ["#eee", "#7f7"];

// Startfarven er den første farve i arrayet
let currentColorIndex = 0;

// Når knappen trykkes
colorButton.addEventListener("click", function() {
// Skift farven på knappen
colorButton.style.backgroundColor = colors[currentColorIndex];

// Skift til den næste farve ved at opdatere index
currentColorIndex = (currentColorIndex + 1) % colors.length;
});

/* Farvearray: colors holder de to farver (grå og grøn) i rækkefølge.
Index til at vælge farve: currentColorIndex bruges til at holde styr på, hvilken farve der er den aktuelle. Starten er 0, så den første farve (#eee) bliver valgt.
Event listener: Når knappen trykkes, bliver colorButton.style.backgroundColor sat til den nuværende farve (den farve, der svarer til currentColorIndex).
Opdatering af farve: Efter at have ændret farven, bliver currentColorIndex opdateret til den næste værdi, og ved at bruge % colors.length (modulus) sikrer jeg, at det kun skifter mellem de to farver (0 og 1). Det betyder, at når currentColorIndex når 2, vil det blive nulstillet til 0, og processen begynder forfra.
På denne måde kan man skifte mellem de to farver uden at bruge en if-sætning.*/



// const button = document.querySelector("#my-button")

// let isSelected = false;

// function toggleButton (selected) {
//     if (selected) {
//         button.classList.add("click")
//     } else {
//         button.classList.remove("click")
//     }
// }

// button.addEventListener("click", function(){

// isSelected = ! isSelected

// toggleButton(isSelected)

//   if ( isSelected == true ) {
//       isSelected = false
//    } else {
//       isSelected = true
// }

//   console.log(isSelected);
    
// })


// button.addEventListener("click", function() {
//   button.classList.toggle("click")
// })

// genvej til at udkommentere
// shift - option - a
// shift - command - 7 
