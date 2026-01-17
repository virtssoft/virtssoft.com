
export interface Product {
  id: string;
  name: string;
  description: string;
  price?: string;
  image: string;
  category: string;
  stock: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  message: string;
  avatar: string;
}

export enum NavigationType {
  LINK = 'LINK',
  DROPDOWN = 'DROPDOWN'
}

export interface NavItem {
  label: string;
  href: string;
  type: NavigationType;
  children?: { label: string; href: string }[];
}
