document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing! We will send updates on renewable ocean energy.');
                this.reset();
            }
        });
    }

    // Add dark theme hover effects for cards
    const cards = document.querySelectorAll('.type-card, .advantage-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#1a1a1a';
            this.style.color = '#fff';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.4)';
            this.style.borderRadius = '8px';
        });

        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#2d2d2d';
            this.style.color = '#fff';
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        });
    });

    // Add animation to hero section with dark theme adjustments
    const heroSection = document.querySelector('.hero-content');
    if (heroSection) {
        heroSection.style.backgroundColor = '#1a1a1a';
        heroSection.style.color = '#fff';
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        window.addEventListener('scroll', function() {
            if (window.scrollY > heroSection.offsetTop - 100) {
                heroSection.style.opacity = '1';
                heroSection.style.transform = 'translateY(0)';
            }
        });
    }
});