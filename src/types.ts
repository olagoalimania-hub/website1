export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  longDescription?: string;
  features?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  stats?: { label: string; value: string }[];
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}
