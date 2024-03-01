import { useEffect, useState } from "react";

export default function Project() {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0); // 초기값을 0으로 설정합니다.
    // 마우스 커서를 따라다님
    useEffect(() => {
        const handleMouseMove = (event:MouseEvent) => {
        setMousePosition({ x: event.clientX, y: event.clientY });
        };

        // 이벤트 리스너 등록
        document.addEventListener('mousemove', handleMouseMove);

        // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
        return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mousePosition]);
    return (
        <>
        <div className=" w-[25rem] h-[25rem] rounded-full bg-radical-gradient" 
        style={{
            position: 'fixed',
            top: `${mousePosition.y}px`,
            left: `${mousePosition.x}px`,
            transform: 'translate(-50%, -50%)',
        }}/>
        <div className="w-screen h-screen bg-[#212121] flex flex-col justify-around px-[5%]">
            <h1 className="text-3xl">Project</h1>
            <div className="flex flex-row justify-center w-full h-[60%] space-x-6">
                <div className="basis-1/3 h-full rounded-lg border bg-[#2b2b2b] border-solid border-[#eceff133]"></div>
                <div className="basis-1/3 h-full rounded-lg border bg-[#2b2b2b] border-solid border-[#eceff133]"></div>
                <div className="basis-1/3 h-full rounded-lg border bg-[#2b2b2b] border-solid border-[#eceff133]"></div>
            </div>
        </div>
        </>
    )
}