import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

import skyScene from '../assets/3d/sky.glb'

const Sky = ({ isRotating }) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();
    let rotationRatio = 0.01;

    // Set emissive color to make the sky appear darker
    sky.scene.traverse((child) => {
        if (child.isMesh) {
            child.material.emissive.setHex(0x00008B);
        }
    });

    useFrame((_, delta) => {
        skyRef.current.rotation.y += rotationRatio * delta;
        if (isRotating) rotationRatio = 0.05;
        else rotationRatio = 0.01;
    });

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    );
}

export default Sky;