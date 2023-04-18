import { useEffect, useState } from 'react';
import { IServiceCardContainerProps } from './interfaces';
import { ICar, IClient } from '../../Interfaces';
import { getCarByServiceId, getClientById } from '../../Api'
import ServiceCardPresenter from './ServiceCardPresenter';

export default function ServiceCardContainer({service}: IServiceCardContainerProps) {
  const [car, setCar] = useState<ICar>();
  const [client, setClient] = useState<IClient>();
  
  useEffect(() => {
    if (service) {
      const fetchClientCar = async () => {
        const car: ICar = await getCarByServiceId(service.carId);
        setCar(car);
        const client: IClient = await getClientById(car.clientId);
        setClient(client)
      };
      fetchClientCar();
    }
  /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  if (!car || !client) {
    return <div>Buscando as informações...</div>;
  }

  return (
    <ServiceCardPresenter
      service={service}
      car={car}
      client={client}
    />
  );
}