// script.js

emailjs.init('ESineu3vC8Gd-3plY');  // Tu User ID de EmailJS

const btn = document.getElementById('button');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

// Evento para enviar el formulario
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Previene el envío tradicional del formulario

    btn.value = 'Enviando...';  // Cambia el texto del botón

    const serviceID = 'default_service';  // ID de tu servicio
    const templateID = 'template_n5im9m9';  // ID de tu plantilla

    // Oculta los mensajes previos
    successMessage.classList.add('hidden');
    errorMessage.classList.add('hidden');

    // Envia el formulario utilizando el método sendForm
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar mensaje';  // Restablece el texto del botón
            successMessage.classList.remove('hidden');  // Muestra el mensaje de éxito
        }, (err) => {
            btn.value = 'Enviar mensaje';  // Restablece el texto del botón
            errorMessage.classList.remove('hidden');  // Muestra el mensaje de error
        });
});
