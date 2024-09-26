import React, { Suspense } from 'react';
import { Canvas } from await '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const LaptopModel = () => {
  return (
      <mesh>
          <boxGeometry args={[1, 0.5, 0.1]} />
          <meshStandardMaterial color="blue" />
      </mesh>
  );
};



const Graph = () => {
    return (
        <Canvas style={{ height: '10px', width: '10%' }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 5]} intensity={1} />
            <Suspense fallback={<span>Loading...</span>}>
                <LaptopModel />
                <OrbitControls />
            </Suspense>
        </Canvas>
    );
};

export default Graph;
