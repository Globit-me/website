"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function SectionFAQs() {
  return (
    <section className="my-24 mx-6 md:my-40 md:mx-0">
      <h2 className="text-2xl md:text-3xl font-bold text-custom-blue mb-4 text-center">
        Preguntas Frecuentes
      </h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-semibold">
            ¿Qué es Globit?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Globit facilita el intercambio de saldo en USD y ARS de manera
            segura y rápida, con una excelente cotización.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-semibold">
            ¿Debo registrarme para operar?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Sí, es necesario registrarse para realizar operaciones en nuestra
            plataforma.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-semibold">
            ¿Hay soporte al cliente?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Sí, ofrecemos soporte a través de correo electrónico y teléfono.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-semibold">
            ¿Puedo transferir a cuentas de terceros?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            No, solo transferimos fondos a cuentas registradas a nombre del
            titular.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-semibold">
            ¿Informan las operaciones a la AFIP?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            No informamos tus movimientos a la AFIP. Tú eres responsable de
            reportar las obligaciones impositivas generadas en la plataforma.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg font-semibold">
            ¿Por qué piden documentación?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Solicitamos documentación para cumplir con regulaciones y garantizar
            la seguridad de las transacciones.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-lg font-semibold">
            ¿Dónde veo mi historial?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Puedes ver el historial de tus transacciones en tu perfil, bajo la
            sección &quot;Historial&quot;.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-lg font-semibold">
            ¿Qué comisiones aplican?
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            Nuestras comisiones varían según el monto de la operación y el tipo
            de transacción.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
