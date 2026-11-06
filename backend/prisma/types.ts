export interface Spec {
  label: string;
  value: string;
}

export interface Camera {
  id: string;
  name: string;
  tagline: string;
  price_per_day: number;
  rating: number;
  rentals: number;
  accent: string;
  images: string[];
  specs: Spec[];
  inclusions: string[];
  booked_dates: string[]; // ISO YYYY-MM-DD
}

export type BookingStatus = "pending" | "confirmed" | "completed" | "cancelled";

export interface BookingCustomer {
  name: string;
  address: string;
  email: string;
  contact: string;
}

export interface Booking {
  id: string;
  camera_id: string;
  camera_name: string;
  customer: BookingCustomer;
  from: string; // ISO date
  to: string; // ISO date
  nights: number;
  total: number;
  status: BookingStatus;
  created_at: string; // ISO timestamp
}

export interface DateRange {
  from: Date | null;
  to: Date | null;
}