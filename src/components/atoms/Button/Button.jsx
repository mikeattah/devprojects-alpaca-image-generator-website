import React from 'react';
import './Button.css';

function Button({ name, path, buttonClick, buttonType, buttonState }) {
  let activeStyle = buttonState === 'active' ? 'secondary-button-active' : '';
  if (buttonType === 'primary') {
    return (
      <button className='primary-button'>
        { path } { name }
      </button>
    );
  } else {
    return (
      <button className={ `secondary-button ${activeStyle}` } onClick={ buttonClick }>
        { name }
      </button>
    );
  }
}

export default Button;
