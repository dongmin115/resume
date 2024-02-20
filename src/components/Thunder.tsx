import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Thunder() {
    
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        //초기세팅
        const canvas = canvasRef.current as HTMLCanvasElement;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        const renderer = new THREE.WebGLRenderer({ canvas: canvas });
        renderer.setSize(window.innerWidth, window.innerHeight);

        //큐브생성
        const geomertry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geomertry, material);
        scene.add(cube);

        camera.position.z = 2;

        function animate() {
            requestAnimationFrame( animate );
            cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
            renderer.render( scene, camera );
        }
        animate();
    },[])
    
    
    return (
        <div className='w-screen h-screen'>
            <canvas ref={canvasRef}/>
        </div>
    )
}