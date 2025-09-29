
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


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

  hotels = [
    { name: 'Grand Palace', price: '₹5000/night', rating: 4.5 },
    { name: 'City Inn', price: '₹3000/night', rating: 4.0 },
    { name: 'Luxury Stay', price: '₹7000/night', rating: 5.0 }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.city = params['city'];
      this.checkIn = params['checkIn'];
      this.checkOut = params['checkOut'];
      this.guests = params['guests'];
    });
  }
}

