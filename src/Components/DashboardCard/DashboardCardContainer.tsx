import { IDashboardCardProps } from './interfaces';
import DashboardCardPresenter from './DashboardCardPresenter';

export default function DashBoardCardContainer({
  title,
  description,
  icon,
  buttonOneText,
  buttonTwoText,
  onButtonOneClick,
  onButtonTwoClick,
  user
}: IDashboardCardProps) {


  return (
    <DashboardCardPresenter
      title={title}
      description={description}
      icon={icon}
      buttonOneText={buttonOneText}
      buttonTwoText={buttonTwoText}
      onButtonOneClick={onButtonOneClick}
      onButtonTwoClick={onButtonTwoClick}
      user={user}
    />
  );
}
