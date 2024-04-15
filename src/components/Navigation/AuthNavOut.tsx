import { signOut } from 'firebase/auth';
import {
  AuthContainer,
  LogBtn,
  NavList,
  TextItem,
  NavLinkMenu,
  NavListMenu,
  LogOutSvg,
} from './AuthNav.styled';
import { auth } from '../../firebase';
import LogOut from '../../assets/log-out.svg?url';

export const AuthNavOut: React.FC = () => {
  const currentUser = auth.currentUser;

  const handleLogOUt = () => {
    signOut(auth);
  };

  return (
    <>
      <NavListMenu>
        <li>
          <NavLinkMenu to="/">Home</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu to="/teachers">Teachers</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu to="/favorites">Favorites</NavLinkMenu>
        </li>
      </NavListMenu>
      <AuthContainer>
        <NavList>
          <TextItem>{currentUser?.displayName ?? 'User'}</TextItem>
          <li>
            <LogBtn onClick={handleLogOUt}>
              Log out
              <LogOutSvg src={LogOut} alt="LogOut" />
            </LogBtn>
          </li>
        </NavList>
      </AuthContainer>
    </>
  );
};
