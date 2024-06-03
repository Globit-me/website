export interface User {
  id: number;
  name: string;
  email: string;
  dni: string;
  dob: string;
  address: string;
  dniImage: string;
  status: 'approved' | 'rejected' | null;
  viewedDate: Date | null;
}
