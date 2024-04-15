import React from 'react';
import { createPortal } from 'react-dom';
import { BtnClose, CloseBtnSvg, ModalContainer, OverLay } from './Modal.styled';
import { useEffect } from 'react';
import CloseSvg from '../../assets/icons/x-close.svg';
import { ModalProps } from '../../redux/types';

const modalElement = document.getElementById('portal');

export const Modal: React.FC<ModalProps> = ({ children, toggleModal }) => {
  const onClickBackdrop = e => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  useEffect(() => {
    const onEscapeClick = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
    const body = document.querySelector('body');
    if (body) {
      body.style.position = 'fixed';
      window.addEventListener('keydown', onEscapeClick);

      return () => {
        body.style.position = '';
        window.removeEventListener('keydown', onEscapeClick);
      };
    }
  }, [toggleModal]);

  return createPortal(
    <OverLay onMouseDown={onClickBackdrop}>
      <ModalContainer>
        <BtnClose onClick={toggleModal} type="button">
          <CloseBtnSvg src={CloseSvg} alt="Close" />
        </BtnClose>
        {children}
      </ModalContainer>
    </OverLay>,
    modalElement ? modalElement : document.body
  );
};
