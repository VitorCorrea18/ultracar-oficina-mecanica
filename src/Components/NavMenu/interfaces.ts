import { IUser } from '../../Interfaces';

export interface INavMenuPresenterProps {
  user: IUser;
  openNewClientModal: () => void;
  openNewServiceModal: () => void;
}

export interface INavMenuContainerProps {
  user: IUser;
  openNewClientModal: () => void;
  openNewServiceModal: () => void;
}