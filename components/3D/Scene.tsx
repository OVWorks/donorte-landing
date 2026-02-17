'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import BlobMesh from './BlobMesh';
import FloatingShapes from './FloatingShapes';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} color="#2970ff" intensity={2} />

      <BlobMesh />
      <FloatingShapes />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          intensity={0.8}
        />
      </EffectComposer>
    </>
  );
}

export default function Scene() {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
