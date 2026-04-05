/**
 * SIENTES | OBSIDIAN RITUAL
 * Core Interaction Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- Language Selector Logic ---
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = 'es'; // Default is Spanish as requested

    const translations = {
        'es': {
            'rituals': 'PRÓXIMAS FECHAS',
            'echoes': 'DISCOGRAFÍA',
            'relics': 'MERCHANDISING',
            'assembly': 'ASAMBLEA',
            'lineup': 'MÚSICOS',
            'discography': 'DISCOGRAFÍA',
            'latest-echoes': 'DISCOGRAFÍA',
            'tagline': 'El proceso alquímico del sonido. Capturado dentro del vacío de obsidiana.',
            'featured-label': 'RITUAL COMPLETO',
            'featured-title': 'EL RITUAL DE LA LUZ',
            'ep-recovery': 'RECUPERACIÓN DE EP',
            'single-trans': 'TRANSMISIÓN SENCILLA',
            'stream': 'REPRODUCIR',
            'world-ritual': 'PRÓXIMAS FECHAS',
            'upcoming': 'PRÓXIMAS FASES',
            'reserve': 'RESERVAR',
            'extinguished': 'CONSULTAR STOCK',
            'view-all': 'VER TODAS LAS FASES',
            'coming-soon': 'PRÓXIMAMENTE',
            'artifacts': 'ARTEFACTOS',
            'armory': 'MERCHANDISING',
            'lineup-label': 'LINE UP',
            'lineup-title': 'MÚSICOS',
            'role-vocals': 'Voz Líder / Compositor',
            'role-guitar': 'Bajo / Productor',
            'role-keys': 'Voz / Coros',
            'role-drums': '1° Guitarra',
            'role-bass': '2° Guitarra',
            'role-rituals': 'Batería',
            'videos': 'VIDEOS',
            'videos-title': 'VIDEOS',
            'collect': 'COLECCIONAR',
            'vault': 'ACCEDER A LA CRIPTA',
            'join': 'ESCRIBINOS',
            'receive': 'RECIBE TRANSMISIONES DESDE EL VACÍO.',
            'subscribe': 'SUSCRIBIRSE',
            'privacy': 'Privacidad',
            'terms': 'Términos',
            'press': 'Prensa',
            'contact': 'Contacto',
            'rights': '© MMXXIV SIENTES. TODOS LOS DERECHOS RESERVADOS.',
            'laws': 'DISEÑADO BAJO LAS LEYES DEL VACÍO'
        },
        'en': {
            'rituals': 'UPCOMING DATES',
            'echoes': 'DISCOGRAPHY',
            'relics': 'MERCHANDISING',
            'assembly': 'ASSEMBLY',
            'lineup': 'MUSICIANS',
            'discography': 'DISCOGRAPHY',
            'latest-echoes': 'DISCOGRAPHY',
            'tagline': 'The alchemical process of sound. Captured within the obsidian void.',
            'featured-label': 'FULL LENGTH RITUAL',
            'featured-title': 'THE RITUAL OF LIGHT',
            'ep-recovery': 'EP RECOVERY',
            'single-trans': 'SINGLE TRANSMISSION',
            'stream': 'STREAM',
            'world-ritual': 'UPCOMING DATES',
            'upcoming': 'UPCOMING PHASES',
            'reserve': 'RESERVE',
            'extinguished': 'CHECK STOCK',
            'view-all': 'VIEW ALL PHASES',
            'coming-soon': 'COMING SOON',
            'artifacts': 'ARTIFACTS',
            'armory': 'MERCHANDISING',
            'lineup-label': 'LINE UP',
            'lineup-title': 'MUSICIANS',
            'role-vocals': 'Lead Vocals / Composer',
            'role-guitar': 'Bass / Producer',
            'role-keys': 'Vocals / Backing Vocals',
            'role-drums': '1st Guitar',
            'role-bass': '2nd Guitar',
            'role-rituals': 'Drums',
            'videos': 'VIDEOS',
            'videos-title': 'VIDEOS',
            'collect': 'COLLECT',
            'vault': 'ACCESS THE VAULT',
            'join': 'WRITE TO US',
            'receive': 'RECEIVE TRANSMISSIONS FROM THE VOID.',
            'subscribe': 'SUBSCRIBE',
            'privacy': 'Privacy',
            'terms': 'Terms',
            'press': 'Press',
            'contact': 'Contact',
            'rights': '© MMXXIV SIENTES. ALL RIGHTS RESERVED.',
            'laws': 'DESIGNED UNDER THE LAWS OF THE VOID'
        }
    };

    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(el => {
            const key = el.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
        langToggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
    };

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            updateLanguage(currentLang);
        });
    }

    // Initialize Language
    updateLanguage(currentLang);

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

        // Close mobile menu when a link is clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.setAttribute('aria-expanded', 'false');
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                if (menuIcon) {
                    menuIcon.textContent = 'menu';
                }
            });
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
            const email = input.value;
            const originalText = btn.textContent;
            
            btn.disabled = true;
            btn.textContent = 'TRANSMITTING...';
            
            setTimeout(() => {
                btn.textContent = 'TRANSMISSION RECEIVED';
                btn.style.backgroundColor = '#fff';
                btn.style.color = '#121412';
                input.value = '';
                
                // Open Mail Client
                const subject = encodeURIComponent('SUSCRIPCIÓN - SIÈNTES');
                const body = encodeURIComponent('QUIERO INFO SOBRE LAS NOVEDADES DE LA BANDA\n\nCorreo del suscriptor: ' + email);
                window.location.href = `mailto:SIENTES.MUSICA@GMAIL.COM?subject=${subject}&body=${body}`;

                setTimeout(() => {
                    btn.disabled = false;
                    btn.textContent = originalText;
                    btn.style.backgroundColor = '';
                    btn.style.color = '';
                }, 3000);
            }, 1000);
        });
    }

    // --- Discography Logic ---
    const albumData = {
        'sientes': {
            title: 'SIENTES (EP)',
            spotifyId: '6iQVUF7K76K8jovTYj1R7g',
            tracks: [
                '1. Paradigma',
                '2. Ozono',
                '3. Vision Estelar',
                '4. Electrico Sueño',
                '5. Electric killer'
            ]
        },
        'pronoia': {
            title: 'PRONOIA (ALBUM)',
            spotifyId: '3Wx9Frd0CNl4D521NG9Yxi',
            tracks: [
                '1. Requiem',
                '2. In your dreams',
                '3. El fin sin fin',
                '4. Anatomico',
                '5. Destino',
                '6. Sientes',
                '7. Ve'
            ]
        }
    };

    window.switchAlbum = function(albumKey) {
        const data = albumData[albumKey];
        if (!data) return;

        // Update UI
        const titleEl = document.getElementById('display-title');
        if (titleEl) titleEl.textContent = data.title;
        
        // Update Tracklist
        const list = document.getElementById('tracklist');
        if (list) {
            list.innerHTML = data.tracks.map(track => `<li class="hover:text-primary transition-colors cursor-default">${track}</li>`).join('');
        }
        
        // Update Spotify Iframe
        const iframe = document.getElementById('spotify-iframe');
        if (iframe) {
            iframe.src = `https://open.spotify.com/embed/album/${data.spotifyId}?utm_source=generator&theme=0`;
        }

        // Update Active States
        document.querySelectorAll('.album-card').forEach(card => card.classList.remove('active-album'));
        const activeCard = document.getElementById(`album-${albumKey}`);
        if(activeCard) activeCard.classList.add('active-album');
    };

    // --- ScrollSpy: Update active link on scroll ---
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('nav-link-active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('nav-link-active');
                    }
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-20% 0px -60% 0px'
    });

    sections.forEach(section => scrollSpyObserver.observe(section));

    // Optional: Clicking a link also forces active state (useful for instant feedback)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('nav-link-active'));
            this.classList.add('nav-link-active');
        });
    });

    // --- Musician Gallery Logic ---
    const musicianModal = document.getElementById('musician-modal');
    const modalMusicianName = document.getElementById('modal-musician-name');
    const modalGallery = document.getElementById('modal-gallery');
    const closeModal = document.getElementById('close-modal');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentIdxEl = document.getElementById('current-idx');
    const totalIdxEl = document.getElementById('total-idx');
    const modalMusicianDesc = document.getElementById('modal-musician-desc');

    const musicianData = {
        'lucas': { 
            name: 'LUCAS', 
            description: 'Mi nombre es Lucas Gómez 🎶, soy músico 🎵 y por sobre todas las cosas amante de la música ❤️.\n\nDe pequeño fuí cautivado por las canciones que mi madre, una cantante excepcional 🎤, entonaba con pasión.\nSi bien había sido parte anteriormente de otros proyectos como pianista 🎹, en el año 2000 fué la primera vez que subí a un escenario como vocalista 🎤, para no dejar más dicho rol.\n\nTuve la suerte de cruzar caminos con Nicolás Jones, un excelente bajista 🎸 y un hermano para mí 👨🎤.\nA lo largo de mi carrera he tenido el honor de colaborar en decenas de proyectos 🎶, junto a músicos y amigos muy talentosos 🙌. Un capítulo que ha moldeado mi trayectoria y enriquecido mi perspectiva musical.\n\nCompartir escenario con músicos consagrados ha sido un regalo 🎁, una oportunidad para aprender y absorber la sabiduría de quienes han recorrido este camino antes que yo. He plasmado mis sueños y experiencias en dos discos de mi autoría 📀.\n\nLa música es mi lenguaje, mi forma de expresión más auténtica 🎤, y estoy comprometido a continuar compartiendo mi pasión 💪.\n\nHoy como líder, compositor y vocalista de Sientes 🎤🎸, con Nicolás Jones a la par, sé más que nunca que es sin duda el camino correcto hacia donde siempre quise llegar 🚀, y es ahí hacia donde vamos.',
            images: ['images/musicians/lucas/1.png', 'images/musicians/lucas/2.png', 'images/musicians/lucas/3.png'] 
        },
        'nico': { name: 'NICO', images: ['images/musicians/nico/1.png', 'images/musicians/nico/2.png'] },
        'cata': { name: 'CATA', images: ['images/musicians/cata/1.png', 'images/musicians/cata/2.png'] },
        'eze': { name: 'EZE', images: ['images/musicians/eze/1.png', 'images/musicians/eze/2.png'] },
        'guille': { name: 'GUILLE', images: ['images/musicians/guille/1.png', 'images/musicians/guille/2.png'] },
        'lucho': { name: 'LUCHO', images: ['images/musicians/lucho/1.png', 'images/musicians/lucho/2.png'] }
    };

    let currentGallery = [];
    let currentImageIndex = 0;

    const openMusicianGallery = (id) => {
        const data = musicianData[id];
        if (!data) return;

        modalMusicianName.textContent = data.name;
        if (data.description) {
            modalMusicianDesc.textContent = data.description;
            modalMusicianDesc.classList.remove('hidden');
        } else {
            modalMusicianDesc.classList.add('hidden');
        }
        
        modalGallery.innerHTML = '';
        currentGallery = data.images;
        currentImageIndex = 0;

        currentGallery.forEach((src, idx) => {
            const container = document.createElement('div');
            container.className = 'w-full h-full flex-shrink-0 snap-center flex items-center justify-center';
            const img = document.createElement('img');
            img.src = src;
            img.alt = `${data.name} ritual ${idx + 1}`;
            img.className = 'max-w-full max-h-full object-contain rounded-xl drop-shadow-2xl';
            // If image fails to load, we can hide it or use a placeholder
            img.onerror = () => { container.style.display = 'none'; };
            container.appendChild(img);
            modalGallery.appendChild(container);
        });

        totalIdxEl.textContent = currentGallery.length;
        updateGalleryUI();
        
        musicianModal.classList.add('visible');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    const updateGalleryUI = () => {
        currentIdxEl.textContent = currentImageIndex + 1;
        const target = modalGallery.children[currentImageIndex];
        if (target) {
            modalGallery.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
        }
    };

    document.querySelectorAll('[data-musician]').forEach(card => {
        card.addEventListener('click', () => {
            openMusicianGallery(card.getAttribute('data-musician'));
        });
    });

    closeModal?.addEventListener('click', () => {
        musicianModal.classList.remove('visible');
        document.body.style.overflow = '';
    });

    // Close on background click
    musicianModal?.addEventListener('click', (e) => {
        if (e.target === musicianModal || e.target.classList.contains('bg-background/95')) {
            musicianModal.classList.remove('visible');
            document.body.style.overflow = '';
        }
    });

    prevBtn?.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateGalleryUI();
        }
    });

    nextBtn?.addEventListener('click', () => {
        if (currentImageIndex < currentGallery.length - 1) {
            currentImageIndex++;
            updateGalleryUI();
        }
    });

    // --- Back-to-Top Logic ---
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 800) {
                backToTopBtn.classList.remove('opacity-0', 'invisible');
                backToTopBtn.classList.add('opacity-100', 'visible');
            } else {
                backToTopBtn.classList.add('opacity-0', 'invisible');
                backToTopBtn.classList.remove('opacity-100', 'visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // --- Share Logic (WhatsApp) ---
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            const shareText = encodeURIComponent('Conoce el ritual de SIENTES: www.sientes.musica.ar');
            window.open(`https://api.whatsapp.com/send?text=${shareText}`, '_blank');
        });
    }

    // --- Video Auto-Pause Logic ---
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('play', () => {
            videos.forEach(otherVideo => {
                if (otherVideo !== video && !otherVideo.paused) {
                    otherVideo.pause();
                }
            });
        });
    });

    // Initialize default album
    if(document.getElementById('tracklist')) {
        switchAlbum('sientes');
    }
});
