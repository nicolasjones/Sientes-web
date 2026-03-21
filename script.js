/**
 * SIENTES | OBSIDIAN RITUAL
 * Core Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = menuBtn?.querySelector('.material-symbols-outlined');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            
            if (menuIcon) {
                menuIcon.textContent = isExpanded ? 'menu' : 'close';
            }
        });
    }

    // 2. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: stop observing once revealed
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 3. Hero Parallax Effect
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            heroImage.style.transform = `scale(${1 + scrolled * 0.0005}) translateY(${scrolled * 0.15}px)`;
        });
    }

    // 4. Subtle Cursor Effect (Optional Golden Glow)
    const cursorGlow = document.createElement('div');
    cursorGlow.style.cssText = `
        position: fixed;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(218, 199, 105, 0.03) 0%, rgba(0,0,0,0) 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        transform: translate(-50%, -50%);
        transition: opacity 0.5s ease;
        opacity: 0;
    `;
    document.body.appendChild(cursorGlow);

    window.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.style.opacity = '1';
    });

    // 5. Form Submission Simulation
    const subscribeForm = document.querySelector('form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = subscribeForm.querySelector('button');
            const input = subscribeForm.querySelector('input');
            const originalText = btn.textContent;
            
            btn.disabled = true;
            btn.textContent = 'TRANSMITTING...';
            
            setTimeout(() => {
                btn.textContent = 'TRANSMISSION RECEIVED';
                btn.style.backgroundColor = '#fff';
                btn.style.color = '#121412';
                input.value = '';
                
                setTimeout(() => {
                    btn.disabled = false;
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                }, 3000);
            }, 1500);
        });
    }
});
