import { IDashBoardPresenterProps } from './interfaces';
import { ServiceCard } from '../../Components';

export default function DashBoardPresenter({
  openNewClientModal,
  openNewServiceModal,
  services,
}: IDashBoardPresenterProps) {
  return (
    <main className='dashboard-page-main'>
      <div className='container'>
        <h1 className='dashboard-page-title'>Dashboard</h1>
        <div className='row'>
          <div className='col-md-6'>
            <button
              className='btn btn-primary mb-3'
              onClick={openNewClientModal}
            >
              Add Client
            </button>
          </div>
          <div className='col-md-6'>
            <button
              className='btn btn-primary mb-3'
              onClick={openNewServiceModal}
            >
              Add Service
            </button>
          </div>
        </div>
        {services.length > 0 ? (
          <div className='row'>
            {services.map((service) => (
              <div className='col-md-4' key={service.id}>
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        ) : (
          <div>Buscando as informações...</div>
        )}
      </div>
    </main>
  );
}

