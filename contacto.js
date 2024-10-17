emailjs.init('ESineu3vC8Gd-3plY');  

const btn = document.getElementById('button');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();  

    btn.value = 'Enviando...';  

    const serviceID = 'default_service'; 
    const templateID = 'template_n5im9m9'; 


    successMessage.classList.add('hidden');
    errorMessage.classList.add('hidden');

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Enviar mensaje'; 
            successMessage.classList.remove('hidden');  
        }, (err) => {
            btn.value = 'Enviar mensaje';  
            errorMessage.classList.remove('hidden');  
        });
});
