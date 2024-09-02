// dependencies
import React, { useRef, useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
// assets
import birdScene from '../assets/3d/bird.glb';

const Bird = () => {
    const birdRef = useRef();
    const { scene, animations } = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(() => {
        actions['Take 001'].play();
    }, []);

    useFrame(({ clock, camera }) => {
        birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

        if (birdRef.current.position.x > camera.position.x + 9) {
            birdRef.current.rotation.y = -1.0;
        } else if (birdRef.current.position.x < camera.position.x - 9) {
            birdRef.current.rotation.y = 1.7;
        }
        if (birdRef.current.rotation.y === 1.7) {
            birdRef.current.position.x += 0.01;
            birdRef.current.position.z -= 0.01;
        } else {
            birdRef.current.position.x -= 0.01;
            birdRef.current.position.z += 0.01;
        }
    });
    return (
        <mesh position={[-5, 2, 1]} rotation={[0, 1.7, 0]}
            scale={[0.003, 0.003, 0.003]}
            ref={birdRef}
        >
            <primitive object={scene} />
        </mesh >
    );
};

export default Bird;