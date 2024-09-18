// Toggle visibility of the cards container on burger menu click
document.getElementById("burger-menu").addEventListener("click", function() {
    const cardsContainer = document.getElementById("cards-container");

    // If cards container is hidden, show it; otherwise, hide it
    if (cardsContainer.classList.contains("hidden")) {
        cardsContainer.classList.remove("hidden");
        cardsContainer.classList.add("visible");
    } else {
        cardsContainer.classList.remove("visible");
        cardsContainer.classList.add("hidden");
    }
});

// Handle card click animations
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        const selectedCard = this;

        // Loop through all cards to manage visibility and the active state
        document.querySelectorAll('.card').forEach(card => {
            if (card === selectedCard) {
                // Activate the selected card (expand it)
                card.classList.add('active');
                card.classList.remove('hide');
            } else {
                // Hide other cards
                card.classList.add('hide');
            }
        });
    });
});
