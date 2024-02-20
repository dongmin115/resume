import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function Thunder() {
    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

    useEffect(() => {
        //초기세팅
        const canvas = canvasRef.current as HTMLCanvasElement;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ canvas: canvas , antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);

        //3D모델 로드
        const loader = new GLTFLoader();

        loader.load('/night_sky_visible_spectrum_monochromatic.glb', function ( gltf ) {

            scene.add( gltf.scene );
            console.log(gltf);
            

        }, undefined, function ( error ) {

            console.error( error );

        } );

        function animate() {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        }
        animate();

        // 스크롤 이벤트 핸들러
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            cameraRef.current!.position.z = scrollTop * 0.01; // 스크롤 위치에 따라 카메라의 y 위치 변경
        };

        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])
    
    
    return (
        <div className='w-screen h-screen'>
            <canvas ref={canvasRef}/>
        </div>
    )
}