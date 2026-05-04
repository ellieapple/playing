class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <nav class="bg-transparent py-4 px-6">
                <div class="container mx-auto flex items-center justify-between">
                    <a href="/" class="nav-logo text-2xl font-bold text-white">
                        Pixel<span class="text-secondary">Craft</span>
                    </a>

                    <!-- Desktop links -->
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="#projects" class="nav-link text-white font-medium">Projects</a>
                        <a href="#skills"   class="nav-link text-white font-medium">Skills</a>
                        <a href="#contact"  class="nav-link text-white font-medium">Contact</a>
                        <a href="mailto:hello@pixelcraft.design"
                           class="bg-white text-primary px-5 py-2 rounded-full font-semibold hover:bg-opacity-90 transition duration-300">
                            Hire Me
                        </a>
                    </div>

                    <!-- Hamburger -->
                    <button id="menu-toggle" class="md:hidden text-white focus:outline-none" aria-label="Toggle menu">
                        <i data-feather="menu" class="w-6 h-6"></i>
                    </button>
                </div>

                <!-- Mobile menu -->
                <div id="mobile-menu" class="md:hidden bg-white mt-2 rounded-xl shadow-lg px-6 py-4 space-y-4">
                    <a href="#projects" class="block text-dark font-medium hover:text-primary transition">Projects</a>
                    <a href="#skills"   class="block text-dark font-medium hover:text-primary transition">Skills</a>
                    <a href="#contact"  class="block text-dark font-medium hover:text-primary transition">Contact</a>
                    <a href="mailto:hello@pixelcraft.design"
                       class="block bg-primary text-white text-center px-5 py-2 rounded-full font-semibold hover:bg-opacity-90 transition">
                        Hire Me
                    </a>
                </div>
            </nav>
        `;

        // Hamburger toggle
        const toggle = this.querySelector('#menu-toggle');
        const menu   = this.querySelector('#mobile-menu');
        toggle?.addEventListener('click', () => {
            menu.classList.toggle('open');
            feather.replace();
        });

        // Close mobile menu on link click
        menu?.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => menu.classList.remove('open'));
        });

        feather.replace();
    }
}

customElements.define('custom-navbar', CustomNavbar);
