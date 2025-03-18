export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export interface ProjectInfo {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
}

export interface TestimonialInfo {
  id: number;
  content: string;
  author: string;
  position: string;
  image: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
