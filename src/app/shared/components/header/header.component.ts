import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, RouterLink, RouterLinkActive],
    template: `
    <div class="navbar bg-base-100/90 backdrop-blur-md sticky top-0 z-50 border-b border-base-200">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a routerLink="/" routerLinkActive="text-primary" [routerLinkActiveOptions]="{exact: true}">Nosotros</a></li>
            <li><a routerLink="/consultorias" routerLinkActive="text-primary">Consultorías</a></li>
            <li><a routerLink="/empathetic-actions" routerLinkActive="text-primary">Acciones Empáticas</a></li>
          </ul>
        </div>
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
        <a class="btn btn-primary text-white rounded-full px-6 shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105">
          Quiero una cotización
        </a>
      </div>
    </div>
  `
})
export class HeaderComponent { }
