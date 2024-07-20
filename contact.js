document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', event => {
            event.preventDefault();
            const name = form.querySelector('#name').value;
            const email = form.querySelector('#email').value;
            const message = form.querySelector('#message').value;

            if (name && email && message) {
                alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
                form.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }
});
