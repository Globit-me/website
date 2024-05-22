import BenefitsList from "./BenefitsList";

const BenefitsSection = () => {
  return (
    <section className="my-8 mx-6 md:my-16 md:mx-0">
      <div className="mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-custom-blue">
          ¿Por qué elegir Globit?
        </h2>
        <p className="text-sm md:text-base mt-3 md:mt-4 text-gray-600">
          En Globit, nos esforzamos por ofrecer el mejor servicio de intercambio
          de divisas en Latinoamérica.
        </p>
        <BenefitsList />
      </div>
    </section>
  );
};

export default BenefitsSection;
