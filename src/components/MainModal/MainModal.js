import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

import {
  Overlay,
  ModalWindow,
  BtnCloseModal,
  ImgClose,
} from './MainModal.styled';

const modalRoot = document.querySelector('#modal-root');

export function MainModal({ onClose, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <ThemeProvider theme={theme}>
      <Overlay onClick={handleBackdropClick}>
        <ModalWindow>
          <BtnCloseModal type="button" onClick={onClose}>
            <ImgClose />
          </BtnCloseModal>
          {children}
        </ModalWindow>
      </Overlay>
    </ThemeProvider>,
    modalRoot
  );
}
