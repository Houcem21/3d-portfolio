import React, {useRef, useEffect} from 'react'

import birdScene from '../assets/3d/bird.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const birdRef = useRef();
  const {scene, animations} = useGLTF(birdScene);
  
  const {actions} = useAnimations(animations, birdRef);
  

  useEffect(() => {
    actions['Take 001'].play();
  }, []);

  useFrame(({clock, camera}) => {

    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (birdRef.current.position.x > camera.position.x + 5 || birdRef.current.position.y > camera.position.y + 5) {
      birdRef.current.rotation.y = Math.PI;
      birdRef.current.position.x = Math.random() * 10;
      birdRef.current.position.z = Math.random() * 10;
    }
    else if (birdRef.current.position.x < camera.position.x - 5) {
      birdRef.current.rotation.y = 0;
    } 

    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z += 0.01;
    }
    else {
      birdRef.current.rotation.y = Math.PI;
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z -= 0.01;
    }
  })

  return (
    <mesh position={[-1,0,1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird