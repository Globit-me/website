"use server";
import { imageSchema } from "@/schemas";
import { db } from "@/lib/db";

export const verifyDni = async (/* id: string */ data: FormData) => {
  /*  const dniImage = await db.dNIImage.findUnique({
    where: {
      userId: id,
    },
  });

  console.log(dniImage); */

  const file = data.get("file") as unknown as File;

  const validation = imageSchema.safeParse({ file });
  if (!validation.success) {
    console.log("down");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  await db.dNIImage.create({
    data: {
      front: buffer,
      userId: "clx29le7n0000szwfgatff1fc",
    },
  });
};

export const showDni = async () => {
    console.log("hola");
}
