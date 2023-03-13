import React from 'react';
import './Button.css';

function Button({ name, buttonClick, buttonType, buttonState }) {
  let clickedStyle =
    buttonState === 'clicked' ? 'secondary-button-clicked' : '';
  if (buttonType === 'primary') {
    return <button className='primary-button'>{name}</button>;
  } else {
    return (
      <button
        className={`secondary-button ${clickedStyle}`}
        onClick={buttonClick}
      >
        {name}
      </button>
    );
  }
}

export default Button;
