document.addEventListener('DOMContentLoaded', () => {
    // Código para la funcionalidad de arrastrar y soltar
    if (document.querySelector('.cards-container')) {
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
    }

    // Código para la navegación por teclado en las tarjetas
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', (e) => {
            const currentCard = document.activeElement;
            const currentIndex = Array.from(cards).indexOf(currentCard);

            let nextIndex;
            if (e.key === 'ArrowRight') {
                nextIndex = (currentIndex + 1) % cards.length;
                cards[nextIndex].focus();
            } else if (e.key === 'ArrowLeft') {
                nextIndex = (currentIndex - 1 + cards.length) % cards.length;
                cards[nextIndex].focus();
            } else if (e.key === 'Enter') {
                currentCard.click();
            }
        });
    });

    // Función para marcar el elemento del menú como 'active'
    function setActiveMenuItem() {
        // Obtén todos los elementos del menú
        const menuItems = document.querySelectorAll('.nav-item');
        // Elimina la clase 'active' de todos los elementos
        menuItems.forEach(item => item.classList.remove('active'));

        // Determina la página actual basada en la URL
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';

        // Agrega la clase 'active' al elemento del menú correspondiente a la página actual
        menuItems.forEach(item => {
            if (item.href.includes(currentPage)) {
                item.classList.add('active');
            }
        });
    }

    // Llama a la función para establecer el elemento activo
    setActiveMenuItem();
});
