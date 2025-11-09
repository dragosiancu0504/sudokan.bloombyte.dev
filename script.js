// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    // Navbar Background on Scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Enhanced floating animation for Sudoku numbers
    function enhanceFloatingAnimation() {
        const floatItems = document.querySelectorAll('.float-item');
        
        floatItems.forEach((item, index) => {
            const randomDelay = Math.random() * 2000;
            const randomDuration = 4000 + Math.random() * 4000;
            
            setTimeout(() => {
                item.style.animationDuration = `${randomDuration}ms`;
            }, randomDelay);
            
            // Add hover effect for desktop
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'scale(1.1) rotate(15deg)';
                item.style.transition = 'transform 0.3s ease';
                item.style.color = '#f59e0b';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = '';
                item.style.transition = '';
                item.style.color = '#fbbf24';
            });
        });
    }

    // Policy card interaction enhancements
    function enhancePolicyCards() {
        const policyCards = document.querySelectorAll('.policy-card');
        
        policyCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.policy-icon');
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            });
            
            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.policy-icon');
                icon.style.transform = '';
            });
            
            // Add click animation
            card.addEventListener('click', function(e) {
                // Create ripple effect
                const rect = card.getBoundingClientRect();
                const ripple = document.createElement('div');
                ripple.className = 'ripple';
                ripple.style.position = 'absolute';
                ripple.style.borderRadius = '50%';
                ripple.style.background = 'rgba(255, 255, 255, 0.3)';
                ripple.style.transform = 'scale(0)';
                ripple.style.animation = 'rippleEffect 0.6s linear';
                ripple.style.left = (e.clientX - rect.left - 50) + 'px';
                ripple.style.top = (e.clientY - rect.top - 50) + 'px';
                ripple.style.width = '100px';
                ripple.style.height = '100px';
                ripple.style.pointerEvents = 'none';
                
                card.style.position = 'relative';
                card.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }

    // Initialize enhancements
    enhanceFloatingAnimation();
    enhancePolicyCards();
    
    // Add loading animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add ripple effect CSS
const rippleCSS = `
    @keyframes rippleEffect {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Performance optimization: Debounced scroll handler
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Intersection Observer for animations on scroll
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

// Observe elements for animation
window.addEventListener('load', () => {
    const animatedElements = document.querySelectorAll('.policy-card, .info-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement && focusedElement.classList.contains('policy-card')) {
            e.preventDefault();
            focusedElement.click();
        }
    }
});