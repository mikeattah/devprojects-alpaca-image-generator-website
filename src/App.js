import React from "react";
import "./App.css";
import AlpacaImage from "./components/alpacaimage/alpacaimage";
import ButtonOne from "./components/buttons";
import ButtonTwo from "./components/buttons";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">ALPACA GENERATOR</h1>
      </header>
      <main className="app-main">
        <section className="app-section-left">
          <AlpacaImage />
          <div className="app-section-left-buttons"></div>
        </section>
        <section className="app-section-right">
          <div className="app-section-right-group">
            <h2 className="app-sub-title">ACCESSORIZE THE ALPACA'S</h2>
            <div className="app-section-right-buttons"></div>
          </div>
          <div className="app-section-right-group">
            <h2 className="app-sub-title">STYLE</h2>
            <div className="app-section-right-buttons"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
