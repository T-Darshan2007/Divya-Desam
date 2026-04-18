document.addEventListener('DOMContentLoaded', () => {
    // 1. Theme Toggle
    const themeBtn = document.querySelector('.theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
        });
        if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-theme');
    }

    // 2. Smooth Scrolling
    document.querySelectorAll('.sidebar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 90,
                    behavior: 'smooth'
                });
            }
            // Close sidebar on mobile after clicking a link
            if (window.innerWidth <= 768) {
                document.querySelector('.sidebar').classList.remove('open');
                const overlay = document.getElementById('sidebarOverlay');
                if (overlay) overlay.classList.remove('active');
            }
        });
    });

    // 3. ScrollSpy & Reveal Logic
    const sections = document.querySelectorAll('.content-card');
    const options = { rootMargin: '-20% 0px -60% 0px', threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');

                const id = entry.target.getAttribute('id');
                document.querySelectorAll('.sidebar li').forEach(li => li.classList.remove('active'));
                const link = document.querySelector(`.sidebar a[href="#${id}"]`);
                if (link) link.parentElement.classList.add('active');
            }
        });
    }, options);

    sections.forEach(section => observer.observe(section));
});

/**
 * SIDEBAR SUB-MENU TOGGLE
 * Handles the opening/closing of sections like "History" or "Architecture"
 */
function toggleSubmenu(arrowElement) {
    const parentLi = arrowElement.closest('.has-subcontent');
    const submenu = parentLi.querySelector('.sub-menu');
    if (submenu) {
        submenu.classList.toggle('hidden');
        arrowElement.classList.toggle('open');
    }
}

/**
 * HAMBURGER SIDEBAR TOGGLE (mobile only)
 */
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (sidebar) sidebar.classList.toggle('open');
    if (overlay) overlay.classList.toggle('active');
}
