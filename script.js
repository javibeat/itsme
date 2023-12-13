document.addEventListener('DOMContentLoaded', () => {
    var el = document.querySelector('.cards-container');
    var ghost;

    var sortable = Sortable.create(el, {
        animation: 150,
        chosenClass: "selected",
        dragClass: "drag",
        delay: 100, // Retraso de 100ms antes de comenzar el arrastre
        delayOnTouchOnly: true, // Aplica el retraso solo en dispositivos táctiles
        ghostClass: "ghost", // Clase aplicada al espacio original del elemento arrastrado
        
        onStart: function (evt) {
            evt.item.classList.add('dragging');
            // Crea un hueco para el elemento arrastrado
            ghost = document.createElement('div');
            ghost.classList.add('card', 'ghost');
            evt.item.parentNode.insertBefore(ghost, evt.item.nextSibling);
        },
        onMove: function (evt) {
            if (ghost && evt.related) {
                // Mueve el hueco a la nueva posición
                evt.related.parentNode.insertBefore(ghost, evt.related);
            }
        },
        onEnd: function (evt) {
            evt.item.classList.remove('dragging');
            // Coloca el elemento arrastrado en la nueva posición y elimina el hueco
            if (ghost) {
                ghost.parentNode.insertBefore(evt.item, ghost);
                ghost.parentNode.removeChild(ghost);
                ghost = null;
            }
        }
    });
});