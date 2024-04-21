import {
  AuthContainer,
  LogBtn,
  NavList,
  RegBtn,
  NavLinkMenu,
  NavListMenu,
} from './AuthNav.styled';
import { AuthNavInProps } from '../../redux/types';

export const AuthNavIn: React.FC<AuthNavInProps> = ({
  onClickLogin,
  onClickRegister,
}) => {
  return (
    <>
      <NavListMenu>
        <li>
          <NavLinkMenu to="/">Home</NavLinkMenu>
        </li>
        <li>
          <NavLinkMenu to="/psychologists">Psychologists</NavLinkMenu>
        </li>
      </NavListMenu>
      <AuthContainer>
        <NavList>
          <li>
            <LogBtn type="button" onClick={onClickLogin}>
              Log in
            </LogBtn>
          </li>
          <li>
            <RegBtn type="button" onClick={onClickRegister}>
              Registration
            </RegBtn>
          </li>
        </NavList>
      </AuthContainer>
    </>
  );
};
