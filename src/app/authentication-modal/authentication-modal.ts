import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authentication-modal',
  templateUrl:'./authentication-modal.html',
  styleUrls: ['./authentication-modal.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AuthenticationModalComponent {
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

 isLoginMode = true;  // true => login form, false => sign up form

  email: string = '';
  password: string = '';

  username: string = '';   // sign up fields
  confirmPassword: string = '';

  errorMessage: string = '';

  closeModal() {
    this.close.emit();
    this.resetForms();
  }
 
    toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.resetForms();
  }

  resetForms() {
    this.email = '';
    this.password = '';
    this.username = '';
    this.confirmPassword = '';
    this.errorMessage = '';
  }

    onLoginSubmit() {
    this.errorMessage = '';
    if (this.email && this.password) {
      // Simulate login validation (replace with actual logic)
      if (this.email === 'user@example.com' && this.password === 'password123') {
        alert('Login successful!');
        this.closeModal();
      } else {
        this.errorMessage = 'Invalid email or password!';
      }
    } else {
      this.errorMessage = 'Please fill all login fields';
    }
  }

 onSignUpSubmit() {
    this.errorMessage = '';
    if (!this.username || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Please fill all sign-up fields';
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }
    // Simulate signup success
    alert('Registration successful! You can now log in.');
    this.toggleMode(); // Switch to login after signup
  }

}
