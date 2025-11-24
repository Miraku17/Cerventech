'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function PyramidPiece({
  position,
  color,
  geometry,
  animationOffset
}: {
  position: [number, number, number];
  color: string;
  geometry: THREE.BufferGeometry;
  animationOffset: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialPosition = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      const cycle = 6; // 6 second cycle
      const phase = (time % cycle) / cycle;

      // Animation phases:
      // 0.0 - 0.3: Assembled (pause)
      // 0.3 - 0.5: Shattering (pieces move out)
      // 0.5 - 0.7: Separated (pause)
      // 0.7 - 0.9: Reforming (pieces move back)
      // 0.9 - 1.0: Assembled (pause)

      let offset = 0;
      let rotationY = 0;
      let rotationX = 0;

      if (phase >= 0.3 && phase < 0.5) {
        // Shattering phase
        const t = (phase - 0.3) / 0.2;
        const eased = 1 - Math.pow(1 - t, 3); // ease out cubic
        offset = eased * 2;
        rotationY = eased * Math.PI * 0.3;
        rotationX = eased * Math.PI * 0.2;
      } else if (phase >= 0.5 && phase < 0.7) {
        // Fully separated
        offset = 2;
        rotationY = Math.PI * 0.3;
        rotationX = Math.PI * 0.2;
      } else if (phase >= 0.7 && phase < 0.9) {
        // Reforming phase
        const t = (phase - 0.7) / 0.2;
        const eased = 1 - Math.pow(1 - t, 3); // ease out cubic
        offset = (1 - eased) * 2;
        rotationY = (1 - eased) * Math.PI * 0.3;
        rotationX = (1 - eased) * Math.PI * 0.2;
      }

      // Apply offset based on piece position (spread out from center)
      const direction = initialPosition.clone().normalize();
      const targetPosition = initialPosition.clone().add(
        direction.multiplyScalar(offset * animationOffset)
      );

      meshRef.current.position.lerp(targetPosition, 0.1);
      meshRef.current.rotation.y = rotationY * animationOffset;
      meshRef.current.rotation.x = rotationX * animationOffset;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={position}>
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Pyramid() {
  // Create pyramid geometries for 3 pieces
  const geometries = useMemo(() => {
    // Top piece (pointy tip) - Red
    const topGeometry = new THREE.ConeGeometry(0.5, 1, 4);
    topGeometry.translate(0, 1.5, 0);

    // Middle piece - Blue
    const middleGeometry = new THREE.ConeGeometry(1, 1, 4);
    middleGeometry.translate(0, 0.5, 0);

    // Bottom piece - Red
    const bottomGeometry = new THREE.ConeGeometry(1.5, 1, 4);
    bottomGeometry.translate(0, -0.5, 0);

    // Rotate all pieces to align pyramid
    [topGeometry, middleGeometry, bottomGeometry].forEach(geo => {
      geo.rotateY(Math.PI / 4);
    });

    return { topGeometry, middleGeometry, bottomGeometry };
  }, []);

  return (
    <group>
      {/* Top piece - Red */}
      <PyramidPiece
        position={[0, 0, 0]}
        color="#ef4444"
        geometry={geometries.topGeometry}
        animationOffset={1.5}
      />

      {/* Middle piece - Blue */}
      <PyramidPiece
        position={[0, 0, 0]}
        color="#3b82f6"
        geometry={geometries.middleGeometry}
        animationOffset={1}
      />

      {/* Bottom piece - Red */}
      <PyramidPiece
        position={[0, 0, 0]}
        color="#ef4444"
        geometry={geometries.bottomGeometry}
        animationOffset={0.8}
      />
    </group>
  );
}

const PyramidShatter: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [5, 3, 5], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#3b82f6" />
        <Pyramid />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default PyramidShatter;
