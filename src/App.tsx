import React, { useState, useEffect } from 'react';
import Body from './body/body';
import Foot from './footer/footer';
import NavBar from './header/Categories';
import Header from './header/header';



class App extends React.Component {
  render() {
    return (
      <div>
        <div className='fixed top-0 w-full flex justify-center z-100 bg-white'>
            <Header/>
          </div>
          <div className='mt-[200px]'>
            <Body/>
            
            <Foot/>
          </div>
          
      </div>
    );
  }
}

export default App;
