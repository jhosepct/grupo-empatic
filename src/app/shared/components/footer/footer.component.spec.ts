import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct social media links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const facebookLink = compiled.querySelector('a[href="https://www.facebook.com/grupoempatic"]');
    const linkedinLink = compiled.querySelector('a[href="https://www.linkedin.com/company/grupo-empatic/"]');
    const instagramLink = compiled.querySelector('a[href="https://www.instagram.com/grupo.empatic/"]');

    expect(facebookLink).toBeTruthy();
    expect(linkedinLink).toBeTruthy();
    expect(instagramLink).toBeTruthy();
  });

  it('should have the correct contact information', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const emailLink = compiled.querySelector('a[href="mailto:contacto@grupoempatic.com"]');
    const phoneLink = compiled.querySelector('a[href="tel:+51974131951"]');

    expect(emailLink).toBeTruthy();
    expect(phoneLink).toBeTruthy();
  });

  it('should have the copyright notice', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const copyrightNotice = compiled.querySelector('.footer-center p');
    expect(copyrightNotice?.textContent).toContain('© 2025 Grupo EMPATIC. Todos los derechos reservados.');
  });
});
