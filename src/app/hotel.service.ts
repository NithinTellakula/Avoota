import { Injectable } from '@angular/core';

export interface Hotel {
  name: string;
  price: string;
  rating: number;
  city: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  private hotels: Hotel[] = [
    // Hyderabad
    {
      name: 'Taj Krishna, Hyderabad',
      price: '₹9000/night',
      rating: 4.5,
      city: 'Hyderabad',
      imageUrl:
       'https://images.unsplash.com/photo-1454388683759-ee76c15fee26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzJTIwaW1hZ2VzfGVufDB8fDB8fHww'
    },
    {
      name: 'Trident, Hyderabad',
      price: '₹8500/night',
      rating: 4.5,
      city: 'Hyderabad',
      imageUrl:
        'https://images.unsplash.com/photo-1712344653295-19cf6592d84c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWxzJTIwaW1hZ2VzJTIwaW4lMjBoeWRlcmFiYWR8ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Peerless Hotel Hyderabad',
      price: '₹4000/night',
      rating: 4.0,
      city: 'Hyderabad',
      imageUrl:
        'https://cdn.pixabay.com/photo/2021/12/18/06/13/hotel-6878057_1280.jpg',
    },
    {
      name: 'Deccan Serai Hotel, HITEC CITY',
      price: '₹3500/night',
      rating: 4.4,
      city: 'Hyderabad',
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/11/08/11/22/lounge-2930070_1280.jpg',
    },
    {
      name: 'OYO Hotel Baseraa Inn Near Lumbini Park',
      price: '₹1200/night',
      rating: 3.9,
      city: 'Hyderabad',
      imageUrl:
        'https://cdn.pixabay.com/photo/2015/05/01/10/30/hotel-748188_1280.jpg',
    },

    // Bengaluru
    {
      name: 'Welcomhotel by ITC Hotels, Richmond Road',
      price: '₹8000/night',
      rating: 4.7,
      city: 'Bengaluru',
      imageUrl:
        'https://www.itchotels.com/content/dam/itchotels/welcomhotel-richmond-road-bengaluru/hero/Welcomhotel-Richmond-Road-Bengaluru_hero_1920x1080.jpg',
    },
    {
      name: 'The Leela Palace Bengaluru',
      price: '₹12000/night',
      rating: 4.6,
      city: 'Bengaluru',
      imageUrl:
        'https://www.theleela.com/content/dam/the-leela/bengaluru/property-overview/leela-bengaluru-hero1.jpg',
    },
    {
      name: 'The Oberoi, Bengaluru',
      price: '₹11000/night',
      rating: 4.7,
      city: 'Bengaluru',
      imageUrl:
        'https://www.oberoihotels.com/content/dam/oberoi/hotels/bengaluru/Bengaluru-Exterior-Building-02.jpg',
    },
    {
      name: 'JW Marriott Hotel Bengaluru',
      price: '₹9000/night',
      rating: 4.5,
      city: 'Bengaluru',
      imageUrl:
        'https://cache.marriott.com/marriottassets/marriott/BLRJW/blrjw-exterior-0030-hor-feat.jpg',
    },
    {
      name: 'Radisson Hotel Bengaluru City Center',
      price: '₹6000/night',
      rating: 4.4,
      city: 'Bengaluru',
      imageUrl:
        'https://www.radissonhotels.com/content/dam/hotels/2n0n/2n0n_radisson-bengaluru-city-center_2300x1432.jpg',
    },

    // Mumbai
    {
      name: 'The Taj Mahal Palace, Mumbai',
      price: '₹13000/night',
      rating: 4.7,
      city: 'Mumbai',
      imageUrl:
        'https://www.tajhotels.com/content/dam/luxury/the-taj-mahal-palace-mumbai/exterior/Taj-Mahal-Palace-Mumbai-Exterior-daytime.jpg',
    },
    {
      name: 'Grand Hyatt Mumbai Hotel & Residences',
      price: '₹12000/night',
      rating: 4.5,
      city: 'Mumbai',
      imageUrl:
        'https://www.hyatt.com/content/dam/hyatt/hyattdam/images/2022/05/18/1601/Grand-Hyatt-Mumbai-Exterior-Pool-View.jpg',
    },
    {
      name: 'JW Marriott Mumbai Juhu',
      price: '₹10000/night',
      rating: 4.6,
      city: 'Mumbai',
      imageUrl:
        'https://cache.marriott.com/marriottassets/marriott/BOMJW/bomjw-exterior-0040-hor-feat.jpg',
    },
    {
      name: 'The Oberoi, Mumbai',
      price: '₹14000/night',
      rating: 4.7,
      city: 'Mumbai',
      imageUrl:
        'https://www.oberoihotels.com/content/dam/oberoi/hotels/mumbai/Mumbai-Exterior-Building-07.jpg',
    },
    {
      name: 'Hotel Kemps Corner',
      price: '₹5000/night',
      rating: 4.3,
      city: 'Mumbai',
      imageUrl: 'https://hotelkempscorner.com/img/exterior-swimmingpool-mumbai.jpg',
    },

    // Delhi
    {
      name: 'Welcomhotel By ITC Hotels, Dwarka',
      price: '₹8500/night',
      rating: 4.5,
      city: 'Delhi',
      imageUrl:
        'https://www.itchotels.com/content/dam/itchotels/welcomhotel-dwarka/new-dwarka/hero/Welcomhotel-Dwarka-Hero-Shot.jpg',
    },
    {
      name: 'Crowne Plaza New Delhi Rohini',
      price: '₹7000/night',
      rating: 4.4,
      city: 'Delhi',
      imageUrl:
        'https://www.ihg.com/crowneplaza/hotels/us/en/new-delhi/delba/hoteldetail/media-gallery/crowne-plaza-new-delhi-rohini_14_z.jpg',
    },
    {
      name: "Holiday Inn New Delhi Int'L Airport",
      price: '₹7500/night',
      rating: 4.7,
      city: 'Delhi',
      imageUrl:
        'https://www.ihg.com/holidayinn/hotels/us/en/new-delhi/delap/hoteldetail/media-gallery/holiday-inn-new-delhi-airport_02_z.jpg',
    },
    {
      name: 'The Lalit New Delhi',
      price: '₹9000/night',
      rating: 4.4,
      city: 'Delhi',
      imageUrl:
        'https://www.thelalit.com/delhi/images/the-lalit-delhi-pictures-8.jpg',
    },
    {
      name: 'Sheraton New Delhi Hotel',
      price: '₹9500/night',
      rating: 4.7,
      city: 'Delhi',
      imageUrl:
        'https://cache.marriott.com/marriottassets/marriott/DELsn/delsn-exterior-0011-hor-feat.jpg',
    },

    // Chennai
    {
      name: 'Hotel O Chennai Central Railway Station',
      price: '₹1500/night',
      rating: 2.9,
      city: 'Chennai',
      imageUrl:
        'https://images.oyoroomscdn.com/uploads/hotel_image/76322/medium/53c9032ddbc9b42f.jpg',
    },
    {
      name: 'The Park Chennai',
      price: '₹6000/night',
      rating: 4.2,
      city: 'Chennai',
      imageUrl:
        'https://www.theparkhotels.com/chennai/wp-content/uploads/2017/11/home-gallery-3.jpg',
    },
    {
      name: 'E Hotel Chennai',
      price: '₹3500/night',
      rating: 4.3,
      city: 'Chennai',
      imageUrl: 'https://emallhotel.com/wp-content/uploads/2020/12/e_hotel_chennai.jpg',
    },
    {
      name: 'FAB Express B Zone',
      price: '₹1800/night',
      rating: 3.5,
      city: 'Chennai',
      imageUrl: 'https://images.fabhotels.com/PHOTOS/NUNGAMBKKM0138/0.0.jpg',
    },
    {
      name: 'Hotel Chennai Gate',
      price: '₹2000/night',
      rating: 3.7,
      city: 'Chennai',
      imageUrl: 'http://www.hotelchennaigate.com/Images/exterior.jpg',
    },

    // Pune
    {
      name: 'Crowne Plaza Pune City Centre',
      price: '₹7000/night',
      rating: 4.1,
      city: 'Pune',
      imageUrl:
        'https://www.ihg.com/crowneplaza/hotels/us/en/pune/pnqcc/hoteldetail/media-gallery/crowne-plaza-pune-city-centre_15_z.jpg',
    },
    {
      name: 'Four Points by Sheraton Hotel & Serviced Apartments',
      price: '₹6500/night',
      rating: 4.3,
      city: 'Pune',
      imageUrl:
        'https://cache.marriott.com/marriottassets/marriott/PNQfp/pnqfp-exterior-0020-hor-feat.jpg',
    },
    {
      name: 'The Pride Hotel Pune',
      price: '₹4000/night',
      rating: 4.0,
      city: 'Pune',
      imageUrl: 'https://www.pridehotel.com/assets/images/pool-area.jpg',
    },
    {
      name: 'Lemon Tree Premier Pune',
      price: '₹6000/night',
      rating: 4.2,
      city: 'Pune',
      imageUrl: 'https://www.lemontreehotels.com/en/media/1531/pune_city_centre.jpg',
    },
    {
      name: 'Sheraton Grand Pune Bund Garden Hotel',
      price: '₹8500/night',
      rating: 4.5,
      city: 'Pune',
      imageUrl:
        'https://cache.marriott.com/marriottassets/marriott/PNQmd/pnqmd-exterior-0030-hor-feat.jpg',
    },

    // Kolkata
    {
      name: 'Hyatt Regency Kolkata',
      price: '₹8500/night',
      rating: 4.4,
      city: 'Kolkata',
      imageUrl:
        'https://www.hyatt.com/content/dam/hyatt/hyattdam/2016/10/11/1019/Hyatt-Regency-Kolkata-Exterior-8933-hor-wide.jpg',
    },
    {
      name: 'ITC Royal Bengal, a Luxury Collection Hotel',
      price: '₹11000/night',
      rating: 4.8,
      city: 'Kolkata',
      imageUrl:
        'https://www.itchotels.com/content/dam/itchotels/royal-bengal-kolkata/royal-bengal-overview/hero/ITC-Royal-Bengal-Kolkata-hero.jpg',
    },
    {
      name: 'JW Marriott Hotel Kolkata',
      price: '₹9000/night',
      rating: 4.6,
      city: 'Kolkata',
      imageUrl:
        'https://cache.marriott.com/marriottassets/marriott/KOLJW/koljw-exterior-0023-hor-feat.jpg',
    },
    {
      name: 'The Elgin Fairlawn - Kolkata',
      price: '₹4500/night',
      rating: 4.3,
      city: 'Kolkata',
      imageUrl: 'https://www.elginhotels.com/images/elgin-fairlawn-kolkata.jpg',
    },
    {
      name: 'Raajkutir, Kolkata - IHCL SeleQtions',
      price: '₹6500/night',
      rating: 4.4,
      city: 'Kolkata',
      imageUrl: 'https://www.seleqtionshotels.com/media/7411/raajkutir_722x423.jpg',
    },

    // Goa
    {
      name: 'Holiday Inn Resort Goa, an IHG Hotel',
      price: '₹9000/night',
      rating: 4.7,
      city: 'Goa',
      imageUrl:
        'https://www.ihg.com/holidayinnresorts/hotels/us/en/goa/goiin/hoteldetail/media-gallery/holiday-inn-resort-goa_12_z.jpg',
    },
    {
      name: 'Grand Hyatt Goa',
      price: '₹8500/night',
      rating: 4.6,
      city: 'Goa',
      imageUrl:
        'https://www.hyatt.com/content/dam/hyatt/hyattdam/2016/10/27/1141/Grand-Hyatt-Goa-Exterior-0001.jpg',
    },
    {
      name: 'Taj Exotica Resort & Spa, Goa',
      price: '₹11000/night',
      rating: 4.7,
      city: 'Goa',
      imageUrl:
        'https://www.tajhotels.com/content/dam/luxury/taj-exotica-goa/beach/taj_exotica_beach_hero_desktop.jpg',
    },
    {
      name: 'DoubleTree by Hilton Goa - Panaji',
      price: '₹7500/night',
      rating: 4.5,
      city: 'Goa',
      imageUrl:
        'https://cdn.hilton.com/hiltongroupimages/image/upload/t_MODx%20-%20Modular%20-%20Exterior%20Shot/public/HL/dt/goaipdi/dt-goa-ipdi-exterior-0314.jpg',
    },
    {
      name: 'Bogmallo Beach Resort',
      price: '₹6500/night',
      rating: 4.1,
      city: 'Goa',
      imageUrl:
        'https://www.bogmallobeachresort.com/wp-content/uploads/2019/04/Bogmallo-Beach-Resort-Goa-Exterior.jpg',
    },
  ];

  getHotelsByCity(city: string): Hotel[] {
    if (!city || city.trim() === '') {
      return [];
    }
    return this.hotels.filter(
      (h: Hotel) => h.city.toLowerCase() === city.toLowerCase()
    );
  }
}
