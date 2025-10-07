import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HotelService, Hotel } from '../hotel.service';
import { FilterSidebarComponent } from '../filter/filter';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule, FilterSidebarComponent],
  templateUrl: './hotel-list.html',
  styleUrls: ['./hotel-list.css']
})
export class HotelListComponent implements OnInit {
  city: string = '';
  checkIn: string = '';
  checkOut: string = '';
  guests: string = '';
  hotels: Hotel[] = [];
  filteredHotels: Hotel[] = [];

  constructor(private route: ActivatedRoute, private hotelService: HotelService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.city = params['city'] || '';
      this.checkIn = params['checkIn'] || '';
      this.checkOut = params['checkOut'] || '';
      this.guests = `${params['adults']} Adults, ${params['children']} Children, ${params['rooms']} Rooms`;

      if (!this.city.trim()) {
        this.hotels = [];
        this.filteredHotels = [];
      } else {
        this.hotels = this.hotelService.getHotelsByCity(this.city);
        this.filteredHotels = [...this.hotels];
      }
    });
  }

  onFilterChanged(filters: any) {
    // Basic example filter by hotel name - extend for full filters as needed
    this.filteredHotels = this.hotels.filter(hotel => {
      if (filters.hotelName && !hotel.name.toLowerCase().includes(filters.hotelName.toLowerCase())) {
        return false;
      }
      // Add additional filtering logic (price, ratings, amenities etc.) here
      return true;
    });
  }
}
