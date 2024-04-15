import {
  AuthContainer,
  LogBtn,
  LogInSvg,
  NavList,
  RegBtn,
  NavLinkMenu,
  NavListMenu,
} from './AuthNav.styled';
import LogIn from '../../assets/log-in-01.svg';
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
          <NavLinkMenu to="/teachers">Teachers</NavLinkMenu>
        </li>
      </NavListMenu>
      <AuthContainer>
        <NavList>
          <li>
            <LogBtn type="button" onClick={onClickLogin}>
              <LogInSvg src={LogIn} alt="Login" />
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
