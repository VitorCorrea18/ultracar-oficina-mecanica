import { IService, IUser } from '../Interfaces';

export interface IState {
  user: IUser,
  services: IService[];
  allCarBrands: string[];
}

export interface IAppContext {
  state: IState;
  dispatch: React.Dispatch<any>;
}