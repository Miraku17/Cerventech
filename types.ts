import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary?: string;
  description?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
}
