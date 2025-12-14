import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    template: `
    <footer class="footer p-10 bg-base-200 text-base-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <aside>
        <a routerLink="/" class="btn btn-ghost text-xl font-bold mb-2">
            <svg width="32" height="32" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="mr-2">
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#FF6B6B" />
                        <stop offset="100%" stop-color="#4D96FF" />
                    </linearGradient>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                        <feOffset dx="2" dy="2" result="offsetblur"/>
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.5"/>
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <g filter="url(#shadow)">
                    <path d="M50 10 C 20 10, 10 40, 10 50 C 10 90, 50 90, 50 90" fill="none" stroke="url(#grad1)" stroke-width="12" stroke-linecap="round"/>
                    <path d="M50 90 C 80 90, 90 60, 90 50 C 90 10, 50 10, 50 10" fill="none" stroke="url(#grad1)" stroke-width="12" stroke-linecap="round"/>
                    <circle cx="50" cy="50" r="10" fill="url(#grad1)"/>
                </g>
            </svg>
            <span class="text-primary">GRUPO</span>EMPATIC
        </a>
        <p class="max-w-xs">
          Consultora de impacto social comprometida con el desarrollo integral, 
          generando soluciones estratégicas, innovadoras y sostenibles.
        </p>
        <div class="mt-4 flex gap-4">
            <!-- Social Icons -->
            <a href="https://www.facebook.com/grupoempatic" target="_blank" class="link link-hover text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="hover:text-primary transition-colors"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
            </a>
            <a href="https://www.linkedin.com/company/grupo-empatic/" target="_blank" class="link link-hover text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="hover:text-primary transition-colors"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.396c0-2.008 1.12-3.125 2.774-3.125 1.522 0 2.402 1.018 2.402 3.125v8.396h4.98v-8.66c0-3.678-1.92-6.34-5.248-6.34-2.43 0-3.822 1.37-4.432 2.25v-1.99h-4.98v16z"></path></svg>
            </a>
            <a href="https://www.instagram.com/grupo.empatic/" target="_blank" class="link link-hover text-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="hover:text-primary transition-colors"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"></path></svg>
            </a>
        </div>
      </aside> 
      <nav>
        <header class="footer-title opacity-100 text-white">Servicios</header> 
        <a class="link link-hover">Consultorías de Impacto</a>
        <a class="link link-hover">Acciones Empáticas</a>
      </nav> 
      <nav>
        <header class="footer-title opacity-100 text-white">Empresa</header> 
        <a class="link link-hover">Nosotros</a>
        <a class="link link-hover">Equipo</a>
        <a class="link link-hover">Novedades</a>
        <a class="link link-hover">Trabaja con nosotros</a>
      </nav> 
      <nav>
        <header class="footer-title opacity-100 text-white">Contacto</header> 
        <a class="link link-hover max-w-[200px]">Lima, Perú</a>
        <a href="mailto:contacto@grupoempatic.com" class="link link-hover text-primary">contacto@grupoempatic.com</a>
        <a href="tel:+51974131951" class="link link-hover">+51 974 131 951</a>
      </nav>
    </footer>
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <aside class="items-center grid-flow-col">
        <p>© 2025 Grupo EMPATIC. Todos los derechos reservados.</p>
      </aside> 
      <nav class="md:place-self-center md:justify-self-end">
        <div class="grid grid-flow-col gap-4 text-sm">
            <a class="link link-hover">Términos y condiciones</a>
            <a class="link link-hover">Política de privacidad</a>
            <a class="link link-hover">Libro de reclamaciones</a>
        </div>
      </nav>
    </footer>
  `
})
export class FooterComponent { }
