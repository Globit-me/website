export interface Order {
  id: number;
  clientName: string;
  status: 'Abierta' | 'Cerrada' | 'Rechazada';
  clientDNI: string;
  clientDOB: string;
  clientAddress: string;
  clientImage: string;
  closedDate: Date | null;
}
