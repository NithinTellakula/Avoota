import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationModalComponent } from './authentication-modal/authentication-modal'; // import your modal component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthenticationModalComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('hotel');

  // Modal visibility - as signal for optimal Angular usage
  showAuthModal = signal(false);

  // Open modal handler
  openAuthModal() {
    this.showAuthModal.set(true);
  }

  // Close modal handler
  closeAuthModal() {
    this.showAuthModal.set(false);
  }
}
