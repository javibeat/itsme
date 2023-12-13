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
            // Crea un hueco para el elemento arrastrado
            var ghost = document.createElement('div');
            ghost.classList.add('card', 'ghost');
            evt.from.insertBefore(ghost, evt.item.nextSibling);
        },
        onEnd: function (evt) {
            evt.item.classList.remove('dragging');
            // Elimina el hueco cuando se suelta el elemento
            var ghost = document.querySelector('.ghost');
            if (ghost) {
                ghost.parentNode.removeChild(ghost);
            }
        }
    });
});