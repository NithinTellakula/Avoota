import { Injectable } from '@angular/core';

export interface Hotel {
  name: string;
  price: string;
  rating: number;
  city: string;
}

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private hotels: Hotel[] = [
  // Hyderabad
  { name: 'Taj Krishna, Hyderabad', price: '₹9000/night', rating: 4.5, city: 'Hyderabad' },
  { name: 'Trident, Hyderabad', price: '₹8500/night', rating: 4.5, city: 'Hyderabad' },
  { name: 'Peerless Hotel Hyderabad', price: '₹4000/night', rating: 4.0, city: 'Hyderabad' },
  { name: 'Deccan Serai Hotel, HITEC CITY', price: '₹3500/night', rating: 4.4, city: 'Hyderabad' },
  { name: 'OYO Hotel Baseraa Inn Near Lumbini Park', price: '₹1200/night', rating: 3.9, city: 'Hyderabad' },

  // Bengaluru
  { name: 'Welcomhotel by ITC Hotels, Richmond Road', price: '₹8000/night', rating: 4.7, city: 'Bengaluru' },
  { name: 'The Leela Palace Bengaluru', price: '₹12000/night', rating: 4.6, city: 'Bengaluru' },
  { name: 'The Oberoi, Bengaluru', price: '₹11000/night', rating: 4.7, city: 'Bengaluru' },
  { name: 'JW Marriott Hotel Bengaluru', price: '₹9000/night', rating: 4.5, city: 'Bengaluru' },
  { name: 'Radisson Hotel Bengaluru City Center', price: '₹6000/night', rating: 4.4, city: 'Bengaluru' },

  // Mumbai
  { name: 'The Taj Mahal Palace, Mumbai', price: '₹13000/night', rating: 4.7, city: 'Mumbai' },
  { name: 'Grand Hyatt Mumbai Hotel & Residences', price: '₹12000/night', rating: 4.5, city: 'Mumbai' },
  { name: 'JW Marriott Mumbai Juhu', price: '₹10000/night', rating: 4.6, city: 'Mumbai' },
  { name: 'The Oberoi, Mumbai', price: '₹14000/night', rating: 4.7, city: 'Mumbai' },
  { name: 'Hotel Kemps Corner', price: '₹5000/night', rating: 4.3, city: 'Mumbai' },

  // Delhi
  { name: 'Welcomhotel By ITC Hotels, Dwarka', price: '₹8500/night', rating: 4.5, city: 'Delhi' },
  { name: 'Crowne Plaza New Delhi Rohini', price: '₹7000/night', rating: 4.4, city: 'Delhi' },
  { name: 'Holiday Inn New Delhi Int\'L Airport', price: '₹7500/night', rating: 4.7, city: 'Delhi' },
  { name: 'The Lalit New Delhi', price: '₹9000/night', rating: 4.4, city: 'Delhi' },
  { name: 'Sheraton New Delhi Hotel', price: '₹9500/night', rating: 4.7, city: 'Delhi' },

  // Chennai
  { name: 'Hotel O Chennai Central Railway Station', price: '₹1500/night', rating: 2.9, city: 'Chennai' },
  { name: 'The Park Chennai', price: '₹6000/night', rating: 4.2, city: 'Chennai' },
  { name: 'E Hotel Chennai', price: '₹3500/night', rating: 4.3, city: 'Chennai' },
  { name: 'FAB Express B Zone', price: '₹1800/night', rating: 3.5, city: 'Chennai' },
  { name: 'Hotel Chennai Gate', price: '₹2000/night', rating: 3.7, city: 'Chennai' },

  // Pune
  { name: 'Crowne Plaza Pune City Centre', price: '₹7000/night', rating: 4.1, city: 'Pune' },
  { name: 'Four Points by Sheraton Hotel & Serviced Apartments', price: '₹6500/night', rating: 4.3, city: 'Pune' },
  { name: 'The Pride Hotel Pune', price: '₹4000/night', rating: 4.0, city: 'Pune' },
  { name: 'Lemon Tree Premier Pune', price: '₹6000/night', rating: 4.2, city: 'Pune' },
  { name: 'Sheraton Grand Pune Bund Garden Hotel', price: '₹8500/night', rating: 4.5, city: 'Pune' },

  // Kolkata
  { name: 'Hyatt Regency Kolkata', price: '₹8500/night', rating: 4.4, city: 'Kolkata' },
  { name: 'ITC Royal Bengal, a Luxury Collection Hotel', price: '₹11000/night', rating: 4.8, city: 'Kolkata' },
  { name: 'JW Marriott Hotel Kolkata', price: '₹9000/night', rating: 4.6, city: 'Kolkata' },
  { name: 'The Elgin Fairlawn - Kolkata', price: '₹4500/night', rating: 4.3, city: 'Kolkata' },
  { name: 'Raajkutir, Kolkata - IHCL SeleQtions', price: '₹6500/night', rating: 4.4, city: 'Kolkata' },

  // Goa
  { name: 'Holiday Inn Resort Goa, an IHG Hotel', price: '₹9000/night', rating: 4.7, city: 'Goa' },
  { name: 'Grand Hyatt Goa', price: '₹8500/night', rating: 4.6, city: 'Goa' },
  { name: 'Taj Exotica Resort & Spa, Goa', price: '₹11000/night', rating: 4.7, city: 'Goa' },
  { name: 'DoubleTree by Hilton Goa - Panaji', price: '₹7500/night', rating: 4.5, city: 'Goa' },
  { name: 'Bogmallo Beach Resort', price: '₹6500/night', rating: 4.1, city: 'Goa' },
];


 getHotelsByCity(city: string): Hotel[] {
  if (!city || city.trim() === '') {
    return [];
  }
  return this.hotels.filter(h => h.city.toLowerCase() === city.toLowerCase());
}

}
