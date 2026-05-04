document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initWordReveal();
    initScrollReveal();
    initCounters();
    initForm();
});

/* ════════════════════════════════════════════
   CUSTOM CURSOR (desktop / fine pointer only)
════════════════════════════════════════════ */
function initCursor() {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot  = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;

    let mx = -100, my = -100;
    let rx = -100, ry = -100;

    document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

    const lerp = (a, b, t) => a + (b - a) * t;

    let rafId;
    function tick() {
        dot.style.transform  = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
        rx = lerp(rx, mx, 0.14);
        ry = lerp(ry, my, 0.14);
        ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
        rafId = requestAnimationFrame(tick);
    }
    tick();

    // Scale ring on hover over interactive elements
    document.addEventListener('mouseover', e => {
        if (e.target.closest('a, button, input, select, textarea, label')) {
            ring.style.transform += ' scale(1.6)';
            ring.style.borderColor = 'rgba(196,149,42,.8)';
        }
    });
    document.addEventListener('mouseout', e => {
        if (e.target.closest('a, button, input, select, textarea, label')) {
            ring.style.borderColor = 'rgba(196,149,42,.5)';
        }
    });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) cancelAnimationFrame(rafId);
        else tick();
    });
}

/* ════════════════════════════════════════════
   WORD-BY-WORD REVEAL
════════════════════════════════════════════ */
function initWordReveal() {
    const headings = document.querySelectorAll('.word-reveal');

    // Wrap each word in spans
    headings.forEach(el => {
        const html = el.innerHTML;
        // Preserve <em> tags across word wrapping
        el.innerHTML = html.replace(/(<em>[^<]*<\/em>|[^\s<]+)/g, match => {
            return `<span class="word"><span class="word-inner">${match}</span></span> `;
        });
    });

    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const inners = el.querySelectorAll('.word-inner');
            inners.forEach((inner, i) => {
                inner.style.transitionDelay = `${i * 0.06}s`;
            });
            el.classList.add('revealed');
            obs.unobserve(el);
        });
    }, { threshold: 0.2 });

    headings.forEach(el => obs.observe(el));
}

/* ════════════════════════════════════════════
   SCROLL REVEAL (.reveal-item)
════════════════════════════════════════════ */
function initScrollReveal() {
    const items = document.querySelectorAll('.reveal-item');
    if (!items.length) return;

    const obs = new IntersectionObserver(entries => {
        entries.forEach((entry, i) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            // Stagger siblings
            const siblings = Array.from(el.parentElement.querySelectorAll('.reveal-item'));
            const idx = siblings.indexOf(el);
            el.style.transitionDelay = `${idx * 0.08}s`;
            el.classList.add('visible');
            obs.unobserve(el);
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    items.forEach(el => obs.observe(el));
}

/* ════════════════════════════════════════════
   COUNTER ANIMATIONS
════════════════════════════════════════════ */
function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const target = parseInt(el.dataset.count, 10);
            const duration = 1800;
            const start = performance.now();

            // Also reveal the number-line sibling
            const item = el.closest('.number-item');
            if (item) item.classList.add('visible');

            function update(now) {
                const elapsed = now - start;
                const progress = Math.min(elapsed / duration, 1);
                // Ease out expo
                const eased = 1 - Math.pow(2, -10 * progress);
                el.textContent = Math.round(eased * target);
                if (progress < 1) requestAnimationFrame(update);
                else el.textContent = target;
            }
            requestAnimationFrame(update);
            obs.unobserve(el);
        });
    }, { threshold: 0.4 });

    counters.forEach(el => obs.observe(el));
}

/* ════════════════════════════════════════════
   CONTACT FORM
════════════════════════════════════════════ */
function initForm() {
    const form    = document.getElementById('contact-form');
    const success = document.getElementById('form-success');
    if (!form) return;

    form.addEventListener('submit', e => {
        e.preventDefault();

        const btn = form.querySelector('[type="submit"]');
        btn.textContent = 'Sending…';
        btn.disabled = true;

        // Simulate async send
        setTimeout(() => {
            form.reset();
            btn.textContent = 'Send Inquiry →';
            btn.disabled = false;
            success.classList.add('visible');
            setTimeout(() => success.classList.remove('visible'), 6000);
        }, 1200);
    });
}
