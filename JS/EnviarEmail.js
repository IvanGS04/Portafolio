const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_gb6nx7r';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('El mensaje se envio a mi correo electronico, Gracias');
      form.reset();

    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});