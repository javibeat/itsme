document.addEventListener('DOMContentLoaded', () => {
    // Código existente de Sortable para arrastrar y soltar
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

    // Código existente para la navegación por teclado en las tarjetas
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

    // Función para actualizar el elemento nav-item activo
    const updateActiveNavItem = () => {
        // Obtén la URL completa
        const currentUrl = window.location.href;

        // Quita la clase 'active' de todos los elementos del menú
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        // Busca y activa el enlace del menú correcto
        document.querySelectorAll('.nav-item').forEach(item => {
            const page = item.getAttribute('data-page');
            if (currentUrl.endsWith(`${page}.html`) || (page === 'home' && currentUrl.endsWith('index.html'))) {
                item.classList.add('active');
            }
        });
    };

    updateActiveNavItem();
});
