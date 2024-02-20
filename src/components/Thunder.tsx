import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Thunder() {
    
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current as HTMLCanvasElement;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        const renderer = new THREE.WebGLRenderer({ canvas: canvas });
        renderer.setSize(window.innerWidth, window.innerHeight);
    },[])
    
    
    return (
        <div className='w-screen h-screen bg-black'>
            <canvas ref={canvasRef}/>
        </div>
    )
}