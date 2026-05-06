import { 
  Fuel, 
  Truck, 
  ShoppingBag, 
  Ship, 
  HardHat, 
  Zap, 
  Droplets, 
  BarChart3, 
  Settings, 
  Construction, 
  Factory, 
  Anchor,
  ShieldCheck,
  TrendingUp,
  Clock,
  Briefcase
} from 'lucide-react';
import { Service, Industry, Project, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'petroleum-supply',
    title: 'Petroleum Product Supply',
    description: 'Reliable supply of AGO, PMS, DPK, and other essential petroleum products to industrial clients.',
    icon: 'Fuel',
  },
  {
    id: 'logistics',
    title: 'Oil & Gas Logistics',
    description: 'Efficient transportation and supply chain management for energy products across diverse terrains.',
    icon: 'Truck',
  },
  {
    id: 'marine-support',
    title: 'Marine Support Services',
    description: 'Comprehensive maritime solutions including vessel leasing and offshore supply chain support.',
    icon: 'Ship',
  },
  {
    id: 'procurement',
    title: 'Procurement Services',
    description: 'Strategic sourcing of industrial equipment and technical spare parts for energy operations.',
    icon: 'ShoppingBag',
  },
  {
    id: 'engineering',
    title: 'Engineering Support',
    description: 'Technical maintenance and infrastructure support services for refineries and tank farms.',
    icon: 'Settings',
  },
  {
    id: 'consulting',
    title: 'Energy Consulting',
    description: 'Expert advisory on operational efficiency and sustainable energy transition strategies.',
    icon: 'BarChart3',
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Powering production lines with reliable fuel and energy solutions.',
    icon: 'Factory',
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Supporting large-scale infrastructure projects with on-site fuel delivery.',
    icon: 'Construction',
  },
  {
    id: 'marine',
    name: 'Marine',
    description: 'Fueling maritime operations and offshore platforms.',
    icon: 'Anchor',
  },
  {
    id: 'logistics',
    name: 'Logistics',
    description: 'Optimizing supply chains for transportation and fleet management.',
    icon: 'Truck',
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Coastal Vessel Logistics',
    category: 'Marine',
    description: 'Successfully coordinated the delivery of over 50,000 MT of petroleum products via maritime routes.',
    image: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'project-2',
    title: 'Industrial Plant Conversion',
    category: 'Engineering',
    description: 'Retrofitting a major manufacturing facility for dual-fuel operational capability.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'project-3',
    title: 'Regional Supply Network',
    category: 'Supply Chain',
    description: 'Establishing a multi-state distribution network for petroleum lubricants.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Adewale Johnson',
    role: 'Operations Director',
    company: 'Peak Manufacturing Ltd',
    content: 'Olagoal has been our primary fuel partner for 5 years. Their reliability in delivery schedules is unmatched in the industry.',
  },
  {
    id: 't2',
    name: 'Chidi Okoro',
    role: 'Logistics Manager',
    company: 'Global Marine Systems',
    content: 'The technical professionalism and HSE compliance shown by the Olagoal team ensures our maritime operations run smoothly.',
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Uncompromised Safety',
    description: 'Strict adherence to international HSE standards across all operations.',
    icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />,
  },
  {
    title: 'Operational Excellence',
    description: 'Optimized supply chain processes that minimize downtime and maximize efficiency.',
    icon: <TrendingUp className="w-6 h-6 text-brand-orange" />,
  },
  {
    title: 'Strategic Reliability',
    description: 'Consistent delivery even in challenging logistical environments.',
    icon: <Clock className="w-6 h-6 text-brand-orange" />,
  },
  {
    title: 'Technical Competence',
    description: 'Deep engineering expertise supporting complex energy infrastructure.',
    icon: <Briefcase className="w-6 h-6 text-brand-orange" />,
  }
];
