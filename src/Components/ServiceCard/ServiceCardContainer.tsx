import { useEffect, useState } from 'react';
import { IServiceCardContainerProps } from './interfaces';
import { ICar } from '../../Interfaces';
import { getCarByServiceId } from '../../Api'
import ServiceCardPresenter from './ServiceCardPresenter';

export default function ServiceCardContainer({service}: IServiceCardContainerProps) {
  const [car, setCar] = useState<ICar>();
  
  useEffect(() => {
    if (service) {
      const fetchCar = async () => {
        const car: ICar = await getCarByServiceId(service.carId);
        setCar(car);
      };
      fetchCar();
    }
  /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  if (!car) {
    return <div>Buscando as informações...</div>;
  }

  return (
    <ServiceCardPresenter
      service={service}
      car={car}
    />
  );
}