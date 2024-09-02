// dependencies
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
// assets
import skyScene from '../assets/3d/sky.glb';

const Sky = ({ isRotating }) => {
    const sky = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_, delta) => {
        skyRef.current.rotation.y += 0.15 * delta;
    });

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    );
};

export default Sky;