import { useEffect, useRef } from "react";

export default function Strength() {
    const c1Ref = useRef<HTMLCanvasElement>(null);
    const c2Ref = useRef<HTMLCanvasElement>(null);
    const twopi = Math.PI * 2;
    let parts: any[] = [];
    let sizeBase: number;
    let cw: number;
    let ch: number;
    let opt: any;
    let ctx1: CanvasRenderingContext2D| undefined | null = null;
    let ctx2: CanvasRenderingContext2D | null | undefined = null;
    let count: number;

    useEffect(() => {
        function resize() {
            const newCw = window.innerWidth;
            const newCh = window.innerHeight;
            if (cw !== newCw || ch !== newCh) {
                //useRef를 사용하면 null일 수가 없음 -> !를 사용하여 null이 아님을 보장
                cw = c1Ref.current!.width = c2Ref.current!.width = newCw;
                ch = c1Ref.current!.height = c2Ref.current!.height = newCh;
                create();
            }
        }

        function rand(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        function hsla(h: number, s: number, l: number, a: number) {
            return 'hsla(' + h + ',' + s + '%,' + l + '%,' + a + ')';
        }

        function create() {
            if (!ctx1 || !ctx2) return;
            sizeBase = cw + ch;
            count = Math.floor(sizeBase * 0.3);
            const hue = rand(0, 360);
            opt = {
                radiusMin: 1,
                radiusMax: sizeBase * 0.04,
                blurMin: 10,
                blurMax: sizeBase * 0.04,
                hueMin: hue,
                hueMax: hue + 100,
                saturationMin: 10,
                saturationMax: 70,
                lightnessMin: 20,
                lightnessMax: 50,
                alphaMin: 0.1,
                alphaMax: 0.5
            }
            ctx1.clearRect(0, 0, cw, ch);
            ctx1.globalCompositeOperation = 'lighter';
            while (count--) {
                const radius = rand(opt.radiusMin, opt.radiusMax);
                const blur = rand(opt.blurMin, opt.blurMax);
                const x = rand(0, cw);
                const y = rand(0, ch);
                const hue = rand(opt.hueMin, opt.hueMax);
                const saturation = rand(opt.saturationMin, opt.saturationMax);
                const lightness = rand(opt.lightnessMin, opt.lightnessMax);
                const alpha = rand(opt.alphaMin, opt.alphaMax);

                ctx1.shadowColor = hsla(hue, saturation, lightness, alpha);
                ctx1.shadowBlur = blur;
                ctx1.beginPath();
                ctx1.arc(x, y, radius, 0, twopi);
                ctx1.closePath();
                ctx1.fill();
            }

            parts.length = 0;
            for (let i = 0; i < Math.floor((cw + ch) * 0.03); i++) {
                parts.push({
                    radius: rand(1, sizeBase * 0.03),
                    x: rand(0, cw),
                    y: rand(0, ch),
                    angle: rand(0, twopi),
                    vel: rand(0.1, 0.5),
                    tick: rand(0, 10000)
                });
            }
        }

        function init() {
            resize();
            loop();
        }

        function loop() {
            if (!ctx2) return;
            requestAnimationFrame(loop);

            ctx2.clearRect(0, 0, cw, ch);
            ctx2.globalCompositeOperation = 'source-over';
            ctx2.shadowBlur = 0;
            ctx2.drawImage(c1Ref.current as HTMLCanvasElement, 0, 0);
            ctx2.globalCompositeOperation = 'lighter';

            let i = parts.length;
            ctx2.shadowBlur = 15;
            ctx2.shadowColor = '#fff';
            while (i--) {
                const part = parts[i];

                part.x += Math.cos(part.angle) * part.vel;
                part.y += Math.sin(part.angle) * part.vel;
                part.angle += rand(-0.05, 0.05);

                ctx2.beginPath();
                ctx2.arc(part.x, part.y, part.radius, 0, twopi);
                ctx2.fillStyle = hsla(0, 0, 100, 0.075 + Math.cos(part.tick * 0.02) * 0.05);
                ctx2.fill();

                if (part.x - part.radius > cw) { part.x = -part.radius }
                if (part.x + part.radius < 0) { part.x = cw + part.radius }
                if (part.y - part.radius > ch) { part.y = -part.radius }
                if (part.y + part.radius < 0) { part.y = ch + part.radius }

                part.tick++;
            }
        }

        window.addEventListener('resize', resize);

        ctx1 = c1Ref.current?.getContext('2d');
        ctx2 = c2Ref.current?.getContext('2d');
        init();

        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <>
            <canvas ref={c1Ref} className="opacity-0 relative -z-10 inset-0" />
            <canvas ref={c2Ref} className="bg-[#000] relative -z-10 inset-0" />
        </>
    );
}
