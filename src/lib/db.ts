export interface Room {
  id: string;
  name: string;
  size: string;
  sqft: string;
  adults: number;
  children: number;
  bed: string;
  images: string[];
  price: number;
  original_price?: number;
  count: number;
  amenities: string[];
}

export interface Booking {
  id: string;
  booking_id: string;
  room_id: string;
  room_name: string;
  guest_name: string;
  guest_email: string;
  guest_phone?: string;
  check_in: string;
  check_out: string;
  status: 'Confirmed' | 'Pending' | 'Cancelled' | 'Rejected';
  total_price: number;
  payment_screenshot?: string;
  created_at: string;
}

export interface TableBooking {
  id: string;
  guest_name: string;
  guest_email: string;
  guest_phone?: string;
  date: string;
  time: string;
  guests: number;
  status: 'Confirmed' | 'Pending' | 'Cancelled';
  created_at: string;
}

export interface EventInquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  event_type: string;
  guests: number;
  date: string;
  message: string;
  status: 'Pending' | 'Contacted' | 'Closed';
  created_at: string;
}

export interface Database {
  rooms: Room[];
  bookings: Booking[];
  tableBookings: TableBooking[];
  eventInquiries: EventInquiry[];
}

