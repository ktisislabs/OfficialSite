import React, { useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Component to load and display the GLB file with rotation
const Scene = () => {
  const { scene } = useGLTF("/a_windy_day.glb");
  const modelRef = useRef();

  // Automatic rotation with optimized frame updates using requestAnimationFrame
  React.useEffect(() => {
    const rotateModel = () => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.002; // Adjust speed of rotation
      }
      requestAnimationFrame(rotateModel); // Request the next frame
    };

    rotateModel(); // Start rotation loop

    return () => {}; // Cleanup (no need for interval cleanup)
  }, []);

  // Set emissive material properties to make the model brighter
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.emissive = new THREE.Color(1, 1, 1); // Set to white emissive
      child.material.emissiveIntensity = 1.5; // Lower emissive intensity
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
        camera={{ position: [0, 0, 10], fov: 50 }} // Adjust camera position further back
        gl={{ antialias: true }} // Enable anti-aliasing for smoother edges
      >
        {/* Add optimized lighting */}
        <ambientLight intensity={0.5} /> {/* Reduced ambient light intensity */}
        <pointLight position={[0, 10, 10]} intensity={1.5} /> {/* Reduced point light intensity */}
        <directionalLight position={[10, 10, 50]} intensity={2.5} /> {/* Reduced directional light intensity */}
        <directionalLight position={[50, 50, 10]} intensity={3} /> {/* Reduced directional light intensity */}

        {/* OrbitControls for user interaction */}
        <OrbitControls enableZoom={false} enableRotate={true} enablePan={true} />

        {/* Render the rotating scene */}
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HomePageScene;
