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
    const floatingCta = document.querySelector('.floating-cta');
    const footerCta = document.querySelector('.footer-cta');
    
    if (floatingCta && footerCta) {
        const footerRect = footerCta.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Masquer le floating CTA quand on arrive au footer
        if (footerRect.top <= windowHeight) {
            floatingCta.style.display = 'none';
        } else {
            floatingCta.style.display = 'block';
        }
    }
});

// Effet de parallaxe léger sur le hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        const speed = scrolled * 0.5;
        hero.style.transform = `translateY(${speed}px)`;
    }
});

// Preloader simple (optionnel)
function showPreloader() {
    const preloader = document.createElement('div');
    preloader.id = 'preloader';
    preloader.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            color: white;
            font-size: 2rem;
        ">
            <div style="text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 20px;">🔮</div>
                <div>Chargement...</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(preloader);
    
    // Masquer après le chargement
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                if (preloader.parentNode) {
                    preloader.parentNode.removeChild(preloader);
                }
            }, 500);
        }, 500);
    });
}

// Activer le preloader (décommentez si souhaité)
// showPreloader();

// Gestion des erreurs pour les éléments manquants
function handleMissingElements() {
    // Vérifier si les éléments du countdown existent
    if (!document.getElementById('hours') || !document.getElementById('minutes') || !document.getElementById('seconds')) {
        console.warn('Éléments du countdown manquants');
        return;
    }
}

// Copy code promo au clic
document.addEventListener('DOMContentLoaded', function() {
    const promoCode = document.querySelector('.promo-code');
    if (promoCode) {
        promoCode.addEventListener('click', function() {
            // Copier le code dans le presse-papier
            navigator.clipboard.writeText('KARMA50').then(function() {
                // Feedback visuel
                const originalText = promoCode.textContent;
                promoCode.textContent = '✅ Code copié !';
                promoCode.style.background = '#28a745';
                
                setTimeout(() => {
                    promoCode.textContent = originalText;
                    promoCode.style.background = '#ff6b6b';
                }, 2000);
            }).catch(function() {
                // Fallback si clipboard API n'est pas supportée
                console.log('Clipboard API non supportée');
            });
        });
        
        // Ajouter un curseur pointer pour indiquer que c'est cliquable
        promoCode.style.cursor = 'pointer';
        promoCode.title = 'Cliquez pour copier le code';
    }
});

// Initialisation complète
document.addEventListener('DOMContentLoaded', function() {
    handleMissingElements();
    
    // Log pour debug
    console.log('🔮 Soraya Landing Page - Initialisée avec succès');
    
    // Tracking de la page view
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            'page_title': 'Soraya Radio Landing',
            'page_location': window.location.href
        });
    }
});