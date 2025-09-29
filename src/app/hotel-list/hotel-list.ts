import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HotelService, Hotel } from '../hotel.service';

@Component({
  selector: 'app-hotel-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hotel-list.html',
  styleUrls: ['./hotel-list.css']
})
export class HotelListComponent implements OnInit {
  city: string = '';
  checkIn: string = '';
  checkOut: string = '';
  guests: string = '';
  hotels: Hotel[] = [];

  constructor(private route: ActivatedRoute, private hotelService: HotelService) {}

 ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.city = params['city'] || '';
    this.checkIn = params['checkIn'] || '';
    this.checkOut = params['checkOut'] || '';
    this.guests = `${params['adults']} Adults, ${params['children']} Children, ${params['rooms']} Rooms`;

    if (!this.city.trim()) {
      this.hotels = []; // No city specified means no hotels to show
    } else {
      this.hotels = this.hotelService.getHotelsByCity(this.city);
    }
  });
}

}
