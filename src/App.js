import React from 'react';
import Content from './components/Content';
import Header from "./components/Header";
import NewHeader from './components/NewHeader';
import Featured from './components/Featured';
import Gallery from './components/Gallery';

import NewSlider from './components/Testinomial/NewSlider';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
     
     <Header/>
     <Featured/>
     <Gallery/>
    <NewSlider/>
    <Footer/>
    </div>
  );
}

export default App;
