import { IServiceCardPresenterProps } from './interfaces';

export default function ServiceCardPresenter({
  service,
  car,
  client
}: IServiceCardPresenterProps) {
  const endDate = new Date(service.endDate);

  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{client.name}</h5>
        <h6 className='card-subtitle mb-2 text-muted'>
          {car.brand} {car.model}
        </h6>
        <p className='card-text'>{service.detail.description}</p>
        <p className='card-text'>
          <small className='text-muted'>
            {`Entrega: ${endDate.toDateString()}`}
          </small>
        </p>
      </div>
    </div>
  );
}