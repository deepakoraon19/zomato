export interface Restaurant {
  index: number;
  city: string;
  state: string;
  zipcode: string;
  address: string;
  locName: string;
  locNumber: string;
  url: string;
  promotion: string | null;
  latitude: number;
  longitude: number;
  isOpen: boolean;
  closedMessage: string;
  deliveryFee: number | null;
  deliveryTime: string | null;
  reviewCount: number | null;
  reviewRating: number | null;
  priceBucket: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  scanDate: string; // ISO 8601 formatted date string
  tid: string;
}
