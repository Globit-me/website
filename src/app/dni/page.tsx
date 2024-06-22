import { showProfile } from "@/actions/profile";
import DniForm from "@/components/dni/DniForm";

const DniPage: React.FC = async () => {
  const countries = ["Argentina"];
  const provinces = [
    "Buenos Aires",
    "Córdoba",
    "Santa Fe",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán",
  ];

  const currentUser = await showProfile();

  return (
    <section className="max-w-6xl md:mx-auto mt-32 md:mt-56 mb-56 mx-6">
      <h2 className="text-2xl md:text-3xl font-bold text-custom-blue mb-6 md:mb-14 text-center">
        Datos necesarios
      </h2>
      <DniForm countries={countries} provinces={provinces} status={currentUser.status}/>
    </section>
  );
};

export default DniPage;
