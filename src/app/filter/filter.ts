
import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-filter-sidebar',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './filter.html',
  styleUrls: ['./filter.css']
})
export class FilterSidebarComponent {
  @Output() filterChanged = new EventEmitter<any>();

  filters = {
    hotelName: '',
    price0_3000: false,
    price3000_5000: false,
    price5000_8000: false,
    price8000_15000: false,
    price15000plus: false,
    sortBy: '',
    star5: false,
    star4: false,
    star3: false,
    specialCategory: false,
    hotel: false,
    inn: false,
    apartment: false,
    villa: false,
    guesthouse: false,
    resort: false,
    palace: false,
    residence: false,
    spa: false,
    swimmingPool: false,
    gym: false,
    roomService: false,
    restaurant: false,
    cafe: false,
    currencyExchange: false,
    cctv: false,
    security: false,
    valetParking: false
  };

  onFiltersChanged() {
    this.filterChanged.emit(this.filters);
  }
}
