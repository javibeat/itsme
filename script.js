document.addEventListener('DOMContentLoaded', () => {
    var el = document.querySelector('.cards-container');
    var sortable = Sortable.create(el, {
        animation: 150,
        chosenClass: "selected",
        dragClass: "drag",
        delay: 100, // Retraso de 100ms antes de comenzar el arrastre
        delayOnTouchOnly: true, // Aplica el retraso solo en dispositivos táctiles
        ghostClass: "ghost", // Clase aplicada al espacio original del elemento arrastrado
        
        onStart: function (evt) {
            evt.item.classList.add('dragging');
        },
        onEnd: function (evt) {
            evt.item.classList.remove('dragging');
        }
    });
});