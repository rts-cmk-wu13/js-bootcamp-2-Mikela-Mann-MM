// JavaScript til indkøbskurv håndtering

document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.querySelector(".cart-container");
    const cartItems = document.querySelectorAll(".cart-item");
    const emptyCartMessage = "Du har i øjeblikket ingen varer i din kurv";
    const paymentButton = document.querySelector(".button--payment");

    if (!paymentButton) {
        console.error("Betalingsknappen blev ikke fundet i DOM'en.");
        return;
    }

    cartItems.forEach((item) => {
        const subtractButton = item.querySelector(".subtractButton");
        const addButton = item.querySelector(".addButton");
        const resetButton = item.querySelector(".resetButton");
        const quantityElement = item.querySelector(".quantity");
        const priceElement = item.querySelector(".item-price");
        const pricePerItem = parseInt(priceElement.textContent.split(" ")[0]); // Ekstrakt pris uden "kr"

        // Tilføj mængde
        addButton.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity += 1;
            quantityElement.textContent = quantity;
            updatePrice(priceElement, pricePerItem, quantity);
        });

        // Træk fra mængde
        subtractButton.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity -= 1;
                quantityElement.textContent = quantity;
                updatePrice(priceElement, pricePerItem, quantity);
            } else {
                removeItem(item);
            }
        });

        // Fjern element
        resetButton.addEventListener("click", () => {
            removeItem(item);
        });
    });

    // Funktion til at opdatere prisen baseret på mængde
    function updatePrice(priceElement, pricePerItem, quantity) {
        const newPrice = pricePerItem * quantity;
        priceElement.textContent = `${newPrice} kr`;
    }

    // Funktion til at fjerne et element fra kurven
    function removeItem(item) {
        item.remove();
        checkCartEmpty();
    }

    // Kontrollér om kurven er tom
    function checkCartEmpty() {
        const items = cartContainer.querySelectorAll(".cart-item");
        if (items.length === 0) {
            const messageElement = document.createElement("p");
            messageElement.className = "empty-cart-message";
            messageElement.textContent = emptyCartMessage;
            cartContainer.appendChild(messageElement);
            disablePaymentButton();
        } else {
            const existingMessage = cartContainer.querySelector(".empty-cart-message");
            if (existingMessage) existingMessage.remove();
            enablePaymentButton();
        }
    }

    // Funktion til at deaktivere betalingsknappen
    function disablePaymentButton() {
        console.log("Deaktiverer betalingsknappen.");
        paymentButton.setAttribute("disabled", "true");
        paymentButton.classList.add("disabled");
    }

    // Funktion til at aktivere betalingsknappen
    function enablePaymentButton() {
        console.log("Aktiverer betalingsknappen.");
        paymentButton.removeAttribute("disabled");
        paymentButton.classList.remove("disabled");
    }

    // Initial kontrol
    checkCartEmpty();
});
