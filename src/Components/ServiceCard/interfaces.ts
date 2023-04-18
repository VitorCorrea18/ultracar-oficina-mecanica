import { ICar } from '../../Interfaces';
import { IService } from '../../Interfaces'

export interface IServiceCardPresenterProps {
  service: IService;
  car: ICar;
}

export interface IServiceCardContainerProps {
  service: IService;
}
