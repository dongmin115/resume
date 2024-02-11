import AOS from 'aos';
import { useEffect, useState } from 'react';
import Title from './components/title';
import Introduce from './components/introduce';

function App() {

  useEffect(() => {
    AOS.init();
  })
  return (
    <div className='overflow-x-hidden'>
     <Title/>
     <Introduce/>
    </div>
  )
}

export default App
