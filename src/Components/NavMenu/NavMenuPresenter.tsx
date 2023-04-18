import { INavMenuPresenterProps } from './interfaces';
import HeaderLogo from '../../Assets/Images/HeaderLogo.png';
import LogoutIcon from '../../Assets/Icons/LogoutIcon.svg';
import UserIcon from '../../Assets/Icons/UserIcon.svg'

export default function NavMenuPresenter({
  openNewClientModal,
  openNewServiceModal,
  user,
}: INavMenuPresenterProps) {
  return (
    <nav className='menu-container'>
      <div className='nav-logo-container'>
        <img src={HeaderLogo} alt='Logo' className='logo' />
      </div>
      <div>
      <ul className='nav'>
        <li className='nav-item'>
          <span
            className='nav-span-btn'
          >
            Buscar Cliente
          </span>
        </li>
        <li className='nav-item'>
          <span
            className='nav-span-btn'
            onClick={openNewClientModal}
          >
            Novo Cliente
          </span>
        </li>
        <li className='nav-item'>
          <span
            className='nav-span-btn'
            onClick={openNewServiceModal}
          >
            Novo Serviço
          </span>
        </li>
      </ul>
      </div>
      <div className='nav-footer'>
        <span
          className='nav-user-name'
        >
          <img src={UserIcon} alt='User' className='user-icon' />
          {user.name}
        </span>
        <span className='logout-btn'>
          Logout
          <img src={LogoutIcon} alt='Logout' className='logout-icon' />
        </span>
      </div>
    </nav>
  );
}