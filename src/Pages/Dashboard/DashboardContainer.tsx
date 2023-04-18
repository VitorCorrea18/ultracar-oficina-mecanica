import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import DashboardPresenter from './DashboardPresenter';
import { IService } from '../../Interfaces';

export default function DashboardContainer() {
  const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false);
  const [isNewServiceModalOpen, setIsNewServiceModalOpen] = useState(false);
  const [pendingServices, setPendingServices] = useState<IService[]>([]);
  const { state } = useContext(AppContext);

  const handleNewClientModalOpen = () => {
    setIsNewClientModalOpen(true);
  };

  const handleNewClientModalClose = () => {
    setIsNewServiceModalOpen(false);
  };

  const handleNewServiceModalOpen = () => {
    setIsNewServiceModalOpen(true);
  };

  const handleNewServiceModalClose = () => {
    setIsNewServiceModalOpen(false);
  };

  const handlePendingServiceClick = (userId: number) => {
    const pendingServices = state.services.filter((service: IService) => {
      return service.technicianId === userId && service.status === 'active';
    });
    setPendingServices(pendingServices);
  };
  
  return (
      <DashboardPresenter
        isNewClientModalOpen={isNewClientModalOpen}
        isNewServiceModalOpen={isNewServiceModalOpen}
        services={pendingServices}
        user={state.user}
        handlePendingServiceClick={handlePendingServiceClick}
        openNewClientModal={handleNewClientModalOpen}
        closeNewClientModal={handleNewClientModalClose}
        openNewServiceModal={handleNewServiceModalOpen}
        closeNewServiceModal={handleNewServiceModalClose}
      />
  );
}