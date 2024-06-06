"use client";

import FileUploadField from "@/components/profile/FileUploadField";
import InputField from "@/components/profile/InputField";
import { updateProfile } from "@/actions/profile";

const ProfilePage = () => {
  const handleProfileUpdate = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    await updateProfile(formData);

    form.reset();
  };

  return (
    <section className="max-w-6xl md:mx-auto mt-32 md:mt-56 mb-56 mx-6">
      <form onSubmit={handleProfileUpdate} className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-custom-blue mb-6 md:mb-14 text-center">
          Completar Perfil
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <InputField
              id="dni"
              name="dni"
              type="text"
              label="DNI"
              placeholder="* 43767898"
            />
            <InputField
              id="birthday"
              name="birthday"
              type="date"
              label="Fecha de nacimiento"
              placeholder="* 12/12/1990"
            />
            <InputField
              id="country"
              name="country"
              type="text"
              label="País"
              placeholder="* Argentina"
            />
            <InputField
              id="province"
              name="province"
              type="text"
              label="Provincia"
              placeholder="* Buenos Aires"
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:col-span-2">
              <InputField
                id="address"
                name="address"
                type="text"
                label="Dirección"
                placeholder="* Av. Corrientes"
                className="md:col-span-2"
              />
              <InputField
                id="addressNumber"
                name="addressNumber"
                type="text"
                label="Número"
                placeholder="* 1234"
                className="md:col-span-1"
              />
              <InputField
                id="apartment"
                name="apartment"
                type="text"
                label="Departamento"
                placeholder="3A"
                className="md:col-span-1"
                required={false}
              />
            </div>
          </div>
          <div className="space-y-6">
            <FileUploadField
              id="dniFront"
              name="dniFront"
              placeholder="Suba la foto del DNI (frente)"
            />
            <FileUploadField
              id="dniBack"
              name="dniBack"
              placeholder="Suba la foto del DNI (reverso)"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-custom-blue text-white py-4 px-6 rounded-md hover:bg-custom-blue-dark transition duration-300 w-full mt-6"
        >
          Actualizar Perfil
        </button>
      </form>
    </section>
  );
};

export default ProfilePage;
