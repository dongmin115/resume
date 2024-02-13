import AOS from 'aos';
import { useEffect, useState } from 'react';
import Main from './components/Main';

function App() {
  useEffect(() => {
    AOS.init();
  })

  return (
    <div className='overflow-x-hidden'>
     <Main/>
    </div>
  )
}

export default App
