import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default function Three() {
    
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const reactLogoRef = useRef<THREE.Object3D | null>(null);

    useEffect(() => {
        //초기세팅
        const canvas = canvasRef.current as HTMLCanvasElement;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        
        cameraRef.current = camera;

        const renderer = new THREE.WebGLRenderer({ canvas: canvas , antialias: true});
        renderer.setSize(window.innerWidth , window.innerHeight);

        //3D모델 배경 로드
        const loader = new GLTFLoader();

        loader.load('/night_sky_visible_spectrum_monochromatic.glb', function ( gltf ) {

            scene.add( gltf.scene );
            // 모델의 위치를 가져와서 카메라의 초기 위치로 설정
            const modelPosition = gltf.scene.position.clone();
            camera.position.copy(modelPosition);
            camera.position.z = 15;
            

        }, undefined, function ( error ) {

            console.error( error );

        } );

        //3D모델 리액트 로고 로드
        loader.load('/react_logo/scene.gltf', function ( gltf ) {
            reactLogoRef.current = gltf.scene;
            scene.add( gltf.scene );
            // 모델의 위치를 가져와서 카메라의 초기 위치로 설정
            // const modelPosition = gltf.scene.position.clone();
            // camera.position.copy(modelPosition);

        }, undefined, function ( error ) {

            console.error( error );

        } );

        function animate() {
            requestAnimationFrame( animate );
            if (reactLogoRef.current) {
                reactLogoRef.current.rotation.y += 0.01;
            }
            renderer.render( scene, camera );
        }
        animate();

        // 스크롤 이벤트 핸들러
        const handleScroll = () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrollAngle = scrollTop * 0.003; // 스크롤 위치에 따라 카메라의 회전 각도 변경
            // cameraRef.current!.rotation.x = scrollAngle;
            cameraRef.current!.rotation.y = -scrollAngle;
        };

        // 스크롤 이벤트 리스너 등록
        window.addEventListener('scroll', handleScroll);

        // 컴포넌트 언마운트 시 스크롤 이벤트 리스너 제거
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[])
    
    
    return (
        <canvas ref={canvasRef}/>
    )
}