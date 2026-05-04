document.addEventListener('DOMContentLoaded', () => {
    initFilterButtons();
    initScrollAnimations();
    initNavScroll();
});

/* ── Project filter ── */
function initFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');
    const cards   = document.querySelectorAll('.project-card');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => {
                b.classList.remove('active', 'bg-primary', 'text-white');
                b.classList.add('bg-gray-200');
            });
            btn.classList.add('active', 'bg-primary', 'text-white');
            btn.classList.remove('bg-gray-200');

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                if (filter === 'all') {
                    card.classList.remove('hidden');
                } else {
                    const tags = card.dataset.tags ? card.dataset.tags.split(',') : [];
                    card.classList.toggle('hidden', !tags.includes(filter));
                }
            });
        });
    });
}

/* ── Scroll-reveal for process items ── */
function initScrollAnimations() {
    const items = document.querySelectorAll('.process-item');
    if (!items.length) return;

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    items.forEach(item => observer.observe(item));
}

/* ── Navbar background on scroll ── */
function initNavScroll() {
    const nav = document.querySelector('nav');
    if (!nav) return;

    const onScroll = () => {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
}
