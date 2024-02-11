import AOS from 'aos';
import { useEffect, useState } from 'react';
import Title from './components/title';
import Introduce from './components/introduce';

function App() {
  const [introVisible, setIntroVisible] = useState(false);
  useEffect(() => {
    AOS.init();
  })

  // 스크롤 이벤트 핸들러
  useEffect(() => {
  function handleScroll() {
      // 현재 스크롤 위치 확인
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      // 특정 위치에 도달하면 추가 컴포넌트 표시
      if (scrollPosition > 500) { // 여기서 500은 스크롤 위치임을 나타내는 임의의 값입니다.
          setIntroVisible(true);
          // 스크롤 위치에 따라 확대 비율 조절
          // const scaleFactor = 1 + (scrollPosition - 500) / 1000; // 임의의 확대 비율을 계산합니다.
          // setScaleFactor(scaleFactor);
      } else {
          setIntroVisible(false);
          // setScaleFactor(1); // 스크롤이 처음 위치로 돌아갔을 때 확대 비율 초기화
      }
  }
  
  // 스크롤 이벤트 리스너 등록
  window.addEventListener('scroll', handleScroll);

  // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
  return () => {
      window.removeEventListener('scroll', handleScroll);
  };
  }, []);
  return (
    <div className='overflow-x-hidden'>
     <Title/>
    <Introduce />
    </div>
  )
}

export default App
