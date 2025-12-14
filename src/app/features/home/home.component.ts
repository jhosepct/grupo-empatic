import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, NgFor, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, RouterLink, NgFor],
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  testimonials = [
    {
      quote: "El equipo de Grupo EMPATIC demostró un compromiso y una pasión que transformaron por completo nuestro proyecto. Su enfoque estratégico y humano fue clave para el éxito.",
      author: "Ana Sofía",
      title: "Directora de Innovación, Corp Inc.",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      ringColor: "ring-primary"
    },
    {
      quote: "La metodología de EMPATIC nos permitió no solo alcanzar nuestras metas, sino superarlas. Su visión para integrar la tecnología en el impacto social es única.",
      author: "Carlos Rodríguez",
      title: "Gerente de Sostenibilidad, Natura SAC",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704e",
      ringColor: "ring-secondary"
    },
    {
      quote: "Trabajar con Grupo EMPATIC ha sido una experiencia inspiradora. Su dedicación a la formación de líderes y al desarrollo comunitario es genuina y efectiva.",
      author: "Lucía Mendoza",
      title: "Líder de Proyecto, ONG Futuro",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704f",
      ringColor: "ring-accent"
    },
    {
      quote: "La capacidad de Grupo EMPATIC para innovar y adaptarse a nuestras necesidades fue impresionante. Definitivamente un aliado estratégico para cualquier empresa con propósito.",
      author: "Javier Gómez",
      title: "CEO, StartUp Creativa",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704g",
      ringColor: "ring-success"
    }
  ];

  constructor(
    private elementRef: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              entry.target.classList.remove('hidden-for-animation');
            }
          });
        }, {
          threshold: 0.1
        });

        const sections = this.elementRef.nativeElement.querySelectorAll('.hidden-for-animation');
        sections.forEach((section: any) => {
          observer.observe(section);
        });
      }, 100);
    }
  }
}
