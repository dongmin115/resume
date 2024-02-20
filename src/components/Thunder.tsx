import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function Thunder() {
    
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        //초기세팅
        const canvas = canvasRef.current as HTMLCanvasElement;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 10;


        const renderer = new THREE.WebGLRenderer({ canvas: canvas , antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);

        //3D모델 로드
        const loader = new GLTFLoader();

        loader.load('/night_sky_visible_spectrum_monochromatic.glb', function ( gltf ) {

            scene.add( gltf.scene );
            console.log(gltf);
            
            // //모델 회전
            // const initialRotation = new THREE.Euler(0, 0, 0, 'XYZ');
            // gltf.scene.rotation.copy(initialRotation);
            // // 모델의 회전을 갱신하는 함수입니다.
            // function updateRotation() {
            //     // 모델의 현재 회전 각도를 가져옵니다.
            //     const currentRotation = gltf.scene.rotation.clone();

            //     // x, y 축의 회전 각도를 더합니다.
            //     currentRotation.x += 0.005;
            //     currentRotation.y += 0.005;

            //     // 모델의 회전 각도를 설정합니다.
            //     gltf.scene.rotation.copy(currentRotation);
            // }
            

        }, undefined, function ( error ) {

            console.error( error );

        } );

        function animate() {
            requestAnimationFrame( animate );
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