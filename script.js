document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Thanks for contacting us! We will get back to you soon.');
  this.reset();
});
