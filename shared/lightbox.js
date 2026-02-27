/**
 * Image Lightbox Component
 * Reusable lightbox for viewing images in full resolution.
 *
 * Usage: Add the class "lightbox-img" to any <img> element.
 * Include this script at the bottom of the page.
 */
class ImageLightbox {
    constructor() {
        this.isOpen = false;
        this.build();
        this.attachToImages();
    }

    build() {
        // Single overlay element – all critical positioning via inline styles
        // so Tailwind CDN preflight or specificity issues can't interfere.
        this.overlay = document.createElement('div');
        Object.assign(this.overlay.style, {
            position: 'fixed',
            inset: '0',
            zIndex: '99999',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            background: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            opacity: '0',
            visibility: 'hidden',
            transition: 'opacity .25s ease, visibility .25s ease',
            cursor: 'zoom-out',
        });

        // Close button
        this.closeBtn = document.createElement('button');
        this.closeBtn.setAttribute('aria-label', 'Close lightbox');
        Object.assign(this.closeBtn.style, {
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '2.5rem',
            height: '2.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,0.45)',
            color: 'white',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '0.625rem',
            cursor: 'pointer',
            zIndex: '1',
        });
        this.closeBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>`;

        // Image
        this.image = document.createElement('img');
        Object.assign(this.image.style, {
            maxWidth: '100%',
            maxHeight: '90vh',
            objectFit: 'contain',
            borderRadius: '0.75rem',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
            cursor: 'default',
        });

        this.overlay.appendChild(this.closeBtn);
        this.overlay.appendChild(this.image);
        document.body.appendChild(this.overlay);

        // Events
        this.overlay.addEventListener('click', (e) => {
            if (e.target === this.overlay) this.close();
        });
        this.closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.close();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) this.close();
        });
    }

    attachToImages() {
        document.querySelectorAll('.lightbox-img').forEach(img => {
            img.style.cursor = 'zoom-in';
            img.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.open(img.src, img.alt);
            });
        });
    }

    open(src, alt) {
        this.image.src = src;
        this.image.alt = alt || '';
        document.body.style.overflow = 'hidden';
        this.overlay.style.opacity = '1';
        this.overlay.style.visibility = 'visible';
        this.isOpen = true;
    }

    close() {
        document.body.style.overflow = '';
        this.overlay.style.opacity = '0';
        this.overlay.style.visibility = 'hidden';
        this.isOpen = false;
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.imageLightbox = new ImageLightbox();
    });
} else {
    window.imageLightbox = new ImageLightbox();
}
