import NavMenuPresenter from './NavMenuPresenter';
import { INavMenuContainerProps } from './interfaces';

export default function NavMenuContainer({
  openNewClientModal,
  openNewServiceModal,
  user,
}: INavMenuContainerProps) {
  return (
    <NavMenuPresenter
      user={user}
      openNewClientModal={openNewClientModal}
      openNewServiceModal={openNewServiceModal}
    />
  );
}