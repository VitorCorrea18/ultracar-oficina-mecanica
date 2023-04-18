import { IDashBoardPresenterProps } from './interfaces';
import { ServiceCard, NavMenu, DashboardCard } from '../../Components';
import GearIcon from '../../Assets/Icons/GearIcon.svg';
import PersonIcon from '../../Assets/Icons/PersonIcon.svg';

export default function DashBoardPresenter({
  openNewClientModal,
  openNewServiceModal,
  handlePendingServiceClick,
  services,
  user,
}: IDashBoardPresenterProps) {
  return (
    <main className='dashboard-container'>
      <NavMenu
        openNewClientModal={openNewClientModal}
        openNewServiceModal={openNewServiceModal}
        user={user}
      />
      <section className='main-container'>
        <div className='dashboard-welcome'>
          <h1>{`Olá ${user.name}!`}</h1>
          <p>Aqui você pode ver todos os seus serviços e clientes.</p>
        </div>
        <div className='dashboard-card-container'>
          <DashboardCard
            title='Serviços'
            description='Você tem X serviços pendentes.'
            icon={GearIcon}
            buttonOneText='Ver Pendentes'
            buttonTwoText='Cadastar Novo'
            onButtonOneClick={handlePendingServiceClick}
            onButtonTwoClick={openNewServiceModal}
            user={user}
          />
          <DashboardCard
            title='Clientes'
            description='Você tem X clientes cadastrados.'
            icon={PersonIcon}
            buttonOneText='Ver Clientes'
            buttonTwoText='Cadastar Novo'
            onButtonOneClick={openNewClientModal}
            onButtonTwoClick={openNewClientModal}
            user={user}
          />
        </div>
        <div className='dashboard-main-content'>
          {services.length > 0 ? (
            <div className='services-card-container'>
              {services.map((service) => (
                <div key={service.id}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          ) : (
            <div className='dashboard-disclaimer'>
              <span className='dashboard-span-disclaimer'>
                Clique em 'Ver Pendentes'
                no card Serviços para ver todos os serviços em aberto, ou Cadastre um novo Serviço!
              </span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
