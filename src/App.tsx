import AOS from 'aos';
import { useEffect, useState } from 'react';
import Title from './components/title';
import Introduce from './components/introduce';

function App() {
  const [pages,setPages] = useState(0);
  useEffect(() => {
    AOS.init();
  })
  return (
    ( pages === 0 ? <Title/> : <Introduce/>)
    
  )
}

export default App
