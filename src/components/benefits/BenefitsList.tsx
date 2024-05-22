"use client";

import BenefitItem from './BenefitItem';
import { DollarSign, Clock, Shield, Headphones, Smartphone, Eye } from 'lucide-react';

const benefits = [
  {
    icon: DollarSign,
    title: 'Tasas de Cambio Competitivas',
    description: 'Tasas de cambio sumamente competitivas para que obtengas el máximo valor por tu dinero.'
  },
  {
    icon: Clock,
    title: 'Rapidez en las Transacciones',
    description: 'Completa tus transacciones rápido y sencillo con nuestro proceso simplificado y eficiente.'
  },
  {
    icon: Shield,
    title: 'Seguridad y Confianza',
    description: 'Tus datos y transacciones están protegidos con la última tecnología en seguridad y encriptación.'
  },
  {
    icon: Headphones,
    title: 'Soporte al Cliente',
    description: 'Nuestro equipo de soporte está disponible para asistirte con cualquier consulta o problema.'
  },
  {
    icon: Smartphone,
    title: 'Plataforma Intuitiva',
    description: 'Nuestra plataforma es fácil de usar y accesible desde cualquier dispositivo.'
  },
  {
    icon: Eye,
    title: 'Transparencia en las Tarifas',
    description: 'Te mostramos todas las tarifas de manera clara antes de que realices cualquier transacción.'
  }
];

const BenefitsList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-between mt-12">
      {benefits.map((benefit, index) => (
        <BenefitItem
          key={index}
          icon={benefit.icon}
          title={benefit.title}
          description={benefit.description}
        />
      ))}
    </div>
  );
};

export default BenefitsList;
