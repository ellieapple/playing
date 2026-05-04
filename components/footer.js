class CustomFooter extends HTMLElement {
    connectedCallback() {
        const year = new Date().getFullYear();
        this.innerHTML = `
<style>
.ev-footer {
    background: #070c09;
    padding: clamp(4rem, 7vw, 7rem) clamp(1.25rem, 6vw, 8rem) clamp(2rem, 3vw, 3rem);
    position: relative;
    overflow: hidden;
}
.ev-footer-ghost {
    position: absolute; bottom: -0.1em; left: 50%;
    transform: translateX(-50%);
    font-family: 'Instrument Serif', Georgia, serif;
    font-style: italic;
    font-size: clamp(4rem, 14vw, 18rem);
    color: rgba(239,243,240,.028);
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    letter-spacing: -.05em;
    line-height: 1;
}
.ev-footer-grid {
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr 1fr;
    gap: clamp(2rem, 4vw, 5rem);
    max-width: 1280px;
    margin: 0 auto;
    position: relative; z-index: 1;
    padding-bottom: clamp(2.5rem, 4vw, 4rem);
    border-bottom: 1px solid rgba(196,149,42,.1);
    margin-bottom: clamp(1.5rem, 2.5vw, 2.5rem);
}
@media (max-width: 900px) { .ev-footer-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 480px) { .ev-footer-grid { grid-template-columns: 1fr; } }

.ev-footer-logo {
    font-family: 'Instrument Serif', Georgia, serif;
    font-style: italic;
    font-size: 1.6rem;
    color: #eff3f0;
    letter-spacing: -.02em;
    text-decoration: none;
    display: inline-block;
    margin-bottom: .75rem;
}
.ev-footer-logo em { color: #c4952a; font-style: inherit; }
.ev-footer-tagline {
    font-family: 'DM Mono', monospace;
    font-size: .62rem;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: rgba(239,243,240,.3);
    margin-bottom: 1.5rem;
}
.ev-footer-about {
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    font-weight: 300;
    font-size: .82rem;
    line-height: 1.7;
    color: rgba(239,243,240,.38);
    margin-bottom: 1.5rem;
}
.ev-footer-socials {
    display: flex; gap: .75rem; flex-wrap: wrap;
}
.ev-social {
    width: 38px; height: 38px;
    border: 1.5px solid rgba(196,149,42,.2);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: rgba(239,243,240,.4);
    text-decoration: none;
    transition: border-color .2s, color .2s, background .2s;
}
.ev-social:hover { border-color: var(--gold, #c4952a); color: #c4952a; background: rgba(196,149,42,.08); }
.ev-social svg { width: 15px; height: 15px; fill: none; stroke: currentColor; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }

.ev-footer-col-title {
    font-family: 'DM Mono', monospace;
    font-size: .6rem;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: rgba(196,149,42,.7);
    margin-bottom: 1.25rem;
    display: flex; align-items: center; gap: .6rem;
}
.ev-footer-col-title::before { content: ''; display: block; width: 16px; height: 1px; background: rgba(196,149,42,.5); flex-shrink: 0; }
.ev-footer-links {
    display: flex; flex-direction: column; gap: .6rem;
}
.ev-footer-link {
    font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
    font-size: .82rem;
    color: rgba(239,243,240,.38);
    text-decoration: none;
    transition: color .2s;
    min-height: 32px; display: flex; align-items: center;
}
.ev-footer-link:hover { color: rgba(239,243,240,.75); }

.ev-footer-bottom {
    max-width: 1280px;
    margin: 0 auto;
    position: relative; z-index: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}
.ev-footer-copy {
    font-family: 'DM Mono', monospace;
    font-size: .58rem;
    letter-spacing: .14em;
    color: rgba(239,243,240,.22);
    text-transform: uppercase;
}
.ev-footer-legal {
    display: flex; gap: 1.5rem; flex-wrap: wrap;
}
.ev-footer-legal a {
    font-family: 'DM Mono', monospace;
    font-size: .58rem;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: rgba(239,243,240,.22);
    text-decoration: none;
    transition: color .2s;
}
.ev-footer-legal a:hover { color: rgba(196,149,42,.6); }
</style>

<footer class="ev-footer">
    <div class="ev-footer-ghost" aria-hidden="true">Evergreen</div>

    <div class="ev-footer-grid">
        <!-- Brand column -->
        <div>
            <a href="#home" class="ev-footer-logo">Evergreen <em>Digital</em></a>
            <p class="ev-footer-tagline">Built with intention. · Denver, CO</p>
            <p class="ev-footer-about">Colorado's top-rated digital marketing agency. We help local businesses rank higher, convert more, and grow faster — with results you can measure.</p>
            <div class="ev-footer-socials" role="list" aria-label="Social media links">
                <a href="#" class="ev-social" aria-label="LinkedIn" role="listitem">
                    <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" class="ev-social" aria-label="Instagram" role="listitem">
                    <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="#" class="ev-social" aria-label="Facebook" role="listitem">
                    <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" class="ev-social" aria-label="Twitter / X" role="listitem">
                    <svg viewBox="0 0 24 24"><path d="M4 4l16 16M4 20L20 4"/></svg>
                </a>
            </div>
        </div>

        <!-- Services -->
        <div>
            <div class="ev-footer-col-title">Services</div>
            <nav class="ev-footer-links" aria-label="Services links">
                <a href="#services" class="ev-footer-link">Web Design &amp; Dev</a>
                <a href="#services" class="ev-footer-link">SEO</a>
                <a href="#services" class="ev-footer-link">Local SEO</a>
                <a href="#services" class="ev-footer-link">Google Ads</a>
                <a href="#services" class="ev-footer-link">Social Media</a>
                <a href="#services" class="ev-footer-link">Analytics</a>
            </nav>
        </div>

        <!-- Company -->
        <div>
            <div class="ev-footer-col-title">Company</div>
            <nav class="ev-footer-links" aria-label="Company links">
                <a href="#results"      class="ev-footer-link">Case Studies</a>
                <a href="#process"      class="ev-footer-link">Our Process</a>
                <a href="#testimonials" class="ev-footer-link">Testimonials</a>
                <a href="#pricing"      class="ev-footer-link">Pricing</a>
                <a href="#contact"      class="ev-footer-link">Contact</a>
            </nav>
        </div>

        <!-- Connect -->
        <div>
            <div class="ev-footer-col-title">Connect</div>
            <div class="ev-footer-links">
                <a href="mailto:hello@evergreendigital.co" class="ev-footer-link">hello@evergreendigital.co</a>
                <a href="tel:+13035550182"                 class="ev-footer-link">(303) 555-0182</a>
                <span class="ev-footer-link" style="pointer-events:none">1600 Glenarm Pl, Suite 400</span>
                <span class="ev-footer-link" style="pointer-events:none">Denver, CO 80202</span>
                <a href="#contact" class="ev-footer-link" style="color:rgba(196,149,42,.7);margin-top:.5rem">→ Free Strategy Call</a>
            </div>
        </div>
    </div>

    <div class="ev-footer-bottom">
        <p class="ev-footer-copy">&copy; ${year} Evergreen Digital LLC. All rights reserved.</p>
        <div class="ev-footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Sitemap</a>
        </div>
    </div>
</footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
