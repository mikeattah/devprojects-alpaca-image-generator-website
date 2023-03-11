import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import { AlpacaImage } from './components/molecules';
import { Button } from './components/atoms';
import data from './assets/data/data.json';

function App() {
  const [accessory, setAccessory] = useState(data[0].name);
  const [style, setStyle] = useState(data[0].images[0].path);

  /** */
  const handleAccessoryToggle = () => { };

  /** */
  const handleStyleToggle = () => { };

  return (
    <div className='app-container'>
      <header className='app-header'>
        <h1 className='app-title'>ALPACA GENERATOR</h1>
      </header>
      <main className='app-main'>
        <section className='app-section-left'>
          <AlpacaImage />
          <div className='app-section-left-buttons'>
            <Button name='Random' path='' buttonClick='' buttonType='primary' />
            <Button name='Download' path='' buttonClick='' buttonType='primary' />
          </div>
        </section>
        <section className='app-section-right'>
          <div className='app-section-right-group'>
            <h2 className='app-sub-title'>ACCESSORIZE THE ALPACA&apos;S</h2>
            <div className='app-section-right-buttons'>
              { data.map(item => (
                <Button
                  key={ nanoid() }
                  name={ item.name }
                  buttonClick={ () => setAccessory(item.name) }
                  buttonType='secondary'
                  buttonState={ item.name === accessory ? 'active' : '' }
                />
              )) }
            </div>
          </div>
          <div className='app-section-right-group'>
            <h2 className='app-sub-title'>STYLE</h2>
            <div className='app-section-right-buttons'>
              { data.map(item => {
                return (
                  item.name === accessory &&
                  item.images.map(element => (
                    <Button
                      key={ nanoid() }
                      name={ element.name }
                      buttonClick={ () => setStyle(element.path) }
                      buttonType='secondary'
                    />
                  ))
                );
              }) }
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
