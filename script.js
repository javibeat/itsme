document.addEventListener('DOMContentLoaded', () => {
    // Selecciona el contenedor por su clase, no por ID
    var el = document.querySelector('.cards-container');
    var sortable = Sortable.create(el, {
        animation: 150,
        chosenClass: "selected",
        dragClass: "drag",
        // ... más opciones si es necesario
    });
});
