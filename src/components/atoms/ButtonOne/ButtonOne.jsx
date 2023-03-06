import React from 'react';
import './ButtonOne.css';

function ButtonOne(props) {
  const { name, path } = props;
  return (
    <button className='button-one-container'>
      {path} {name}
    </button>
  );
}

export default ButtonOne;
