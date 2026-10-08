document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS Animation Library
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 100
    });

    // Header Scroll Effect
    const siteHeader = document.getElementById('siteHeader') || document.getElementById('navbar');
    
    if (siteHeader) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 30) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        });
    }

    // Mobile Menu & Drawer System
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownContainer = document.querySelector('.nav-item-dropdown');
    
    // Create backdrop element inside body
    let backdrop = document.getElementById('navBackdrop');
    if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'navBackdrop';
        backdrop.className = 'nav-drawer-backdrop';
        document.body.appendChild(backdrop);
    } else if (backdrop.parentElement !== document.body) {
        document.body.appendChild(backdrop);
    }

    function openMobileMenu() {
        if (!navLinks) return;
        navLinks.classList.add('active');
        if (menuToggle) menuToggle.classList.add('active');
        if (backdrop) backdrop.classList.add('active');
        if (siteHeader) siteHeader.classList.add('menu-open');
        document.body.classList.add('mobile-nav-open');
        document.body.style.overflow = 'hidden';
    }

    function closeMobileMenu() {
        if (!navLinks) return;
        navLinks.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('active');
        if (backdrop) backdrop.classList.remove('active');
        if (siteHeader) siteHeader.classList.remove('menu-open');
        document.body.classList.remove('mobile-nav-open');
        document.body.style.overflow = '';
    }

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            if (navLinks.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    // Prevent clicks inside the drawer from bubbling to backdrop or window
    if (navLinks) {
        navLinks.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    // Connect close button inside drawer if present
    const drawerCloseBtn = document.getElementById('drawerClose');
    if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener('click', closeMobileMenu);
    }

    // Close on backdrop tap
    if (backdrop) {
        backdrop.addEventListener('click', closeMobileMenu);
    }

    // Solutions accordion toggle on mobile
    if (dropdownToggle && dropdownContainer) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = dropdownContainer.classList.toggle('mobile-open');
            dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });
    }

    // Close mobile menu when clicking any nav navigation link (anchors only)
    if (navLinks) {
        const itemLinks = navLinks.querySelectorAll('a');
        itemLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    closeMobileMenu();
                }
            });
        });
    }

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Reset mobile menu if resized to desktop viewport
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992 && navLinks && navLinks.classList.contains('active')) {
            closeMobileMenu();
        }
    });
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('active');
            } else {
                backToTop.classList.remove('active');
            }
        });
    }
});
