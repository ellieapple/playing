class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
<style>
/* ── Navbar ── */
.ev-nav {
    position: fixed; top: 0; left: 0; right: 0;
    z-index: 100;
    padding: 1.25rem clamp(1.25rem, 6vw, 8rem);
    display: flex; align-items: center; justify-content: space-between;
    transition: background .35s ease, backdrop-filter .35s ease, padding .35s ease, box-shadow .35s ease;
}
.ev-nav.scrolled {
    background: rgba(10,20,16,.92);
    backdrop-filter: blur(14px) saturate(180%);
    -webkit-backdrop-filter: blur(14px) saturate(180%);
    padding-top: .85rem; padding-bottom: .85rem;
    box-shadow: 0 1px 0 rgba(196,149,42,.12);
}
.ev-logo {
    font-family: 'Instrument Serif', Georgia, serif;
    font-style: italic;
    font-size: clamp(1.2rem, 2vw, 1.45rem);
    color: #eff3f0;
    letter-spacing: -.02em;
    text-decoration: none;
    z-index: 110;
    position: relative;
}
.ev-logo em { color: #c4952a; font-style: inherit; }

/* Desktop links */
.ev-links {
    display: flex; align-items: center; gap: clamp(1.5rem, 2.5vw, 2.5rem);
}
.ev-link {
    font-family: 'DM Mono', monospace;
    font-size: .65rem;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: rgba(239,243,240,.6);
    text-decoration: none;
    position: relative;
    padding-bottom: 2px;
    transition: color .2s;
    min-height: 44px; display: inline-flex; align-items: center;
}
.ev-link::after {
    content: ''; position: absolute; bottom: 0; left: 0;
    width: 0; height: 1px; background: #c4952a;
    transition: width .3s ease;
}
.ev-link:hover { color: #eff3f0; }
.ev-link:hover::after { width: 100%; }
.ev-cta {
    font-family: 'DM Mono', monospace;
    font-size: .65rem; letter-spacing: .12em; text-transform: uppercase;
    background: #c4952a; color: #0d1f1a;
    padding: .6rem 1.4rem; border-radius: 100px;
    text-decoration: none; transition: background .2s, transform .15s;
    min-height: 44px; display: inline-flex; align-items: center;
}
.ev-cta:hover { background: #d4a843; transform: translateY(-1px); }

/* Hamburger */
.ev-hamburger {
    display: none;
    flex-direction: column; justify-content: center; gap: 5px;
    width: 44px; height: 44px;
    background: none; border: none; cursor: pointer;
    position: relative; z-index: 110;
    padding: 8px;
}
.ev-hamburger span {
    display: block; height: 1.5px;
    background: #eff3f0;
    border-radius: 2px;
    transition: transform .3s ease, opacity .3s ease, width .3s ease;
    transform-origin: center;
}
.ev-hamburger span:nth-child(3) { width: 65%; }
.ev-hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.ev-hamburger.open span:nth-child(2) { opacity: 0; }
.ev-hamburger.open span:nth-child(3) { width: 100%; transform: translateY(-6.5px) rotate(-45deg); }

/* Mobile overlay */
.ev-overlay {
    position: fixed; inset: 0; z-index: 99;
    background: rgba(7,12,9,.97);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    display: flex; flex-direction: column;
    justify-content: center; align-items: flex-start;
    padding: clamp(2rem, 8vw, 5rem);
    opacity: 0; pointer-events: none;
    transition: opacity .35s ease;
}
.ev-overlay.open { opacity: 1; pointer-events: auto; }
.ev-overlay-links {
    display: flex; flex-direction: column; gap: 1.5rem;
    margin-bottom: 3rem;
}
.ev-overlay-link {
    font-family: 'Instrument Serif', Georgia, serif;
    font-style: italic;
    font-size: clamp(2.5rem, 8vw, 4rem);
    color: rgba(239,243,240,.35);
    text-decoration: none; letter-spacing: -.03em;
    transition: color .2s; line-height: 1;
}
.ev-overlay-link:hover { color: #eff3f0; }
.ev-overlay-sub {
    display: flex; flex-direction: column; gap: .75rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(196,149,42,.15);
}
.ev-overlay-detail {
    font-family: 'DM Mono', monospace;
    font-size: .65rem; letter-spacing: .15em; text-transform: uppercase;
    color: rgba(239,243,240,.35); text-decoration: none;
    transition: color .2s; min-height: 44px; display: flex; align-items: center;
}
.ev-overlay-detail:hover { color: #c4952a; }

@media (max-width: 768px) {
    .ev-links { display: none; }
    .ev-hamburger { display: flex; }
}
</style>

<nav class="ev-nav" role="navigation" aria-label="Main navigation">
    <a href="#home" class="ev-logo">Evergreen <em>Digital</em></a>

    <div class="ev-links" role="list">
        <a href="#services"     class="ev-link" role="listitem">Services</a>
        <a href="#results"      class="ev-link" role="listitem">Results</a>
        <a href="#process"      class="ev-link" role="listitem">Process</a>
        <a href="#pricing"      class="ev-link" role="listitem">Pricing</a>
        <a href="#contact"      class="ev-cta"  role="listitem">Free Strategy Call</a>
    </div>

    <button class="ev-hamburger" id="ev-ham" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
    </button>
</nav>

<div class="ev-overlay" id="ev-overlay" aria-hidden="true" role="dialog" aria-label="Navigation menu">
    <div class="ev-overlay-links">
        <a href="#services"     class="ev-overlay-link">Services</a>
        <a href="#results"      class="ev-overlay-link">Results</a>
        <a href="#process"      class="ev-overlay-link">Process</a>
        <a href="#pricing"      class="ev-overlay-link">Pricing</a>
        <a href="#contact"      class="ev-overlay-link">Contact</a>
    </div>
    <div class="ev-overlay-sub">
        <a href="tel:+13035550182"              class="ev-overlay-detail">(303) 555-0182</a>
        <a href="mailto:hello@evergreendigital.co" class="ev-overlay-detail">hello@evergreendigital.co</a>
    </div>
</div>
        `;

        const nav     = this.querySelector('.ev-nav');
        const ham     = this.querySelector('#ev-ham');
        const overlay = this.querySelector('#ev-overlay');

        // Scroll: transparent → dark
        const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        // Hamburger toggle
        ham.addEventListener('click', () => {
            const isOpen = ham.classList.toggle('open');
            overlay.classList.toggle('open', isOpen);
            ham.setAttribute('aria-expanded', isOpen);
            overlay.setAttribute('aria-hidden', !isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        // Close on overlay link click
        overlay.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                ham.classList.remove('open');
                overlay.classList.remove('open');
                ham.setAttribute('aria-expanded', 'false');
                overlay.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            });
        });

        // Close on Escape
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && overlay.classList.contains('open')) {
                ham.click();
            }
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);
