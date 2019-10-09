import React from 'react';
import ButtonStyled from './Button.style';
import { defaultProps, propTypes } from './Button.props';

const Button = ({ text }) => {
  return (
    <div>
      <button type="button">{text}</button>
    </div>
  );
};

Button.defaultProps = defaultProps;
Button.propTypes = propTypes;

export default Button;
