// Definér funktionen beregnForhold
function beregnForhold(a, b) {
    return a / b;
}

// Kald funktionen med argumenterne 4 og 3
let resultat = beregnForhold(4, 3);

// Udskriv resultatet i konsollen
console.log(resultat); // Forventet udskrift: 1.3333333333333333

// Den oprindelige funktion beregnForhold
function beregnForhold(a, b) {
    return a / b;
}

// Den nye funktion beregnForhold2 med check for division med 0
function beregnForhold2(a, b) {
    if (b === 0) {
        return null; // Hvis b er 0, returner null
    } else {
        return a / b; // Hvis b ikke er 0, returner divisionen
    }
}

// Kald den nye funktion med argumenterne 4 og 3
let resultat2 = beregnForhold2(4, 3);

// Udskriv resultatet i konsollen
console.log(resultat2); // Forventet udskrift: 1.3333

// Kald den nye funktion med argumenterne 4 og 0
let resultatMedZero = beregnForhold2(4, 0);

// Udskriv resultatet i konsollen for division med 0
console.log(resultatMedZero); // Forventet udskrift: null
