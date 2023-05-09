document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    alert('Thank you for contacting us, ' + name + '! We will get back to you soon.');
});