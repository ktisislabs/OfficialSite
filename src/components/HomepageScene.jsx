import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from 'three';


// Component to load and display the GLB file with rotation
const Scene = () => {
  const { scene } = useGLTF("/a_windy_day.glb");
  const modelRef = useRef();

  // Automatic rotation
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003; // Adjust speed of rotation
    }
  });

  // Set emissive material properties to make the model brighter
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.emissive = new THREE.Color(1, 1, 1); // Set to white emissive
      child.material.emissiveIntensity = 10.5; // Adjust emissive intensity
    }
  });

  return <primitive object={scene} scale={8} ref={modelRef} position={[0, 0, 0]} />;
};

const HomePageScene = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0, // Send canvas behind the text
      }}
    >
      <Canvas
        style={{ background: "transparent" }}
        c  camera={{ position: [0, 0, 20], fov: 50 }} // Adjust camera position further back
      >
        {/* Add bright lights */}
        <ambientLight intensity={100} /> {/* Increased ambient light intensity */}
        <pointLight position={[0, 10, 10]} intensity={5} /> {/* Increased point light intensity */}
        <directionalLight position={[10, 10, 50]} intensity={8} /> {/* Increased directional light intensity */}
        <directionalLight position={[50, 50, 10]} intensity={15} /> {/* Increased directional light intensity */}
        {/* Render the rotating scene */}
        <Scene />
      </Canvas>
    </div>
  );
};

export default HomePageScene;
