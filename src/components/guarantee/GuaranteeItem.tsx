import { LucideIcon } from "lucide-react";

type guaranteeItemProps = {
    title: string;
    description: string;
    Icon: LucideIcon
};

import React from 'react'

const GuaranteeItem = ({ title, description, Icon }: guaranteeItemProps) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
        <Icon className="mx-auto mb-3 md:mb-4 h-8 w-8 md:h-10 md:w-10 text-custom-blue" />
        <h3 className="text-custom-black font-bold text-lg mt-4">{title}</h3>
        <p className="text-custom-black text-center mt-2">{description}</p>
    </div>
  )
}

export default GuaranteeItem