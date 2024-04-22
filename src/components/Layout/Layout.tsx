import { Suspense, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  HeaderContainer,
  LayoutWrap,
  Line,
  NavLinkLogo,
  NavList,
} from './Layout.styled';

import { Toaster } from 'react-hot-toast';
import { Modal } from '../Modal/Modal';
import { Navigation } from '../Navigation/Navigation';
import { Login } from '../Auth/Login';
import { Register } from '../Auth/Register';
import { LayoutProps } from '../../redux/types';
import { Lang } from '../../pages/HomePage/HomePage.styled';

export const Layout: React.FC<LayoutProps> = ({ authUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };

  function onClickLogin() {
    setRegisterModal(false);
    setLoginModal(true);
    toggleModal();
  }
  function onClickRegister() {
    setLoginModal(false);
    setRegisterModal(true);
    toggleModal();
  }

  const close = () => {
    setIsOpen(false);
  };

  return (
    <LayoutWrap>
      <HeaderContainer>
        <NavList>
          <li>
            <NavLink to="/">
            </NavLink>
          </li>
          <li>
            <NavLinkLogo to="/"><Lang>psychologists.</Lang>services</NavLinkLogo>
          </li>
        </NavList>
        <Navigation
          authUser={authUser}
          onClickLogin={onClickLogin}
          onClickRegister={onClickRegister}
        />
      </HeaderContainer>
      <Line></Line>
      <Suspense>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />

      {isOpen && (
        <Modal toggleModal={toggleModal}>
          {loginModal && <Login close={close} />}
          {registerModal && (
            <Register close={close} name={''} email={''} password={''} />
          )}
        </Modal>
      )}
    </LayoutWrap>
  );
};
