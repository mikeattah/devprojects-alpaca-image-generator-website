import React from 'react';
import './Button.css';

function Button({ name, path, buttonClick, buttonType, buttonState }) {
  let clickedStyle = buttonState === 'clicked' ? 'secondary-button-clicked' : '';
  if (buttonType === 'primary') {
    return (
      <button className='primary-button'>
        { path } { name }
      </button>
    );
  } else {
    return (
      <button className={ `secondary-button ${clickedStyle}` } onClick={ buttonClick }>
        { name }
      </button>
    );
  }
}

export default Button;
