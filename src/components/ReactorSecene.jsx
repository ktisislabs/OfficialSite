import { Canvas } from '@react-three/fiber';
import React from 'react';
import ArcReactor from '../Models/Arcreactor';

function ReactorSecene() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'absolute' }}>
      <Canvas
        style={{ background: 'black' }}
        camera={{ position: [0, 0, 10], fov: 50 }} // Add camera settings for better view
      >
        {/* Global Lighting */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 10, 5]} intensity={1}  />

        {/* Render ArcReactor */}
        <ArcReactor position={[0, -2, 5]} />
      </Canvas>
    </div>
  );
}

export default ReactorSecene;
