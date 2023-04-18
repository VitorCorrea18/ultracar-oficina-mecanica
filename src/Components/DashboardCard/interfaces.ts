export interface IDashboardCardProps {
  title: string;
  description: string;
  icon: string;
  buttonOneText: string;
  buttonTwoText: string;
  onButtonOneClick: () => void;
  onButtonTwoClick: () => void;
}