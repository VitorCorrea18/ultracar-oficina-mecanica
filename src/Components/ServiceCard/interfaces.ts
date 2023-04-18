import { ICar } from '../../Interfaces';
import { IService, IClient } from '../../Interfaces'

export interface IServiceCardPresenterProps {
  service: IService;
  car: ICar;
  client: IClient;
}

export interface IServiceCardContainerProps {
  service: IService;
}
