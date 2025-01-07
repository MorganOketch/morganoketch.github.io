document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
        darkModeToggle.querySelector('i').classList.toggle('fa-moon');
        darkModeToggle.querySelector('i').classList.toggle('fa-sun');
        
        // Save preference to localStorage
        localStorage.setItem('theme', body.dataset.theme);
    });

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.dataset.theme = savedTheme;
        if (savedTheme === 'dark') {
            darkModeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
        }
    }

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Announcement Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll('.announcement-card');
    
    function showSlide(n) {
        slides.forEach(slide => slide.style.display = 'none');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    setInterval(() => {
        showSlide(currentSlide + 1);
    }, 5000);

    // Event Registration Modal
    const eventButtons = document.querySelectorAll('.event-button');
    
    eventButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Show registration modal (to be implemented)
            console.log('Event registration clicked');
        });
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    });

    document.querySelectorAll('.event-card, .announcement-card').forEach((el) => observer.observe(el));
});

// Form Validation
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}