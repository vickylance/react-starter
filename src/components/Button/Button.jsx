import React from 'react';
import ButtonStyled from './Button.style';
import { defaultProps, propTypes } from './Button.props';

const Button = ({ text }) => {
  return <ButtonStyled type="button">{text}</ButtonStyled>;
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
