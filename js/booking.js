// booking.js for Kmm Reye Travel and Tours

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.booking-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for booking with Kmm Reye Travel and Tours! We will contact you soon.');
      form.reset();
    });
  }
});