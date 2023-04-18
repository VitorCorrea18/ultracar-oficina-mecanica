import { IService }  from '../../Interfaces/';

export interface IDashBoardPresenterProps {
  isNewClientModalOpen: boolean
  isNewServiceModalOpen: boolean
  openNewClientModal: () => void
  openNewServiceModal: () => void
  closeNewClientModal: () => void
  closeNewServiceModal: () => void
  services: IService[]; // <--- This is a global interface located at /src/Interfaces/
}