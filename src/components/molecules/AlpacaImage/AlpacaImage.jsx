// import React from 'react';
import './AlpacaImage.css';

function AlpacaImage({
  accessoriesPath,
  backgroundsPath,
  earsPath,
  eyesPath,
  hairPath,
  legPath,
  mouthPath,
  neckPath,
  nosePath,
  setImageURL,
}) {
  // variable to hold alpaca image URL
  let imageURL = '';

  /**
   * IIFE | Draw Alpaca body parts' images on canvas
   *
   * @return void
   *
   * source: https://javascript.plainenglish.io/how-to-download-a-text-image-file-in-javascript-without-a-server-9ccadfbe4694
   */
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
      context.drawImage(accessoriesImage, 0, 0, canvas.width, canvas.height);
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
      context.drawImage(earsImage, 0, 0, canvas.width, canvas.height);
    };

    // draw eyes
    const eyesImage = new Image();
    eyesImage.crossOrigin = 'anonymous';
    eyesImage.src = eyesPath;
    eyesImage.onload = () => {
      context.drawImage(eyesImage, 0, 0, canvas.width, canvas.height);
    };

    // draw hair
    const hairImage = new Image();
    hairImage.crossOrigin = 'anonymous';
    hairImage.src = hairPath;
    hairImage.onload = () => {
      context.drawImage(hairImage, 0, 0, canvas.width, canvas.height);
    };

    // draw leg
    const legImage = new Image();
    legImage.crossOrigin = 'anonymous';
    legImage.src = legPath;
    legImage.onload = () => {
      context.drawImage(legImage, 0, 0, canvas.width, canvas.height);
    };

    // draw mouth
    const mouthImage = new Image();
    mouthImage.crossOrigin = 'anonymous';
    mouthImage.src = mouthPath;
    mouthImage.onload = () => {
      context.drawImage(mouthImage, 0, 0, canvas.width, canvas.height);
    };

    // draw neck
    const neckImage = new Image();
    neckImage.crossOrigin = 'anonymous';
    neckImage.src = neckPath;
    neckImage.onload = () => {
      context.drawImage(neckImage, 0, 0, canvas.width, canvas.height);
    };

    // draw nose
    const noseImage = new Image();
    noseImage.crossOrigin = 'anonymous';
    noseImage.src = nosePath;
    noseImage.onload = () => {
      context.drawImage(noseImage, 0, 0, canvas.width, canvas.height);
    };

    /* Finally, retrieve the encoded image content as a base64 String from canvas object */
    imageURL = await Promise.resolve(canvas.toDataURL());
  })();

  setImageURL(imageURL);

  // return <image src={alpacaImageURL} alt='Alpaca Image' />;
}

export default AlpacaImage;
