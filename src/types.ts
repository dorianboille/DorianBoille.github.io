export interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
  stack: string[];
  duration: string;
  year: string;
  link?: string;
  type: 'personal' | 'professional';
}