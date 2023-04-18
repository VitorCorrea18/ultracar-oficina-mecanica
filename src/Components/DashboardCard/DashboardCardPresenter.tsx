import { IDashboardCardProps } from './interfaces';
import { PrimaryButton } from '../PrimaryButton';

export default function DashboardCardPresenter(props: IDashboardCardProps) {
  const {
    title,
    description,
    icon,
    onButtonOneClick,
    onButtonTwoClick,
    buttonOneText,
    buttonTwoText,
    user,
  } = props;
  return (
    <div className='card'>
      <h2 className='card-title'>{title}</h2>
      <div className='card-icon'>
        <img src={icon} alt='icon' className='icon' />
      </div>
      <div className='card-description'>{description}</div>
      <div className='card-button-container'>
        <PrimaryButton
          text={buttonOneText}
          onClick={() => onButtonOneClick(user.id)}
          type={'button'}
          className='btn-sm'
        />
        <PrimaryButton
          text={buttonTwoText}
          onClick={onButtonTwoClick}
          type={'button'}
          className='btn-sm'
        />
      </div>
    </div>
  );
}
