export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  qualifications: string[];
}