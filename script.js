document.addEventListener('DOMContentLoaded', () => {
    var el = document.querySelector('.cards-container');
    var sortable = Sortable.create(el, {
        animation: 150,
        chosenClass: "selected",
        dragClass: "drag",
        delay: 100,
        delayOnTouchOnly: true,
        ghostClass: "ghost",
        
        onStart: function (evt) {
            evt.item.classList.add('dragging');
        },
        onEnd: function (evt) {
            evt.item.classList.remove('dragging');
        }
    });

    // Asumiendo que '.card' es la clase de tus tarjetas
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.setAttribute('tabindex', '0'); // Hacer que cada tarjeta sea enfocable
        card.addEventListener('keydown', (e) => {
            // Obtén el índice de la tarjeta actual enfocada
            const currentCard = document.activeElement;
            const currentIndex = Array.from(cards).indexOf(currentCard);

            let nextIndex;
            if (e.key === 'ArrowRight') {
                // Enfocar la siguiente tarjeta
                nextIndex = (currentIndex + 1) % cards.length;
                cards[nextIndex].focus();
            } else if (e.key === 'ArrowLeft') {
                // Enfocar la tarjeta anterior
                nextIndex = (currentIndex - 1 + cards.length) % cards.length;
                cards[nextIndex].focus();
            } else if (e.key === 'Enter') {
                // Activar algo cuando se presiona Enter, como abrir un enlace
                currentCard.click();
            }
        });
    });
});