import { IService, IUser }  from '../../Interfaces/';

export interface IDashBoardPresenterProps {
  user: IUser;
  isNewClientModalOpen: boolean
  isNewServiceModalOpen: boolean
  openNewClientModal: () => void
  openNewServiceModal: () => void
  closeNewClientModal: () => void
  closeNewServiceModal: () => void
  handlePendingServiceClick: (userId: number) => void
  services: IService[];
}