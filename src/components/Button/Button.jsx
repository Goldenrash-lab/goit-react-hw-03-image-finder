import React from 'react';
import { ButtonStyled } from './Button.styled';

export const Button = ({ page, getPage }) => {
  const incrementPage = () => {
    getPage((page += 1));
  };

  return <ButtonStyled onClick={incrementPage}>Load more</ButtonStyled>;
};
