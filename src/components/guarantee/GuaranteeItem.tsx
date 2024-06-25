import Image from "next/image";

type guaranteeItemProps = {
    title: string;
    description: string;
    imageUrl: string;
};

import React from 'react'

const GuaranteeItem = ({ title, description, imageUrl }: guaranteeItemProps) => {
  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
        <Image 
          src={imageUrl}
          alt=""
          width={200}
          height={200}
        />
        <h3 className="text-custom-black font-bold text-lg mt-4">{title}</h3>
        <p className="text-custom-black text-center mt-2">{description}</p>
    </div>
  )
}

export default GuaranteeItem