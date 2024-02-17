import { useEffect } from "react";

export default function Tech() {
    useEffect(() => {
    const canvas = document.getElementById('tech_canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 4;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
    },[])
    return (
        <div className="w-screen h-screen">
            <canvas id="tech_canvas" className="w-full h-full fixed top-0 left-0 -z-10" />
            <div className="flex justify-between items-center w-full h-full flex-col">
                <div className="text-5xl basis-[10%] w-fit items-center flex justify-center">Tech</div>
                <div className="w-full flex flex-col basis-[90%] justify-evenly items-center">
                    <div className="w-full flex flex-row h-[30%] items-center justify-evenly">
                        <div className="flex flex-col items-center justify-center mask mask-hexagon-2 overflow-hidden bg-accent" style={{ width: '50%', height: '50%' }}>
                            <div className="text-sm font-bold text-accent-content">TypeScript</div>
                        </div>
                        <div className="flex flex-col items-center justify-center mask mask-hexagon-2 overflow-hidden bg-accent" style={{ width: '50%', height: '50%' }}>
                            <div className="text-sm font-bold text-accent-content">React</div>
                        </div>
                        <div className="flex flex-col items-center justify-center mask mask-hexagon-2 overflow-hidden bg-accent" style={{ width: '50%', height: '50%' }}>
                            <div className="text-sm font-bold text-accent-content">TailwindCss</div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row h-[30%] items-center justify-evenly">
                        <div className="flex flex-col items-center justify-center mask mask-hexagon-2 overflow-hidden bg-accent" style={{ width: '50%', height: '50%' }}>
                            <div className="text-sm font-bold text-accent-content">JavaScript</div>
                        </div>
                        <div className="flex flex-col items-center justify-center mask mask-hexagon-2 overflow-hidden bg-accent" style={{ width: '50%', height: '50%' }}>
                            <div className="text-sm font-bold text-accent-content">Zustand</div>
                        </div>
                        <div className="flex flex-col items-center justify-center mask mask-hexagon-2 overflow-hidden bg-accent" style={{ width: '50%', height: '50%' }}>
                            <div className="text-sm font-bold text-accent-content">Next.js</div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row h-[30%] items-center justify-evenly">
                        <div className="flex flex-col items-center justify-center mask mask-hexagon-2 overflow-hidden bg-accent" style={{ width: '50%', height: '50%' }}>
                            <div className="text-sm font-bold text-accent-content">Github</div>
                        </div>
                        <div className="flex flex-col items-center justify-center mask mask-hexagon-2 overflow-hidden bg-accent" style={{ width: '50%', height: '50%' }}>
                            <div className="text-sm font-bold text-accent-content">Slack</div>
                        </div>
                        <div className="flex flex-col items-center justify-center mask mask-hexagon-2 overflow-hidden bg-accent" style={{ width: '50%', height: '50%' }}>
                            <div className="text-sm font-bold text-accent-content">Notion</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
