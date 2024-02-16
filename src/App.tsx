import AOS from 'aos';
import { useEffect, useState } from 'react';
import Main from './components/Main';
import Introduce from './components/Introduce';

function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className='overflow-x-hidden w-screen h-[500vh]'>
      <Main/>
    </div>
  )
}

export default App
