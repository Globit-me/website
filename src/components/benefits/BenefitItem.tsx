import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface BenefitItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon: Icon, title, description }) => {
  return (
    <motion.article
      className="benefit-item text-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true, amount: 0.5 }}
      
    >
      <Icon className="mx-auto mb-3 md:mb-4 h-8 w-8 md:h-10 md:w-10 text-custom-blue" />
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </motion.article>
  );
};

export default BenefitItem;
