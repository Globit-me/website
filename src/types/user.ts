export type User = {
  id: string | null;
  name: string | null;
  email: string;
  emailVerified: Date | null;
  dni: string | null;
  password: string | null;
  dob: Date | null;
  country: string | null;
  province: string | null;
  address: string | null;
  addressNumber: string | null;
  apartment: string | null;
  status: string | null;
  viewedDate: Date | null;
};
