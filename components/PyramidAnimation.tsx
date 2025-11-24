'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Convert lat/long to 3D coordinates on sphere
function latLongToVector3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function ConnectionLine({ start, end, delay }: { start: THREE.Vector3; end: THREE.Vector3; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create curve for the connection
  const curve = useMemo(() => {
    const midPoint = start.clone().add(end).multiplyScalar(0.5);
    midPoint.normalize().multiplyScalar(2.8); // Raise the arc
    return new THREE.QuadraticBezierCurve3(start, midPoint, end);
  }, [start, end]);

  const points = useMemo(() => curve.getPoints(50), [curve]);

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.MeshBasicMaterial;
      // Pulsing effect
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.3;
    }
  });

  // Create tube geometry from curve
  const tubeGeometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 50, 0.01, 8, false);
  }, [curve]);

  return (
    <mesh ref={meshRef} geometry={tubeGeometry}>
      <meshBasicMaterial color="#3b82f6" transparent opacity={0.6} />
    </mesh>
  );
}

function Globe() {
  const globeRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Country locations (lat, long)
  const philippines = useMemo(() => latLongToVector3(12.8797, 121.774, 2), []);
  const countries = useMemo(() => [
    { name: 'USA', pos: latLongToVector3(37.0902, -95.7129, 2) },
    { name: 'UK', pos: latLongToVector3(55.3781, -3.4360, 2) },
    { name: 'Australia', pos: latLongToVector3(-25.2744, 133.7751, 2) },
    { name: 'Japan', pos: latLongToVector3(36.2048, 138.2529, 2) },
    { name: 'Singapore', pos: latLongToVector3(1.3521, 103.8198, 2) },
  ], []);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  // Create star field
  const starGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      const radius = 8 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  // Create earth texture with landmasses
  const earthTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d')!;

    // Ocean
    ctx.fillStyle = '#1e40af';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Simple land representation (continents as rough shapes)
    ctx.fillStyle = '#10b981';

    // Asia/Philippines area
    ctx.fillRect(1400, 400, 300, 200);
    ctx.fillRect(1500, 350, 100, 50);

    // North America
    ctx.fillRect(200, 200, 400, 300);
    ctx.fillRect(300, 150, 200, 100);

    // South America
    ctx.fillRect(400, 550, 200, 350);

    // Europe
    ctx.fillRect(950, 250, 200, 150);

    // Africa
    ctx.fillRect(950, 400, 250, 400);

    // Australia
    ctx.fillRect(1600, 650, 200, 150);

    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <>
      {/* Stars */}
      <points ref={particlesRef} geometry={starGeometry}>
        <pointsMaterial size={0.05} color="#ffffff" transparent opacity={0.6} />
      </points>

      <group ref={globeRef}>
        {/* Earth with landmasses */}
        <mesh>
          <sphereGeometry args={[1.95, 64, 64]} />
          <meshStandardMaterial
            map={earthTexture}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Wireframe overlay */}
        <mesh>
          <sphereGeometry args={[2, 64, 64]} />
          <meshStandardMaterial
            color="#1e293b"
            wireframe={true}
            transparent
            opacity={0.2}
          />
        </mesh>

        {/* Philippines marker - Red */}
        <mesh position={philippines}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#ef4444" />
        </mesh>

        {/* Country markers - Blue */}
        {countries.map((country, i) => (
          <mesh key={i} position={country.pos}>
            <sphereGeometry args={[0.05, 16, 16]} />
            <meshBasicMaterial color="#3b82f6" />
          </mesh>
        ))}

        {/* Connection lines from Philippines */}
        {countries.map((country, i) => (
          <ConnectionLine
            key={i}
            start={philippines}
            end={country.pos}
            delay={i * 0.5}
          />
        ))}
      </group>
    </>
  );
}

const PyramidAnimation: React.FC = () => {
  return (
    <div className="w-full h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={0.8} color="#3b82f6" />
        <Globe />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default PyramidAnimation;
