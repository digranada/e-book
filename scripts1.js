function showTab(tabId) {
    // Oculta todas las secciones
    const sections = document.querySelectorAll('.tab-content');
    sections.forEach(section => section.style.display = 'none');

    // Muestra la sección seleccionada
    document.getElementById(tabId).style.display = 'block';
}

// Mostrar la pestaña de inicio por defecto
document.addEventListener('DOMContentLoaded', () => {
    showTab('inicio');
});