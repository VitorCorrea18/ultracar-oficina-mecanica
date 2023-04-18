import { IUser } from '../../Interfaces';

type OnButtonOneClick = (() => void) | ((userId: number) => void);

export interface IDashboardCardProps {
  title: string;
  description: string;
  icon: string;
  buttonOneText: string;
  buttonTwoText: string;
  onButtonOneClick: OnButtonOneClick;
  onButtonTwoClick: () => void;
  user: IUser;
}