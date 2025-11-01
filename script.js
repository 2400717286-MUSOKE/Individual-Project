// Mobile Navigation Toggle (removed) — was commented out and is now permanently deleted to keep `script.js` minimal.

// Smooth Scroll for in-page anchors (removed)

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value || '';
    const email = document.getElementById('email').value || '';
    const message = document.getElementById('message').value || '';

    // Validate form
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      showMessage('Please fill in all fields.', 'error');
      return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showMessage('Please enter a valid email address.', 'error');
      return;
    }

    // Simulate form submission
    showMessage('Thank you for your message! We will get back to you soon.', 'success');
    contactForm.reset();
  });
}

function showMessage(msg, type) {
  if (!formMessage) return;
  formMessage.textContent = msg;
  formMessage.className = `form-message ${type}`;

  setTimeout(() => {
    formMessage.className = 'form-message';
  }, 5000);
}

// Intersection Observer for Scroll Animations (removed)

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('header');
  if (!navbar) return;
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
  } else {
    navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  }
});

