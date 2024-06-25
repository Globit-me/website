import React from 'react'
import { Shield } from "lucide-react"
import GuaranteeItem from './GuaranteeItem'
import { string } from 'zod'

const guaranteeList = [
    {
        title: 'Protección contra Fraudes',
        description: 'Nuestro sistema de seguridad avanzado protege tus transacciones y datos personales.',
        imageUrl: "/guarantee/panel_seguridad_2.svg",
    },
    {
        title: 'Aumento de Cotizaciones',
        description: 'Congelamos tus cotizaciones por 24 horas para que puedas realizar tus transacciones con tranquilidad.',
        imageUrl: "/guarantee/calculadora.svg",
    },
    {
        title: 'Transacciones Seguras',
        description: 'Tus transacciones están protegidas con la última tecnología en seguridad y encriptación.',
        imageUrl: "/guarantee/notebook.svg"
    },
]

const GuaranteeList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 place-content-between mt-12'>
    {guaranteeList.map((guarantee, index) => (
        <GuaranteeItem
          key={index}
          imageUrl={guarantee.imageUrl}
          title={guarantee.title}
          description={guarantee.description}
        />
      ))}
    </div>
  )
}

export default GuaranteeList