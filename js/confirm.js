document.addEventListener("DOMContentLoaded", function () {
    // Función para abrir WhatsApp con el número y el mensaje
    function openWhatsApp() {
        // Número de teléfono
        var phoneNumber = "+541125990711";
        
        // Mensaje
        var message = "¡Hola! Confirmo mi asistencia para el 09/03/2024 a las 21:30 hs.";

        // Crear el enlace de WhatsApp con el número y el mensaje
        var whatsappLink = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

        // Abrir WhatsApp en una nueva ventana o pestaña
        var whatsappWindow = window.open(whatsappLink, '_blank');

        // Desactivar el estado :hover del botón después de 500 ms
        setTimeout(function () {
            if (whatsappWindow) {
                whatsappWindow.focus();
            }
            confirmButton.classList.remove('hover');
        }, 100);
    }

    // Asignar la función al evento de clic del botón "Confirmar"
    var confirmButton = document.querySelector('.btn-outline-primary[data-filter=".first"]');
    if (confirmButton) {
        confirmButton.addEventListener("click", function () {
            // Agregar la clase hover cuando el botón es clicado
            confirmButton.classList.add('hover');
            openWhatsApp();
        });
    }
});

