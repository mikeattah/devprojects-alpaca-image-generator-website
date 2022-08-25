// import React from 'react';
import './ButtonTwo.css';

function ButtonTwo(props) {
  const { name, buttonClick } = props;
  return (
    <button className='button-two' onClick={buttonClick}>
      {name}
    </button>
  );
}

export default ButtonTwo;
