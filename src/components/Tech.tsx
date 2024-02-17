import { useEffect } from "react";

export default function Tech() {
    useEffect(() => {
    const canvas = document.getElementById('tech_canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    const circles: { x: number, y: number, radius: number, speed: number }[] = [];

    function setCanvasSize() {
        const dpr = window.devicePixelRatio;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
        animate();
    }

    function drawCircle(x: number, y: number, radius: number) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
      ctx.fill();
      ctx.closePath();
    }

    function updateCircles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];
        circle.y -= circle.speed;
        if (circle.y < -circle.radius) {
          circle.y = canvas.height + circle.radius;
        }
        drawCircle(circle.x, circle.y, circle.radius);
      }
    }

    function createCircle() {
        if(circles.length < 20){
        const x = Math.random() * canvas.width;
        const y = canvas.height + Math.random() * canvas.height;
        const radius = Math.random() * 1 + 5;
        const speed = Math.random() * 0.5;
        circles.push({ x, y, radius, speed });
        }
    }

    function animate() {
      createCircle();
      updateCircles();
      return requestAnimationFrame(animate);
    }
    
    setCanvasSize();
    animate();   

    return () => {
        cancelAnimationFrame(animate());
    };
    },[])
    return (
        <div className="w-screen h-screen">
            <canvas id="tech_canvas" className="fixed top-0 left-0 -z-10" />
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
