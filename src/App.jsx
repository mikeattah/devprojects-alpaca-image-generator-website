import { useState } from 'react';
import './App.css';
import { AlpacaImage } from './components/molecules';
import { ButtonOne, ButtonTwo } from './components/atoms';
import data from './assets/data/data.json';

function App() {
  const [current, setCurrent] = useState(data[0].name);
  return (
    <div className='app-container'>
      <header className='app-header'>
        <h1 className='app-title'>ALPACA GENERATOR</h1>
      </header>
      <main className='app-main'>
        <section className='app-section-left'>
          <AlpacaImage />
          <div className='app-section-left-buttons'>
            <ButtonOne name='Random' path='' />
            <ButtonOne name='Download' path='' />
          </div>
        </section>
        <section className='app-section-right'>
          <div className='app-section-right-group'>
            <h2 className='app-sub-title'>ACCESSORIZE THE ALPACA&apos;S</h2>
            <div className='app-section-right-buttons'>
              {data.map(item => (
                <ButtonTwo name={item.name} />
              ))}
            </div>
          </div>
          <div className='app-section-right-group'>
            <h2 className='app-sub-title'>STYLE</h2>
            <div className='app-section-right-buttons'>
              {data.map(item => {
                if (item.name === current) {
                  item.images.map(element => <ButtonTwo name={element} />);
                }
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
