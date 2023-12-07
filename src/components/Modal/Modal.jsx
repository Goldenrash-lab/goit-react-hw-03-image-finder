import React from 'react';
import { Overlay, ModalWindow } from './Modal.styled';

export const Modal = ({ url, close }) => {
  return (
    <Overlay onClick={close}>
      <ModalWindow>
        <img src={url} alt="#" />
      </ModalWindow>
    </Overlay>
  );
};
