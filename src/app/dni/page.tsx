"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FileUploadField from "@/components/profile/FileUploadField";
import InputField from "@/components/profile/InputField";
import DropdownField from "@/components/profile/DropdownField";
import { updateProfile } from "@/actions/profile";
import { profileSchema } from "@/schemas";
import { z } from "zod";
import toast from "react-hot-toast";

const ProfilePage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof profileSchema>>({
    resolver: zodResolver(profileSchema),
  });

  const handleProfileUpdate = async (data: z.infer<typeof profileSchema>) => {
    const {
      dni,
      birthday,
      country,
      province,
      address,
      addressNumber,
      apartment,
      dniFront,
      dniBack,
    } = data;

    const formData = new FormData();
    formData.append("dni", dni);
    formData.append("birthday", birthday.toString());
    formData.append("country", country);
    formData.append("province", province);
    formData.append("address", address);
    formData.append("addressNumber", addressNumber);
    if (apartment) formData.append("apartment", apartment);
    formData.append("dniFront", dniFront[0]);
    formData.append("dniBack", dniBack[0]);

    await updateProfile(formData);
    reset();

    toast.success("Perfil actualizado correctamente");

    setTimeout(() => {
      window.location.href = "/profile";
    }, 2000);
  };

  const countries = ["Argentina"];
  const provinces = ["Buenos Aires", "Córdoba", "Santa Fe"];

  return (
    <section className="max-w-6xl md:mx-auto mt-32 md:mt-56 mb-56 mx-6">
      <form onSubmit={handleSubmit(handleProfileUpdate)} className="w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-custom-blue mb-6 md:mb-14 text-center">
          Completar perfil
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <InputField
              id="dni"
              name="dni"
              type="text"
              label="DNI"
              placeholder="* 43767898"
              register={register("dni")}
              error={errors.dni?.message as string}
            />
            <InputField
              id="birthday"
              name="birthday"
              type="date"
              label="Fecha de nacimiento"
              register={register("birthday")}
              error={errors.birthday?.message as string}
            />
            <DropdownField
              id="country"
              name="country"
              label="País"
              options={countries}
              register={register("country")}
              error={errors.country?.message as string}
            />
            <DropdownField
              id="province"
              name="province"
              label="Provincia"
              options={provinces}
              register={register("province")}
              error={errors.province?.message as string}
            />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:col-span-2">
              <InputField
                id="address"
                name="address"
                type="text"
                label="Dirección"
                placeholder="* Av. Corrientes"
                register={register("address")}
                error={errors.address?.message as string}
                className="md:col-span-2"
              />
              <InputField
                id="addressNumber"
                name="addressNumber"
                type="text"
                label="Número"
                placeholder="* 1234"
                register={register("addressNumber")}
                error={errors.addressNumber?.message as string}
                className="md:col-span-1"
              />
              <InputField
                id="apartment"
                name="apartment"
                type="text"
                label="Departamento"
                placeholder="3A"
                register={register("apartment")}
                error={errors.apartment?.message as string}
                className="md:col-span-1"
              />
            </div>
          </div>
          <div className="space-y-6">
            <FileUploadField
              id="dniFront"
              name="dniFront"
              placeholder="Suba la foto del DNI (frente)"
              register={register("dniFront")}
              error={errors.dniFront?.message as string}
            />
            <FileUploadField
              id="dniBack"
              name="dniBack"
              placeholder="Suba la foto del DNI (reverso)"
              register={register("dniBack")}
              error={errors.dniBack?.message as string}
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
