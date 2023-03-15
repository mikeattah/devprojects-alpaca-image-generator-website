// import React from 'react';
import './AlpacaImage.css';

function AlpacaImage({
  accessories,
  backgrounds,
  ears,
  eyes,
  hair,
  leg,
  mouth,
  neck,
  nose,
  handleSetImage,
}) {
  // variable to hold alpaca image URL
  let alpacaImageURL = '';

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
    let accessoriesImage = new Image();
    accessoriesImage.crossOrigin = 'anonymous';
    accessoriesImage.src = accessories;
    accessoriesImage.onload = () => {
      context.drawImage(accessoriesImage, 0, 0, canvas.width, canvas.height);
    };

    // draw backgrounds
    let backgroundsImage = new Image();
    backgroundsImage.crossOrigin = 'anonymous';
    backgroundsImage.src = backgrounds;
    backgroundsImage.onload = () => {
      context.drawImage(backgroundsImage, 0, 0, canvas.width, canvas.height);
    };

    // draw ears
    let earsImage = new Image();
    earsImage.crossOrigin = 'anonymous';
    earsImage.src = ears;
    earsImage.onload = () => {
      context.drawImage(earsImage, 0, 0, canvas.width, canvas.height);
    };

    // draw eyes
    let eyesImage = new Image();
    eyesImage.crossOrigin = 'anonymous';
    eyesImage.src = eyes;
    eyesImage.onload = () => {
      context.drawImage(eyesImage, 0, 0, canvas.width, canvas.height);
    };

    // draw hair
    let hairImage = new Image();
    hairImage.crossOrigin = 'anonymous';
    hairImage.src = hair;
    hairImage.onload = () => {
      context.drawImage(hairImage, 0, 0, canvas.width, canvas.height);
    };

    // draw leg
    let legImage = new Image();
    legImage.crossOrigin = 'anonymous';
    legImage.src = leg;
    legImage.onload = () => {
      context.drawImage(legImage, 0, 0, canvas.width, canvas.height);
    };

    // draw mouth
    let mouthImage = new Image();
    mouthImage.crossOrigin = 'anonymous';
    mouthImage.src = mouth;
    mouthImage.onload = () => {
      context.drawImage(mouthImage, 0, 0, canvas.width, canvas.height);
    };

    // draw neck
    let neckImage = new Image();
    neckImage.crossOrigin = 'anonymous';
    neckImage.src = neck;
    neckImage.onload = () => {
      context.drawImage(neckImage, 0, 0, canvas.width, canvas.height);
    };

    // draw nose
    let noseImage = new Image();
    noseImage.crossOrigin = 'anonymous';
    noseImage.src = nose;
    noseImage.onload = () => {
      context.drawImage(noseImage, 0, 0, canvas.width, canvas.height);
    };

    /* Finally, retrieve the encoded image content as a base64 String from canvas object */
    alpacaImageURL = await Promise.resolve(canvas.toDataURL());
  })();

  handleSetImage(alpacaImageURL);

  // return <image src={alpacaImageURL} alt='Alpaca Image' />;
}

export default AlpacaImage;
