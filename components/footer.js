class CustomFooter extends HTMLElement {
    connectedCallback() {
        const year = new Date().getFullYear();
        this.innerHTML = `
            <footer class="bg-dark text-gray-400 py-12">
                <div class="container mx-auto px-6">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                        <!-- Brand -->
                        <div>
                            <a href="/" class="text-2xl font-bold text-white">
                                Pixel<span class="text-secondary">Craft</span>
                            </a>
                            <p class="text-sm mt-1">Designing experiences that matter.</p>
                        </div>

                        <!-- Nav links -->
                        <div class="flex gap-6 text-sm">
                            <a href="#projects" class="hover:text-white transition">Projects</a>
                            <a href="#skills"   class="hover:text-white transition">Skills</a>
                            <a href="#contact"  class="hover:text-white transition">Contact</a>
                        </div>

                        <!-- Social icons -->
                        <div class="flex gap-4">
                            <a href="#" aria-label="Dribbble"  class="hover:text-white transition"><i data-feather="dribbble"  class="w-5 h-5"></i></a>
                            <a href="#" aria-label="Behance"   class="hover:text-white transition"><i data-feather="figma"     class="w-5 h-5"></i></a>
                            <a href="#" aria-label="LinkedIn"  class="hover:text-white transition"><i data-feather="linkedin"  class="w-5 h-5"></i></a>
                            <a href="#" aria-label="Twitter"   class="hover:text-white transition"><i data-feather="twitter"   class="w-5 h-5"></i></a>
                        </div>
                    </div>

                    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
                        <p>&copy; ${year} PixelCraft. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;

        feather.replace();
    }
}

customElements.define('custom-footer', CustomFooter);
