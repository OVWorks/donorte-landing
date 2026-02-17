'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingSphere({ position, scale, color, speed, distort }: {
  position: [number, number, number];
  scale: number;
  color: string;
  speed: number;
  distort: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.6}
          distort={distort}
          speed={speed}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function GlowRing({ position, scale, color }: {
  position: [number, number, number];
  scale: number;
  color: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[1, 0.02, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.4} />
    </mesh>
  );
}

export default function FloatingShapes() {
  return (
    <group>
      {/* Main decorative spheres */}
      <FloatingSphere
        position={[-4, 2, -5]}
        scale={0.8}
        color="#2970ff"
        speed={1.5}
        distort={0.4}
      />
      <FloatingSphere
        position={[4, -1, -6]}
        scale={0.5}
        color="#4d8eff"
        speed={2}
        distort={0.3}
      />
      <FloatingSphere
        position={[3, 3, -4]}
        scale={0.3}
        color="#d1e0ff"
        speed={1.2}
        distort={0.5}
      />
      <FloatingSphere
        position={[-3, -2, -5]}
        scale={0.4}
        color="#1d5ed9"
        speed={1.8}
        distort={0.35}
      />

      {/* Glow rings */}
      <GlowRing position={[0, 0, -3]} scale={3} color="#2970ff" />
      <GlowRing position={[2, 1, -4]} scale={1.5} color="#4d8eff" />
    </group>
  );
}
