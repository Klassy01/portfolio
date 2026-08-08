import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useDeviceTier } from '../../hooks/useDeviceTier';

/* ─── Scroll-Driven Floating Neural Substrate ──────────── */
const FloatingSubstrate: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const nodesGroupRef = useRef<THREE.Group>(null);
  const scrollRef = useRef(0);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate 1,500 particles distributed across deep 3D space
  const { positions, colors } = React.useMemo(() => {
    const count = 1500;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const cyan = new THREE.Color('#5fd8e0');
    const mint = new THREE.Color('#a9e9d5');
    const mid = new THREE.Color('#4db9c4');

    for (let i = 0; i < count; i++) {
      // Distribute in a tall cylinder-like 3D space along Y axis
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;

      const choice = Math.random();
      const col = choice < 0.4 ? cyan : choice < 0.7 ? mid : mint;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const scroll = scrollRef.current;
    const { x, y } = state.pointer;

    // Rotate particle cloud gently + drift with scroll
    if (pointsRef.current) {
      pointsRef.current.rotation.y = time * 0.03 + scroll * Math.PI * 0.5;
      pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.1 + y * 0.05;
      pointsRef.current.position.y = -scroll * 15;
    }

    // Rotate floating wireframe nodes
    if (nodesGroupRef.current) {
      nodesGroupRef.current.rotation.y = -time * 0.05 + scroll * Math.PI * 0.8;
      nodesGroupRef.current.rotation.x = time * 0.03 + x * 0.05;
      nodesGroupRef.current.position.y = -scroll * 20;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />

      {/* Particle Cloud */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          vertexColors
          transparent
          opacity={0.5}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Floating Wireframe Geometries at depth */}
      <group ref={nodesGroupRef}>
        {[
          { pos: [-12, 10, -8], scale: 1.5, type: 'ico' },
          { pos: [14, 2, -10], scale: 1.8, type: 'oct' },
          { pos: [-10, -12, -6], scale: 1.2, type: 'ico' },
          { pos: [12, -22, -9], scale: 1.6, type: 'oct' },
          { pos: [-8, -32, -7], scale: 1.4, type: 'ico' },
        ].map((node, i) => (
          <mesh key={i} position={node.pos as [number, number, number]}>
            {node.type === 'ico' ? (
              <icosahedronGeometry args={[node.scale, 1]} />
            ) : (
              <octahedronGeometry args={[node.scale, 0]} />
            )}
            <meshBasicMaterial
              color={i % 2 === 0 ? '#4db9c4' : '#5fd8e0'}
              wireframe
              transparent
              opacity={0.25}
            />
          </mesh>
        ))}
      </group>
    </>
  );
};

/* ─── Main Export ──────────────────────────────────────── */
const GlobalBackgroundCanvas: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const deviceTier = useDeviceTier();

  if (reducedMotion || deviceTier === 'low') {
    return null; // CSS grid fallback handled in index.css
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 12], fov: 60 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true }}
          style={{ background: 'transparent' }}
        >
          <FloatingSubstrate />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default GlobalBackgroundCanvas;
