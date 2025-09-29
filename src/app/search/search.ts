import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css']
})
export class SearchBarComponent {
  city: string = '';
  checkIn: string = '';
  checkOut: string = '';
  today: string = new Date().toISOString().split('T')[0];


  guests = {
    adults: 1,
    children: 0,
    rooms: 1
  };

  showGuestPopup: boolean = false;

  cityList: string[] = [
    'Hyderabad',
    'Bengaluru',
    'Mumbai',
    'Delhi',
    'Chennai',
    'Pune',
    'Kolkata',
    'Goa'
  ];

  public Math = Math;

  constructor(private router: Router) {}

  toggleGuestPopup() {
    this.showGuestPopup = !this.showGuestPopup;
  }

  toggleGuestDropdown() {
    this.toggleGuestPopup();
  }

  search() {

   if (
    !this.city?.trim() ||
    !this.checkIn?.trim() ||
    !this.checkOut?.trim() ||
    this.guests.adults <= 0 ||
    this.guests.children < 0 ||
    this.guests.rooms <= 0
  ) {
    alert('Please fill all fields before searching.');
    return;
  }

    this.router.navigate(['/hotels'], {
      queryParams: {
        city: this.city,
        checkIn: this.checkIn,
        checkOut: this.checkOut,
        adults: this.guests.adults,
        children: this.guests.children,
        rooms: this.guests.rooms
      }
    });
  }
}
