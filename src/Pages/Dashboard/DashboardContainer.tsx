import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import DashboardPresenter from './DashboardPresenter';

export default function DashboardContainer() {
  const [isNewClientModalOpen, setIsNewClientModalOpen] = useState(false);
  const [isNewServiceModalOpen, setIsNewServiceModalOpen] = useState(false);
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
  
  return (
      <DashboardPresenter
        isNewClientModalOpen={isNewClientModalOpen}
        isNewServiceModalOpen={isNewServiceModalOpen}
        services={state.services}
        openNewClientModal={handleNewClientModalOpen}
        closeNewClientModal={handleNewClientModalClose}
        openNewServiceModal={handleNewServiceModalOpen}
        closeNewServiceModal={handleNewServiceModalClose}
      />
  );
}