'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function ParticleSphere() {
  const particlesRef = useRef<THREE.Points>(null);

  // Create particle positions on sphere surface
  const particles = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    const colors = new Float32Array(1000 * 3);

    for (let i = 0; i < 1000; i++) {
      // Random position on sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Blue color gradient
      colors[i * 3] = 0.2 + Math.random() * 0.3; // R
      colors[i * 3 + 1] = 0.5 + Math.random() * 0.3; // G
      colors[i * 3 + 2] = 0.9 + Math.random() * 0.1; // B
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.1;

      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
      particlesRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={1000}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={1000}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function OrbitRing({ radius, speed, color, tilt }: { radius: number; speed: number; color: string; tilt: number }) {
  const ringRef = useRef<THREE.Mesh>(null);
  const particleRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * speed;
    }
    if (particleRef.current) {
      const angle = state.clock.elapsedTime * speed;
      particleRef.current.position.x = Math.cos(angle) * radius;
      particleRef.current.position.y = Math.sin(angle) * radius;
    }
  });

  const curve = useMemo(() => {
    const points = [];
    for (let i = 0; i <= 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(angle) * radius, Math.sin(angle) * radius, 0));
    }
    return new THREE.CatmullRomCurve3(points, true);
  }, [radius]);

  const tubeGeometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 64, 0.02, 8, true);
  }, [curve]);

  return (
    <group rotation={[tilt, 0, 0]}>
      <mesh ref={ringRef} geometry={tubeGeometry}>
        <meshBasicMaterial color={color} transparent opacity={0.4} />
      </mesh>
      {/* Orbiting particle */}
      <mesh ref={particleRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={color} />
      </mesh>
    </group>
  );
}

function DataNodes() {
  const nodesRef = useRef<THREE.Group>(null);

  const nodePositions = useMemo(() => {
    return [
      { pos: new THREE.Vector3(2.5, 1, 0.5), delay: 0 },
      { pos: new THREE.Vector3(-2.5, -1, -0.5), delay: 1 },
      { pos: new THREE.Vector3(0.5, 2.5, 1), delay: 2 },
      { pos: new THREE.Vector3(-1, -2.5, 0.5), delay: 3 },
      { pos: new THREE.Vector3(2, 0, 2.5), delay: 4 },
      { pos: new THREE.Vector3(-2, 0, -2.5), delay: 5 },
    ];
  }, []);

  useFrame((state) => {
    if (nodesRef.current) {
      nodesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={nodesRef}>
      {nodePositions.map((node, i) => (
        <FloatingNode key={i} position={node.pos} delay={node.delay} />
      ))}
    </group>
  );
}

function FloatingNode({ position, delay }: { position: THREE.Vector3; delay: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.elapsedTime + delay;
      meshRef.current.position.y = position.y + Math.sin(t) * 0.2;

      // Pulsing glow
      const scale = 1 + Math.sin(t * 3) * 0.3;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <octahedronGeometry args={[0.12, 0]} />
      <meshBasicMaterial color="#3b82f6" transparent opacity={0.8} />
    </mesh>
  );
}

function ConnectionLines() {
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.08;
    }
  });

  const connections = useMemo(() => {
    const points = [];
    for (let i = 0; i < 20; i++) {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      );
      const end = new THREE.Vector3(0, 0, 0); // Connect to center
      points.push({ start, end });
    }
    return points;
  }, []);

  return (
    <group ref={linesRef}>
      {connections.map((conn, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([
                conn.start.x, conn.start.y, conn.start.z,
                conn.end.x, conn.end.y, conn.end.z
              ])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#3b82f6" transparent opacity={0.1} />
        </line>
      ))}
    </group>
  );
}

function CoreSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (sphereRef.current) {
      // Gentle pulsing
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.08;
      sphereRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[1.8, 64, 64]} />
      <meshStandardMaterial
        color="#1e40af"
        transparent
        opacity={0.15}
        wireframe={false}
      />
    </mesh>
  );
}

const NetworkSphere: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60a5fa" />

        {/* Core glowing sphere */}
        <CoreSphere />

        {/* Particle cloud */}
        <ParticleSphere />

        {/* Orbiting rings */}
        <OrbitRing radius={2.8} speed={0.3} color="#3b82f6" tilt={Math.PI / 6} />
        <OrbitRing radius={3.2} speed={-0.2} color="#60a5fa" tilt={-Math.PI / 8} />
        <OrbitRing radius={3.5} speed={0.25} color="#2563eb" tilt={Math.PI / 4} />

        {/* Floating data nodes */}
        <DataNodes />

        {/* Connection lines */}
        <ConnectionLines />

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

export default NetworkSphere;
