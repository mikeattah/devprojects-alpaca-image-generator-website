import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import { AlpacaImage } from './components/molecules';
import { Button } from './components/atoms';
import data from './assets/data/data.json';

function App() {
  const [accessory, setAccessory] = useState(data[0].name);
  const [accessories, setAccessories] = useState(data[0].images[0].path);
  const [backgrounds, setBackgrounds] = useState(data[1].images[0].path);
  const [ears, setEars] = useState(data[2].images[0].path);
  const [eyes, setEyes] = useState(data[3].images[0].path);
  const [hair, setHair] = useState(data[4].images[0].path);
  const [leg, setLeg] = useState(data[5].images[0].path);
  const [mouth, setMouth] = useState(data[6].images[0].path);
  const [neck, setNeck] = useState(data[7].images[0].path);

  /** */
  const generateRandomImage = () => {
    let accessoriesLen = data[0].images.length,
      backgroundsLen = data[1].images.length,
      earsLen = data[2].images.length,
      eyesLen = data[3].images.length,
      hairLen = data[4].images.length,
      legLen = data[5].images.length,
      mouthLen = data[6].images.length,
      neckLen = data[7].images.length;
  };

  /** */
  const handleImageDownload = () => {};

  /** */
  const handleStyleSelection = (accessoryType, stylePath) => {
    switch (accessoryType) {
      case accessories:
        setAccessories(stylePath);
        break;
      case backgrounds:
        setBackgrounds(stylePath);
        break;
      case ears:
        setEars(stylePath);
        break;
      case eyes:
        setEyes(stylePath);
        break;
      case hair:
        setHair(stylePath);
        break;
      case leg:
        setLeg(stylePath);
        break;
      case mouth:
        setMouth(stylePath);
        break;
      case neck:
        setNeck(stylePath);
        break;
      default:
        break;
    }
  };

  return (
    <div className='app-container'>
      <header className='app-header'>
        <h1 className='app-title'>ALPACA GENERATOR</h1>
      </header>
      <main className='app-main'>
        <section className='app-section-left'>
          <AlpacaImage
            accessories={accessories}
            backgrounds={backgrounds}
            ears={ears}
            eyes={eyes}
            hair={hair}
            leg={leg}
            mouth={mouth}
            neck={neck}
          />
          <div className='app-section-left-buttons'>
            <Button name='Random' path='' buttonClick='' buttonType='primary' />
            <Button
              name='Download'
              path=''
              buttonClick=''
              buttonType='primary'
            />
          </div>
        </section>
        <section className='app-section-right'>
          <div className='app-section-right-group'>
            <h2 className='app-sub-title'>ACCESSORIZE THE ALPACA&apos;S</h2>
            <div className='app-section-right-buttons'>
              {data.map(item => (
                <Button
                  key={nanoid()}
                  name={item.name}
                  buttonClick={() => setAccessory(item.name)}
                  buttonType='secondary'
                  buttonState={
                    item.name === accessory ? 'clicked' : 'unclicked'
                  }
                />
              ))}
            </div>
          </div>
          <div className='app-section-right-group'>
            <h2 className='app-sub-title'>STYLE</h2>
            <div className='app-section-right-buttons'>
              {data.map(item => {
                return (
                  item.name === accessory &&
                  item.images.map(element => (
                    <Button
                      key={nanoid()}
                      name={element.name}
                      buttonClick={handleStyleSelection(
                        accessory,
                        element.path
                      )}
                      buttonType='secondary'
                    />
                  ))
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
