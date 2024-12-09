document.getElementById('reservation-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Capture form data
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const guests = document.getElementById('guests').value;

  // Validate inputs
  if (name && phone && guests) {
    // Show confirmation message
    document.getElementById('confirmation-message').style.display = 'block';
  } else {
    alert('Please fill out all fields!');
  }

  // Reset form
  document.getElementById('reservation-form').reset();
});
