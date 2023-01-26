import React from 'react';
import { ErrorMsg } from './components/ErrorMsg';
import { Footer } from './components/Footer';
import { MainContent } from './components/MainContent';



const App = () => {
  return (
    <>
        <ErrorMsg />
        <MainContent />
        <Footer />
    </>
  )
}

export default App;
