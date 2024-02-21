import { useEffect } from "react";
import Three from "./Three";

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
      ctx.fillStyle = `rgba(255, 255, 255, 0.5)`;
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
        if(circles.length < 60){
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 1 + 5;
        const speed = Math.random() * 1 + 0.5;
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
        <div className="w-screen h-screen overflow-hidden bg-transparent">
            <Three />
            <canvas id="tech_canvas" className="w-full h-full inset-0 -z-10 fixed" />
        </div>);
}
