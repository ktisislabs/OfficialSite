import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
export function ArcReactor(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/technology_aperture_out.glb'); // Correct path
  const { actions } = useAnimations(animations, group);
 

  // Automatically play all animations on load
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.setLoop(THREE.LoopOnce); // Play only once
        action.clampWhenFinished = true; // Stop at the last frame
        action.play();
      });
    }
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={9.308}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Kejiguang_0">
                <group name="quan1_1" position={[0, 0.072, 0]} scale={0.101}>
                  <mesh geometry={nodes.Object_5.geometry} material={materials.material} />
                </group>
                <group name="quan2_2" position={[0, 0.257, 0]} scale={0.074}>
                  <mesh geometry={nodes.Object_7.geometry} material={materials.material_1} />
                </group>
                <group name="quan3_3" position={[0, 0.185, 0]} scale={0.086}>
                  <mesh geometry={nodes.Object_9.geometry} material={materials.material_2} />
                </group>
                <group name="quan4_4" position={[0, 0.052, 0]} scale={[0.129, -0.211, 0.129]}>
                  <mesh geometry={nodes.Object_11.geometry} material={materials.material_3} />
                </group>
                <group name="quan3_1_5" position={[0, 0.11, 0]} rotation={[-Math.PI, 1.255, -Math.PI]} scale={0.075}>
                  <mesh geometry={nodes.Object_13.geometry} material={materials.material_2} />
                </group>
                <group
                  name="guanghuan__6"
                  position={[0, -0.053, 0]}
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={[50.416, 50.416, 90.843]}>
                  <mesh geometry={nodes.Object_15.geometry} material={materials.jianbian} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

// Preload the GLTF file from the correct path
useGLTF.preload('/technology_aperture_out.glb');
export default ArcReactor;
