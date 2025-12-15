import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <div class="navbar bg-base-100/90 backdrop-blur-md sticky top-0 z-50 border-b border-base-200">
      <div class="navbar-start">
        <a routerLink="/" class="btn btn-ghost text-xl font-bold">
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
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 font-medium">
          <li><a routerLink="/" routerLinkActive="text-primary !bg-transparent" [routerLinkActiveOptions]="{exact: true}">Nosotros</a></li>
          <li><a routerLink="/consultorias" routerLinkActive="text-primary !bg-transparent">Consultorías</a></li>
          <li><a routerLink="/empathetic-actions" routerLinkActive="text-primary !bg-transparent">Acciones Empáticas</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <a class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white rounded-full px-6 shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 border-none hidden lg:flex">
          Quiero una cotización
        </a>
        <div class="lg:hidden">
          <button (click)="toggleMenu()" class="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="fixed top-0 left-0 w-full h-full bg-base-100/95 shadow-lg z-50 transform transition-transform duration-300 ease-in-out"
         [class.translate-x-0]="isMenuOpen"
         [class.-translate-x-full]="!isMenuOpen">
      <div class="p-4 flex flex-col h-full justify-center items-center">
        <button (click)="toggleMenu()" class="btn btn-ghost absolute top-4 right-4 z-50">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <ul class="menu flex-grow justify-center items-center text-2xl font-bold">
          <li><a routerLink="/" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: true}" (click)="toggleMenu()">Nosotros</a></li>
          <li><a routerLink="/consultorias" routerLinkActive="text-primary" (click)="toggleMenu()">Consultorías</a></li>
          <li><a routerLink="/empathetic-actions" routerLinkActive="text-primary" (click)="toggleMenu()">Acciones Empáticas</a></li>
          <li><a class="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white rounded-full px-6 shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 border-none mt-4 text-2xl font-bold" (click)="toggleMenu()">
            Quiero una cotización
          </a></li>
        </ul>
      </div>
    </div>
    <div *ngIf="isMenuOpen" (click)="toggleMenu()" class="fixed inset-0 bg-black opacity-50 z-40"></div>
  `,
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
      this.document.body.classList.add('overflow-hidden');
      this.document.documentElement.classList.add('overflow-hidden');
    } else {
      this.document.body.classList.remove('overflow-hidden');
      this.document.documentElement.classList.remove('overflow-hidden');
    }
  }
}
