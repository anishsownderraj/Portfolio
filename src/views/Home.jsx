// dependencies
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
// models
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Fox from '../models/Fox';
// components
import Loader from '../components/Loader';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [islandSlow, setIslandSlow] = useState('');
    const [currentStage, setCurrentStage] = useState(1);

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -10.5, -43];
        let rotation = [0, 0, 0];
        if (window.innerWidth < 768) {
            screenScale = [.04, .04, .04];
            screenPosition = [0, -6.5, -43];
        } else {
            screenScale = [.09, .09, .09];
        }

        return [screenScale, screenPosition, rotation];
    };

    const adjustFoxForScreenSize = () => {
        let screenScale, screenPosition;
        if (window.innerWidth < 768) {
            screenScale = [0.1, 0.1, 0.1];
            screenPosition = [0, -1.5, -5];
        } else {
            screenScale = [0.3, 0.3, 0.3];
            screenPosition = [0, -3.4, -4];
        }
        return [screenScale, screenPosition];
    };

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [foxScale, foxPosition] = adjustFoxForScreenSize();

    return (
        <section className='w-full h-screen relative'>
            <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
                {currentStage &&
                    <HomeInfo currentStage={currentStage} />
                }
            </div>
            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ?
                    'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.2, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight
                        position={[1, 1, 1]}
                        intensity={2}
                    />
                    <ambientLight
                        intensity={0.5}
                    />
                    <hemisphereLight
                        skyColor='#b1e1ff'
                        groundColor='#000000'
                        intensity={1}
                    />
                    <Sky
                        isRotating={isRotating}
                    />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                        setIslandSlow={setIslandSlow}
                    />
                    <Bird />
                    <Fox
                        islandSlow={islandSlow}
                        position={foxPosition}
                        scale={foxScale}
                        isRotating={isRotating}
                        rotation={[0, 20.5, 0]}
                    />
                </Suspense>
            </Canvas>
        </section>
    );
};

export default Home;