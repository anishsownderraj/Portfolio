// dependencies
import React, { useRef, useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
// assets
import foxScene from '../assets/3d/fox.glb';


const Fox = ({ isRotating, islandRotation, islandSlow, ...props }) => {
    const foxRef = useRef();
    const { scene, animations } = useGLTF(foxScene);
    const { actions } = useAnimations(animations, foxRef);

    useEffect(() => {
        if (isRotating) {
            actions['hit'].play();
        } else if (islandSlow) {
            actions[islandSlow].play();
        } else {
            actions['walk'].stop();
            actions['hit'].stop();
        };
    }, [isRotating, islandSlow]);

    return (
        <mesh {...props} ref={foxRef}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Fox;