import React from 'react';
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
}) {
  // variable to hold alpaca image URL
  let alpacaImageURL = '';

  /**
   * IIFE | Draw Alpaca body parts images on canvas
   *
   * @return void
   *
   * source: https://javascript.plainenglish.io/how-to-download-a-text-image-file-in-javascript-without-a-server-9ccadfbe4694
   */
  (async () => {
    const canvas = document.createElement('canvas');
    let cntrWidth = document.querySelector('.alpaca-image-container').width,
      cntrHeight = document.querySelector('.alpaca-image-container').height;
    canvas.width = cntrWidth;
    canvas.height = cntrHeight;

    /* Finally, retrieve the encoded image content as a base64 String from canvas object */
    alpacaImageURL = await Promise.resolve(canvas.toDataURL());
  })();

  return <image src={alpacaImageURL} alt='Alpaca Image' />;
}

export default AlpacaImage;
