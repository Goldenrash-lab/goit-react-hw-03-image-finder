import React from 'react';
import { ButtonStyled } from './Button.styled';

export const Button = ({ getPage }) => {
  const incrementPage = () => {
    getPage();
  };

  return <ButtonStyled onClick={incrementPage}>Load more</ButtonStyled>;
};
