document.getElementById('toggleSidebar').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');

    // Cambia flecha según estado
    this.querySelector('i').classList.toggle('fa-chevron-left');
    this.querySelector('i').classList.toggle('fa-chevron-right');
});

const infoText = {
    feedback: "Canal ágil y bidireccional para dar y recibir devoluciones constructivas en tiempo real.",
    capacitaciones: "Microcursos, tutoriales y desafíos gamificados para desarrollar habilidades comunicativas, liderazgo y trabajo colaborativo.",
    reconocimiento: "Sistema de reconocimientos y agradecimientos que refuerza las buenas prácticas comunicativas y el trabajo en equipo.",
    flexibilidad: "Herramienta para coordinar cambios de horarios, turnos o trabajo remoto de forma clara y sin fricciones."
};

document.querySelectorAll('.pillar-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const key = this.getAttribute('data-info');
        const infoDiv = document.getElementById('pillar-info');
        infoDiv.textContent = infoText[key];
        infoDiv.classList.remove('d-none');
    });
});