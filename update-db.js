const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(process.cwd(), 'data.json');

const newData = {
  "rooms": [
    {
      "id": "1",
      "name": "Cozy Room",
      "size": "11 m²",
      "sqft": "120 ft²",
      "adults": 2,
      "children": 1,
      "bed": "1 Queen Bed",
      "images": ["https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80"],
      "price": 1446,
      "count": 5,
      "amenities": ["Air Conditioning", "In-room Dining", "High-Speed Wi-Fi", "Mineral Water", "Housekeeping", "Modern Bathroom", "Heater"]
    },
    {
      "id": "2",
      "name": "Deluxe Room",
      "size": "16 m²",
      "sqft": "169 ft²",
      "adults": 2,
      "children": 2,
      "bed": "1 Queen Bed",
      "images": ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"],
      "price": 1807,
      "count": 8,
      "amenities": ["City View", "Air Conditioning", "In-room Dining", "High-Speed Wi-Fi", "Mineral Water", "Housekeeping", "Luxury Bathroom"]
    },
    {
      "id": "3",
      "name": "Executive Room",
      "size": "21 m²",
      "sqft": "225 ft²",
      "adults": 3,
      "children": 2,
      "bed": "1 King Bed",
      "images": ["https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80"],
      "price": 2168,
      "count": 3,
      "amenities": ["Panoramic City View", "Air Conditioning", "In-room Dining", "High-Speed Wi-Fi", "Mineral Water", "Housekeeping", "Premium Bathroom", "Bathtub"]
    }
  ],
  "bookings": [],
  "tableBookings": []
};

fs.writeFileSync(DB_FILE, JSON.stringify(newData, null, 2), 'utf-8');
console.log('Database successfully updated with new pricing and amenities.');
