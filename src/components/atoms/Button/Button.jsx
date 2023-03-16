import React from 'react';
import './Button.css';

function Button({
  name,
  buttonClick,
  buttonDownload,
  buttonHref,
  buttonState,
  buttonType,
}) {
  let clickedStyle =
    buttonState === 'clicked' ? 'secondary-button-clicked' : '';
  if (buttonType === 'primary') {
    return (
      <button className='primary-button' onClick={buttonClick}>
        {name}
      </button>
    );
  } else if (buttonType === 'link') {
    return (
      <a href={buttonHref} download={buttonDownload} className='primary-button'>
        {name}
      </a>
    );
  }

  return (
    <button
      className={`secondary-button ${clickedStyle}`}
      onClick={buttonClick}
    >
      {name}
    </button>
  );
}

export default Button;
