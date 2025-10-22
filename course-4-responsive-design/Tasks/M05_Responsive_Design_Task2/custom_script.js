document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // Función para actualizar el texto del botón
    function updateButtonState(isDark) {
        toggleButton.textContent = isDark ? 'Modo Claro' : 'Modo Oscuro';
    }

    // 1. Cargar el estado guardado al iniciar
    const savedMode = localStorage.getItem('themePreference');

    if (savedMode === 'dark') {
        // Si la preferencia guardada es 'dark', aplicar la clase
        body.classList.add('dark-mode');
        updateButtonState(true);
    } else {
        // Si no hay preferencia guardada O es 'light', empezar en modo claro.
        // El CSS se encarga del modo claro por defecto.
        body.classList.remove('dark-mode');
        updateButtonState(false);
        // Establecer la preferencia 'light' si es la primera vez
        if (!savedMode) {
             localStorage.setItem('themePreference', 'light');
        }
    }


    // 2. Lógica del Toggle al hacer clic
    toggleButton.addEventListener('click', () => {
        const isCurrentlyDark = body.classList.toggle('dark-mode');
        
        // Guardar la nueva preferencia
        const newPreference = isCurrentlyDark ? 'dark' : 'light';
        localStorage.setItem('themePreference', newPreference);

        updateButtonState(isCurrentlyDark);
    });
});

