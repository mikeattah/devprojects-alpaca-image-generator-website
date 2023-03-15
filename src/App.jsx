import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import { AlpacaImage } from './components/molecules';
import { Button } from './components/atoms';
import data from './assets/data/data.json';

function App() {
  const [image, setImage] = useState('');
  const [accessory, setAccessory] = useState(data[0].name);
  const [style, setStyle] = useState(data[0].images[0].name);
  const [accessories, setAccessories] = useState(data[0].images[0].path);
  const [backgrounds, setBackgrounds] = useState(data[1].images[0].path);
  const [ears, setEars] = useState(data[2].images[0].path);
  const [eyes, setEyes] = useState(data[3].images[0].path);
  const [hair, setHair] = useState(data[4].images[0].path);
  const [leg, setLeg] = useState(data[5].images[0].path);
  const [mouth, setMouth] = useState(data[6].images[0].path);
  const [neck, setNeck] = useState(data[7].images[0].path);
  const nose = './assets/images/nose.png';

  /**
   * Set Image URL for file download
   *
   * @return void
   */
  const handleSetImage = image => setImage(image);

  /**
   * Set accessory and style
   *
   * @return void
   */
  const handleSetAccessory = accessory => {
    setAccessory(accessory);
    switch (accessory) {
      case accessories:
        setStyle(data[0].images[0].name);
        break;
      case backgrounds:
        setStyle(data[1].images[0].name);
        break;
      case ears:
        setStyle(data[2].images[0].name);
        break;
      case eyes:
        setStyle(data[3].images[0].name);
        break;
      case hair:
        setStyle(data[4].images[0].name);
        break;
      case leg:
        setStyle(data[5].images[0].name);
        break;
      case mouth:
        setStyle(data[6].images[0].name);
        break;
      case neck:
        setStyle(data[7].images[0].name);
        break;
      default:
        break;
    }
  };

  /**
   * Generate Alpaca Image from random selection of body parts
   *
   * @return void
   */
  const generateRandomImage = () => {
    const accessoriesLen = data[0].images.length,
      backgroundsLen = data[1].images.length,
      earsLen = data[2].images.length,
      eyesLen = data[3].images.length,
      hairLen = data[4].images.length,
      legLen = data[5].images.length,
      mouthLen = data[6].images.length,
      neckLen = data[7].images.length;

    const accessoriesIndex = Math.floor(Math.random() * accessoriesLen),
      backgroundsIndex = Math.floor(Math.random() * backgroundsLen),
      earsIndex = Math.floor(Math.random() * earsLen),
      eyesIndex = Math.floor(Math.random() * eyesLen),
      hairIndex = Math.floor(Math.random() * hairLen),
      legIndex = Math.floor(Math.random() * legLen),
      mouthIndex = Math.floor(Math.random() * mouthLen),
      neckIndex = Math.floor(Math.random() * neckLen);

    setAccessories(data[0].images[accessoriesIndex].path);
    setBackgrounds(data[1].images[backgroundsIndex].path);
    setEars(data[2].images[earsIndex].path);
    setEyes(data[3].images[eyesIndex].path);
    setHair(data[4].images[hairIndex].path);
    setLeg(data[5].images[legIndex].path);
    setMouth(data[6].images[mouthIndex].path);
    setNeck(data[7].images[neckIndex].path);
  };

  /**
   * Switch accessory style based on user selection
   *
   * @param accessoryType
   * @param styleName
   * @param stylePath
   * @return void
   */
  const handleStyleSelection = (accessoryType, styleName, stylePath) => {
    setStyle(styleName);
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

  /**
   * Download Alpaca Image to user's computer
   *
   * @return void
   *
   * source: https://javascript.plainenglish.io/how-to-download-a-text-image-file-in-javascript-without-a-server-9ccadfbe4694
   */
  // const handleImageDownload = async () => {};

  return (
    <div className='app-container'>
      <header className='app-header'>
        <h1 className='app-title'>ALPACA GENERATOR</h1>
      </header>
      <main className='app-main'>
        <section className='app-section-left'>
          <canvas id='alpaca-image' className='app-alpaca-image-container'>
            <AlpacaImage
              accessories={accessories}
              backgrounds={backgrounds}
              ears={ears}
              eyes={eyes}
              hair={hair}
              leg={leg}
              mouth={mouth}
              neck={neck}
              nose={nose}
              handleSetImage={handleSetImage}
            />
          </canvas>
          <div className='app-section-left-buttons'>
            <Button
              name='Random'
              buttonClick={generateRandomImage}
              buttonDownload=''
              buttonHref=''
              buttonState=''
              buttonType='primary'
            />
            <Button
              name='Download'
              buttonClick=''
              buttonDownload='alpaca-image.png'
              buttonHref={image}
              buttonState=''
              buttonType='link'
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
                  buttonClick={() => handleSetAccessory(item.name)}
                  buttonDownload=''
                  buttonHref=''
                  buttonState={
                    item.name === accessory ? 'clicked' : 'unclicked'
                  }
                  buttonType='secondary'
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
                      buttonClick={() =>
                        handleStyleSelection(
                          accessory,
                          element.name,
                          element.path
                        )
                      }
                      buttonDownload=''
                      buttonHref=''
                      buttonState={
                        element.name === style ? 'clicked' : 'unclicked'
                      }
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
