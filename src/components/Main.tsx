import { useEffect, useRef, useState } from "react";
import Introduce from "./Introduce";
import Strength from "./Strength";

export default function Main(){

    // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    // const [introVisible, setIntroVisible] = useState(false);
    const [scaleFactor, setScaleFactor] = useState(1);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [showContent,setShowContent] = useState(true);
    const [showContent2,setShowContent2] = useState(true);
    //랜덤으로 색이 바뀌는 그라데이션 효과
    useEffect(()=> {
        var colors = new Array(
            [62,35,255],
            [60,255,60],
            [255,35,98],
            [45,175,230],
            [255,0,255],
            [255,128,0]
        );
          
        var step = 0;
        //color table indices for: 
        // current color left
        // next color left
        // current color right
        // next color right
        var colorIndices = [0,1,2,3];
        
        //transition speed
        var gradientSpeed = 0.002;
        
        function updateGradient()
        {
        if ( $===undefined ) return;
        
        var c0_0 = colors[colorIndices[0]];
        var c0_1 = colors[colorIndices[1]];
        var c1_0 = colors[colorIndices[2]];
        var c1_1 = colors[colorIndices[3]];
        
        var istep = 1 - step;
        var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
        var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
        var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
        var color1 = "rgb("+r1+","+g1+","+b1+")";
        
        var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
        var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
        var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
        var color2 = "rgb("+r2+","+g2+","+b2+")";
        
        $('#gradient').css({
            background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
            background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
        
        step += gradientSpeed;
        if ( step >= 1 )
        {
            step %= 1;
            colorIndices[0] = colorIndices[1];
            colorIndices[2] = colorIndices[3];
            
            //pick two new target color indices
            //do not pick the same as the current one
            colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
            
        }
        requestAnimationFrame(updateGradient);
        }
        updateGradient();
    },[])
    //마우스 커서를 따라다님
    // useEffect(() => {
    //     const handleMouseMove = (event:any) => {
    //     setMousePosition({ x: event.clientX, y: event.clientY });
    //     };

    //     // 이벤트 리스너 등록
    //     document.addEventListener('mousemove', handleMouseMove);

    //     // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    //     return () => {
    //     document.removeEventListener('mousemove', handleMouseMove);
    //     };
    // }, []);
    // 스크롤 이벤트를 통해 특정 요소 확대
    useEffect(() => {
        function handleScroll() {
            const scrollPosition = window.scrollY;
            setScrollPosition(scrollPosition);
            // 스크롤 위치에 따라 확대 비율 조절
            const scaleFactor = 1 + (scrollPosition) / 1000; // 임의의 확대 비율을 계산합니다.
            setScaleFactor(scaleFactor);

            if (scrollPosition >= 549 ) {
                setShowContent2(false);
            } else {
                setShowContent2(true);
            }
            if (scrollPosition >= 1287 ) {
                setShowContent(false);
            } else {
                setShowContent(true);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
        <div id="gradient" className="w-screen h-[150vh]">        
            {/* 마우스 따라다니는 그라데이션 애니메이션
            <div id="gradient" className={`size-10 rounded-full`} 
            style={{
                position: 'fixed',
                left: mousePosition.x,
                top: mousePosition.y,
                transform: 'translate(-50%, -50%)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                pointerEvents: 'none',
                opacity: '70%',
            }}/> */}
            {showContent && 
            <div className="flex justify-center items-center h-screen">
                <div className="mockup-browser bg-base-300 w-[70%] h-[70%] shadow-2xl" style={{position: 'fixed', transform: `scale(${scaleFactor})` }}>
                    <div className="mockup-browser-toolbar">
                        <div className="input">https://dongminlim/resume.com</div>
                    </div>
                    {showContent2 && (
                    <div className="flex bg-base-200 h-[91%] items-center flex-col px-[10%] pt-[5%]">
                        <p className='justify-start w-full text-2xl font-bold'>Resume</p>
                        <div className="divider divider-primary"/>
                        <div className="flex flex-row w-full h-[75%] mb-auto">
                        <div className="skeleton w-2/5 h-full shrink-0"/>
                        <div className="flex flex-col h-full w-[55%] space-y-4 ml-auto">
                            <div className="skeleton w-[45%] h-[9%] mb-1"/>
                            <div className="skeleton w-full h-[7%]"/>
                            <div className="skeleton w-full h-[7%]"/>
                            <div className="skeleton w-full h-[7%]"/>
                            <div className="skeleton w-full h-[7%]"/>
                            <div className="skeleton w-[70%] h-[7%]"/>
                            <div className="flex flex-col w-full h-1/3 space-y-3 justify-end">
                            <div className="skeleton w-[40%] h-[13%]"/>
                            <div className="skeleton w-[40%] h-[13%]"/>
                            <div className="skeleton w-[40%] h-[13%]"/>
                            </div>
                        </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            }
        </div>
        { scrollPosition >= 360 && <Introduce/>}
        { scrollPosition >= 720 && <Strength/>}
        </>
    )   
}