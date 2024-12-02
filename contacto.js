emailjs.init('XwOWw-Na3FBorsrYo'); 

const btn = document.getElementById('button');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();  

    btn.value = 'Enviando...';  

    const serviceID = 'service_biwyeod';
    const templateID = 'template_zszsgbz';

    successMessage.classList.add('hidden');
    errorMessage.classList.add('hidden');

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar mensaje'; 
            successMessage.classList.remove('hidden');  
            this.reset();
        }, (err) => {
            btn.value = 'Enviar mensaje';  
            errorMessage.classList.remove('hidden');  
        });
});
