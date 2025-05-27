// Countdown Timer
function updateCountdown() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0);
    
    const diff = midnight - now;
    
    if (diff <= 0) {
        // Si le temps est écoulé, remettre à 24h
        midnight.setDate(midnight.getDate() + 1);
        const newDiff = midnight - now;
        
        const hours = Math.floor(newDiff / (1000 * 60 * 60));
        const minutes = Math.floor((newDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((newDiff % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
}

// Initialiser et mettre à jour le countdown
setInterval(updateCountdown, 1000);
updateCountdown();

// FAQ Toggle
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Fermer toutes les autres FAQ
                document.querySelectorAll('.faq-answer').forEach(a => a.style.display = 'none');
                document.querySelectorAll('.faq-question i').forEach(i => i.style.transform = 'rotate(0deg)');
                
                answer.style.display = 'block';
                icon.style.transform = 'rotate(180deg)';
            }
        });
    });
});

// Smooth scrolling pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Track CTA clicks pour analytics
document.querySelectorAll('.cta-primary').forEach(button => {
    button.addEventListener('click', function() {
        // Google Analytics tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'CTA',
                'event_label': 'Radio Landing KARMA50',
                'value': 1
            });
        }
        
        // Facebook Pixel tracking (si configuré)
        if (typeof fbq !== 'undefined') {
            fbq('track', 'Lead', {
                content_name: 'KARMA50 CTA Click',
                source: 'radio_landing'
            });
        }
    });
});

// Animation au scroll (Intersection Observer)
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    document.querySelectorAll('.step-card, .trust-stat, .faq-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialiser les animations au chargement de la page
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Masquer/afficher le floating CTA selon le scroll
window.addEventListener('scroll', function() {
    const floatingCta = document.querySelector('.