import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const DB_PATH = join(process.cwd(), 'data');
const DB_FILE = join(DB_PATH, 'db.json');

// Ensure data directory exists
if (!existsSync(DB_PATH)) {
  mkdirSync(DB_PATH, { recursive: true });
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
  createdAt: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: 'haircut' | 'styling' | 'grooming' | 'special';
}

export interface GalleryItem {
  id: string;
  type: 'photo' | 'video';
  url: string;
  thumbnail?: string;
  title: string;
  description?: string;
}

interface Database {
  bookings: Booking[];
  services: Service[];
  gallery: GalleryItem[];
}

const defaultDb: Database = {
  bookings: [],
  services: [
    {
      id: '1',
      name: 'Classic Haircut',
      description: 'Traditional haircut with scissors and clippers',
      price: '$35',
      duration: '30 min',
      category: 'haircut'
    },
    {
      id: '2',
      name: 'Premium Haircut & Styling',
      description: 'Haircut with wash, style, and premium products',
      price: '$50',
      duration: '45 min',
      category: 'haircut'
    },
    {
      id: '3',
      name: 'Beard Trim & Shape',
      description: 'Professional beard trimming and shaping',
      price: '$25',
      duration: '20 min',
      category: 'grooming'
    },
    {
      id: '4',
      name: 'Hot Towel Shave',
      description: 'Traditional straight razor shave with hot towel treatment',
      price: '$45',
      duration: '40 min',
      category: 'grooming'
    },
    {
      id: '5',
      name: 'Hair Coloring',
      description: 'Professional hair coloring service',
      price: '$80',
      duration: '90 min',
      category: 'styling'
    },
    {
      id: '6',
      name: 'Kids Haircut',
      description: 'Haircut for children under 12',
      price: '$25',
      duration: '20 min',
      category: 'haircut'
    },
    {
      id: '7',
      name: 'The Complete Package',
      description: 'Haircut, beard trim, hot towel shave, and styling',
      price: '$100',
      duration: '90 min',
      category: 'special'
    }
  ],
  gallery: [
    {
      id: '1',
      type: 'photo',
      url: '/images/gallery/haircut1.jpg',
      title: 'Classic Fade',
      description: 'Professional fade haircut'
    },
    {
      id: '2',
      type: 'photo',
      url: '/images/gallery/haircut2.jpg',
      title: 'Modern Style',
      description: 'Contemporary styling'
    }
  ]
};

function readDb(): Database {
  if (!existsSync(DB_FILE)) {
    writeDb(defaultDb);
    return defaultDb;
  }
  
  try {
    const data = readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return defaultDb;
  }
}

function writeDb(data: Database): void {
  writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

// Bookings
export function getBookings(): Booking[] {
  const db = readDb();
  return db.bookings;
}

export function getBookingById(id: string): Booking | undefined {
  const db = readDb();
  return db.bookings.find(b => b.id === id);
}

export function createBooking(booking: Omit<Booking, 'id' | 'createdAt'>): Booking {
  const db = readDb();
  const newBooking: Booking = {
    ...booking,
    id: Date.now().toString(),
    createdAt: new Date().toISOString()
  };
  db.bookings.push(newBooking);
  writeDb(db);
  return newBooking;
}

// Services
export function getServices(): Service[] {
  const db = readDb();
  return db.services;
}

export function getServicesByCategory(category: Service['category']): Service[] {
  const db = readDb();
  return db.services.filter(s => s.category === category);
}

// Gallery
export function getGalleryItems(): GalleryItem[] {
  const db = readDb();
  return db.gallery;
}

export function getGalleryItemsByType(type: 'photo' | 'video'): GalleryItem[] {
  const db = readDb();
  return db.gallery.filter(g => g.type === type);
}
