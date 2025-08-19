import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with empty values', () => {
    expect(component.loginForm.get('email')?.value).toBe('');
    expect(component.loginForm.get('password')?.value).toBe('');
    expect(component.loginForm.get('rememberMe')?.value).toBe(false);
  });

  it('should validate required fields', () => {
    const emailControl = component.loginForm.get('email');
    const passwordControl = component.loginForm.get('password');

    expect(emailControl?.hasError('required')).toBeTruthy();
    expect(passwordControl?.hasError('required')).toBeTruthy();
  });

  it('should validate email format', () => {
    const emailControl = component.loginForm.get('email');
    
    emailControl?.setValue('invalid-email');
    expect(emailControl?.hasError('email')).toBeTruthy();
    
    emailControl?.setValue('valid@email.com');
    expect(emailControl?.hasError('email')).toBeFalsy();
  });

  it('should validate password minimum length', () => {
    const passwordControl = component.loginForm.get('password');
    
    passwordControl?.setValue('123');
    expect(passwordControl?.hasError('minlength')).toBeTruthy();
    
    passwordControl?.setValue('123456');
    expect(passwordControl?.hasError('minlength')).toBeFalsy();
  });

  it('should call onSubmit when form is valid', () => {
    spyOn(console, 'log');
    
    component.loginForm.patchValue({
      email: 'test@example.com',
      password: 'password123',
      rememberMe: true
    });
    
    component.onSubmit();
    
    expect(console.log).toHaveBeenCalledWith('Login attempt:', {
      email: 'test@example.com',
      password: 'password123',
      rememberMe: true
    });
  });

  it('should mark all fields as touched when form is invalid', () => {
    spyOn(component.loginForm.get('email')!, 'markAsTouched');
    spyOn(component.loginForm.get('password')!, 'markAsTouched');
    spyOn(component.loginForm.get('rememberMe')!, 'markAsTouched');
    
    component.onSubmit();
    
    expect(component.loginForm.get('email')!.markAsTouched).toHaveBeenCalled();
    expect(component.loginForm.get('password')!.markAsTouched).toHaveBeenCalled();
    expect(component.loginForm.get('rememberMe')!.markAsTouched).toHaveBeenCalled();
  });
});