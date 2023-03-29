import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import { Button } from './components/atoms';
import data from './assets/data/data.json';

function App() {
  const [imageURL, setImageURL] = useState(''),
    [accessory, setAccessory] = useState(data[0].name),
    [accessoriesName, setAccessoriesName] = useState(data[0].images[0].name),
    [accessoriesPath, setAccessoriesPath] = useState(data[0].images[0].path),
    [backgroundsName, setBackgroundsName] = useState(data[1].images[0].name),
    [backgroundsPath, setBackgroundsPath] = useState(data[1].images[0].path),
    [earsName, setEarsName] = useState(data[2].images[0].name),
    [earsPath, setEarsPath] = useState(data[2].images[0].path),
    [eyesName, setEyesName] = useState(data[3].images[0].name),
    [eyesPath, setEyesPath] = useState(data[3].images[0].path),
    [hairName, setHairName] = useState(data[4].images[0].name),
    [hairPath, setHairPath] = useState(data[4].images[0].path),
    [legName, setLegName] = useState(data[5].images[0].name),
    [legPath, setLegPath] = useState(data[5].images[0].path),
    [mouthName, setMouthName] = useState(data[6].images[0].name),
    [mouthPath, setMouthPath] = useState(data[6].images[0].path),
    [neckName, setNeckName] = useState(data[7].images[0].name),
    [neckPath, setNeckPath] = useState(data[7].images[0].path),
    nosePath = './assets/images/nose.png',
    userSelection = {
      Accessories: accessoriesName,
      Backgrounds: backgroundsName,
      Ears: earsName,
      Eyes: eyesName,
      Hair: hairName,
      Leg: legName,
      Mouth: mouthName,
      Neck: neckName,
    };

  // IIFE | Render Alpaca body parts' images on canvas after page load
  // source: https://javascript.plainenglish.io/how-to-download-a-text-image-file-in-javascript-without-a-server-9ccadfbe4694
  useEffect(() => {
    (async () => {
      const canvas = document.getElementById('alpaca-image'),
        context = canvas.getContext('2d');

      // clear canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // modify context settings
      context.globalAlpha = 1.0;
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = 'high';
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowColor = 'rgba(0, 0, 0, 0)';
      context.miterLimit = 10;

      // draw accessories
      const accessoriesImage = new Image();
      accessoriesImage.crossOrigin = 'anonymous';
      accessoriesImage.src = accessoriesPath;
      accessoriesImage.onload = () => {
        context.drawImage(accessoriesImage, 0, 0, 70, 70);
      };

      // draw backgrounds
      const backgroundsImage = new Image();
      backgroundsImage.crossOrigin = 'anonymous';
      backgroundsImage.src = backgroundsPath;
      backgroundsImage.onload = () => {
        context.drawImage(backgroundsImage, 0, 0, canvas.width, canvas.height);
      };

      // draw ears
      const earsImage = new Image();
      earsImage.crossOrigin = 'anonymous';
      earsImage.src = earsPath;
      earsImage.onload = () => {
        context.drawImage(earsImage, 71, 0, 70, 70);
      };

      // draw eyes
      const eyesImage = new Image();
      eyesImage.crossOrigin = 'anonymous';
      eyesImage.src = eyesPath;
      eyesImage.onload = () => {
        context.drawImage(eyesImage, 142, 0, 70, 70);
      };

      // draw hair
      const hairImage = new Image();
      hairImage.crossOrigin = 'anonymous';
      hairImage.src = hairPath;
      hairImage.onload = () => {
        context.drawImage(hairImage, 213, 0, 70, 70);
      };

      // draw leg
      const legImage = new Image();
      legImage.crossOrigin = 'anonymous';
      legImage.src = legPath;
      legImage.onload = () => {
        context.drawImage(legImage, 284, 0, 70, 70);
      };

      // draw mouth
      const mouthImage = new Image();
      mouthImage.crossOrigin = 'anonymous';
      mouthImage.src = mouthPath;
      mouthImage.onload = () => {
        context.drawImage(mouthImage, 0, 71, 70, 70);
      };

      // draw neck
      const neckImage = new Image();
      neckImage.crossOrigin = 'anonymous';
      neckImage.src = neckPath;
      neckImage.onload = () => {
        context.drawImage(neckImage, 71, 71, 70, 70);
      };

      // draw nose
      const noseImage = new Image();
      noseImage.crossOrigin = 'anonymous';
      noseImage.src = nosePath;
      noseImage.onload = () => {
        context.drawImage(noseImage, 142, 71, 70, 70);
      };

      /* Finally, retrieve the encoded image content as a base64 String from canvas object */
      setImageURL(await Promise.resolve(canvas.toDataURL('image/png')));
    })();
  });

  /**
   * Update user selection
   *
   * @param accessory
   * @param selection
   * @return void
   */
  const updateUserSelection = (accessory, selection) => {
    switch (accessory) {
      case 'Accessories':
        userSelection['Accessories'] = selection;
        break;
      case 'Backgrounds':
        userSelection['Backgrounds'] = selection;
        break;
      case 'Ears':
        userSelection['Ears'] = selection;
        break;
      case 'Eyes':
        userSelection['Eyes'] = selection;
        break;
      case 'Hair':
        userSelection['Hair'] = selection;
        break;
      case 'Leg':
        userSelection['Leg'] = selection;
        break;
      case 'Mouth':
        userSelection['Mouth'] = selection;
        break;
      case 'Neck':
        userSelection['Neck'] = selection;
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
      neckLen = data[7].images.length,
      accessoriesIndex = Math.floor(Math.random() * accessoriesLen),
      backgroundsIndex = Math.floor(Math.random() * backgroundsLen),
      earsIndex = Math.floor(Math.random() * earsLen),
      eyesIndex = Math.floor(Math.random() * eyesLen),
      hairIndex = Math.floor(Math.random() * hairLen),
      legIndex = Math.floor(Math.random() * legLen),
      mouthIndex = Math.floor(Math.random() * mouthLen),
      neckIndex = Math.floor(Math.random() * neckLen);

    setAccessoriesName(data[0].images[accessoriesIndex].name);
    setAccessoriesPath(data[0].images[accessoriesIndex].path);
    setBackgroundsName(data[1].images[backgroundsIndex].name);
    setBackgroundsPath(data[1].images[backgroundsIndex].path);
    setEarsName(data[2].images[earsIndex].name);
    setEarsPath(data[2].images[earsIndex].path);
    setEyesName(data[3].images[eyesIndex].name);
    setEyesPath(data[3].images[eyesIndex].path);
    setHairName(data[4].images[hairIndex].name);
    setHairPath(data[4].images[hairIndex].path);
    setLegName(data[5].images[legIndex].name);
    setLegPath(data[5].images[legIndex].path);
    setMouthName(data[6].images[mouthIndex].name);
    setMouthPath(data[6].images[mouthIndex].path);
    setNeckName(data[7].images[neckIndex].name);
    setNeckPath(data[7].images[neckIndex].path);

    updateUserSelection('Accessories', accessoriesName);
    updateUserSelection('Backgrounds', backgroundsName);
    updateUserSelection('Ears', earsName);
    updateUserSelection('Eyes', eyesName);
    updateUserSelection('Hair', hairName);
    updateUserSelection('Leg', legName);
    updateUserSelection('Mouth', mouthName);
    updateUserSelection('Neck', neckName);
  };

  /**
   * Switch accessory style based on user selection
   *
   * @param styleType
   * @param styleName
   * @param stylePath
   * @return void
   */
  const handleStyleSelection = (styleType, styleName, stylePath) => {
    switch (styleType) {
      case 'Accessories':
        updateUserSelection('Accessories', styleName);
        setAccessoriesName(styleName);
        setAccessoriesPath(stylePath);
        break;
      case 'Backgrounds':
        updateUserSelection('Backgrounds', styleName);
        setBackgroundsName(styleName);
        setBackgroundsPath(stylePath);
        break;
      case 'Ears':
        updateUserSelection('Ears', styleName);
        setEarsName(styleName);
        setEarsPath(stylePath);
        break;
      case 'Eyes':
        updateUserSelection('Eyes', styleName);
        setEyesName(styleName);
        setEyesPath(stylePath);
        break;
      case 'Hair':
        updateUserSelection('Hair', styleName);
        setHairName(styleName);
        setHairPath(stylePath);
        break;
      case 'Leg':
        updateUserSelection('Leg', styleName);
        setLegName(styleName);
        setLegPath(stylePath);
        break;
      case 'Mouth':
        updateUserSelection('Mouth', styleName);
        setMouthName(styleName);
        setMouthPath(stylePath);
        break;
      case 'Neck':
        updateUserSelection('Neck', styleName);
        setNeckName(styleName);
        setNeckPath(stylePath);
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
          <canvas
            id='alpaca-image'
            width='360'
            height='400'
            className='app-canvas'
          >
            <img
              src={imageURL}
              alt='Alpaca Image Rendering'
              width='360'
              height='400'
            />
          </canvas>
          <div className='app-section-left-buttons'>
            <Button
              name='Random'
              buttonClick={() => generateRandomImage()}
              buttonDownload=''
              buttonHref=''
              buttonState=''
              buttonType='primary'
            />
            <Button
              name='Download'
              buttonClick=''
              buttonDownload='alpaca-image.png'
              buttonHref={imageURL}
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
                  buttonClick={() => setAccessory(item.name)}
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
                        element.name === userSelection[accessory]
                          ? 'clicked'
                          : 'unclicked'
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
