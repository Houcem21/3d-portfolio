import React, { useEffect, useRef } from 'react'

import planeScene from '../assets/3d/plane.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Plane = ({isRotating, ...props}) => {
  const ref = useRef();
  const {scene, animations} = useGLTF(planeScene);
  const {actions} = useAnimations(animations, ref);

  useEffect(() => {
    actions['Take 001'].play();
    actions['Take 001'].setEffectiveWeight(0.5);
    if (isRotating) {
      actions['Take 001'].setEffectiveWeight(1);
    } 
    else actions['Take 001'].setEffectiveWeight(0.5);
  })
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane