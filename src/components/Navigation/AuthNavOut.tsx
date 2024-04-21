import { signOut } from 'firebase/auth';
import {
  AuthContainer,
  LogBtn,
  NavList,
  TextItem,
  NavLinkMenu,
  NavListMenu,
} from './AuthNav.styled';
import { auth } from '../../firebase';

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
          <NavLinkMenu to="/psychologists">Psychologists</NavLinkMenu>
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
            </LogBtn>
          </li>
        </NavList>
      </AuthContainer>
    </>
  );
};
