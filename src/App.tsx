import AOS from 'aos';
import { useEffect } from 'react';
import Main from './components/Main';

function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <div className='overflow-x-hidden w-screen'>
      <Main/>
    </div>
  )
}

export default App
