document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.portfolio-card');
    const cvBtn = document.getElementById('btn-cv-dynamic');

    // Aquí guardamos los textos para cada CV
    const cvData = {
        'all': '📄 Descargar CV General',
        'game-dev': '📄 Descargar CV - Game Developer',
        'vfx': '📄 Descargar CV - Tech Artist',
        'docencia': '📄 Descargar CV - Docente'
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 1. Quitar la clase 'active' de todos los botones y ponérsela al que clickeamos
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Saber qué categoría elegimos
            const filterValue = btn.getAttribute('data-filter');

            // 3. Mostrar u ocultar tarjetas
            cards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block'; // Mostrar
                } else {
                    card.style.display = 'none';  // Ocultar
                }
            });

            // 4. Cambiar el texto del botón del CV
            cvBtn.textContent = cvData[filterValue];
        });
    });
});