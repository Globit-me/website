import React from 'react'
import { Shield } from "lucide-react"
import GuaranteeItem from './GuaranteeItem'

const guaranteeList = [
    {
        title: 'Protección contra Fraudes',
        description: 'Nuestro sistema de seguridad avanzado protege tus transacciones y datos personales.',
        icon: Shield
    },
    {
        title: 'Aumento de Cotizaciones',
        description: 'Congelamos tus cotizaciones por 24 horas para que puedas realizar tus transacciones con tranquilidad.',
        icon: Shield
    },
    {
        title: '',
        description: 'Tus transacciones están protegidas con la última tecnología en seguridad y encriptación.',
        icon: Shield
    },
]

const GuaranteeList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 place-content-between mt-12'>
    {guaranteeList.map((guarantee, index) => (
        <GuaranteeItem
          key={index}
          Icon={guarantee.icon}
          title={guarantee.title}
          description={guarantee.description}
        />
      ))}
    </div>
  )
}

export default GuaranteeList