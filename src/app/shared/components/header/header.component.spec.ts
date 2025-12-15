import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { DOCUMENT } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let document: Document;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    document = TestBed.inject(DOCUMENT);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have isMenuOpen set to false by default', () => {
    expect(component.isMenuOpen).toBe(false);
  });

  it('should toggle isMenuOpen when toggleMenu is called', () => {
    expect(component.isMenuOpen).toBe(false);
    component.toggleMenu();
    expect(component.isMenuOpen).toBe(true);
    component.toggleMenu();
    expect(component.isMenuOpen).toBe(false);
  });

  it('should add/remove overflow-hidden class on body and documentElement when menu is toggled', () => {
    component.toggleMenu();
    expect(document.body.classList.contains('overflow-hidden')).toBe(true);
    expect(document.documentElement.classList.contains('overflow-hidden')).toBe(true);

    component.toggleMenu();
    expect(document.body.classList.contains('overflow-hidden')).toBe(false);
    expect(document.documentElement.classList.contains('overflow-hidden')).toBe(false);
  });

  it('should have aria-labels on interactive elements', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.btn-ghost[aria-label="Grupo Empatic Home"]')).toBeTruthy();
    expect(compiled.querySelector('a[aria-label="Nosotros"]')).toBeTruthy();
    expect(compiled.querySelector('a[aria-label="Consultorías"]')).toBeTruthy();
    expect(compiled.querySelector('a[aria-label="Acciones Empáticas"]')).toBeTruthy();
    expect(compiled.querySelector('a[aria-label="Quiero una cotización"]')).toBeTruthy();
    expect(compiled.querySelector('button[aria-label="Open menu"]')).toBeTruthy();
    expect(compiled.querySelector('button[aria-label="Close menu"]')).toBeTruthy();
  });
});
