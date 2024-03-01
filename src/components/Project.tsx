import { useEffect, useState } from "react";

export default function Project() {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
        <div className="w-screen h-screen">
            <h1>Project</h1>
            <div className="flex flex-row justify-center w-full h-1/2 space-x-10">
                <div className="basis-1/4 rounded-lg border">1</div>
                <div className="basis-1/4 rounded-lg border">2</div>
                <div className="basis-1/4 rounded-lg border">3</div>
            </div>
        </div>
    )
}