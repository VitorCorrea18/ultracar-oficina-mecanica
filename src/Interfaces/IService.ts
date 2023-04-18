interface IParts {
  name: string;
  quantity: number;
  untPrice: number;
}

export interface IService {
  id: number;
  clientId: number;
  carId: number;
  detail: {
    description: string;
    price: number;
  };
  parts: IParts[];
  status: string;
  technicianId: number;
  startDate: Date;
  endDate: Date;
}